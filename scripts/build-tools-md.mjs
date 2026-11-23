#!/usr/bin/env node
// Builds TOOLS.md from a SuiteDash MCP tools export (tools.json). No dependencies.
//
//   node scripts/build-tools-md.mjs --in <raw tools.json> [--data data/tools.json] [--out TOOLS.md] [--date YYYY-MM-DD]
//
// The raw export holds input schemas and other fields that must not be published. This script keeps only
// name, title, description and annotations, writes that filtered copy to --data, and writes TOOLS.md from it.
// It exits with code 1, writing nothing, when a public field fails the safety check.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const inPath = opt('in', path.join(root, 'data', 'tools.json'));
const dataPath = opt('data', path.join(root, 'data', 'tools.json'));
const outPath = opt('out', path.join(root, 'TOOLS.md'));
const date = opt('date', new Date().toISOString().slice(0, 10));
const areasPath = opt('areas', path.join(here, 'tool-areas.json'));

const raw = JSON.parse(readFileSync(inPath, 'utf8'));
if (!Array.isArray(raw.tools)) fail(['the input has no "tools" array']);

// 1. Leave out tools flagged internal or staff-debug (no such flag exists today; this keeps one out if it is added).
const flagged = (t) =>
  [t._meta, t.annotations, t].some(
    (o) => o && (o.internal === true || o.staffDebug === true || o.staff_debug === true || o.debug === true),
  );
const kept = raw.tools.filter((t) => !flagged(t));

// 2. Keep only the public fields.
const ANNOTATION_KEYS = ['title', 'readOnlyHint', 'destructiveHint', 'idempotentHint', 'openWorldHint'];
const tools = kept
  .map((t) => {
    const annotations = {};
    for (const k of ANNOTATION_KEYS) if (t.annotations && k in t.annotations) annotations[k] = t.annotations[k];
    return { name: String(t.name), title: String(t.title ?? ''), description: String(t.description ?? ''), annotations };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// 3. Safety check on everything that will be public.
const checks = [
  [/\binternal\b/i, 'the word "internal"'],
  [/\bTODO\b/i, '"TODO"'],
  [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, 'an email address'],
  [/\blocalhost\b|\b127\.0\.0\.1\b|\b(10|192\.168|172\.(1[6-9]|2\d|3[01]))\.\d+\.\d+/i, 'a local or private address'],
  [/\b[a-z0-9-]+(\.[a-z0-9-]+)*\.(local|internal|lan|localdomain|test)\b/i, 'an internal hostname'],
  [/\b(staging|stage|dev|qa|models)[.-][a-z0-9-]+\.[a-z]{2,}\b/i, 'a staging or test hostname'],
];
const offenders = [];
for (const t of tools) {
  for (const field of ['name', 'title', 'description', 'annotations.title']) {
    const value = field === 'annotations.title' ? t.annotations.title ?? '' : t[field];
    for (const [re, what] of checks) if (re.test(value)) offenders.push(`${t.name} (${field}): contains ${what}: ${value}`);
  }
}
if (offenders.length) fail(offenders);

// 4. Group by area.
const map = JSON.parse(readFileSync(areasPath, 'utf8'));
const areaOrder = [...new Set([...(map.display ?? []), ...map.areas.map((a) => a.area), ...Object.values(map.names ?? {})])];
const areaOf = (name) => {
  if (map.names?.[name]) return map.names[name];
  for (const a of map.areas) if (a.patterns.some((p) => new RegExp(p).test(name))) return a.area;
  return 'Other';
};
const groups = new Map();
for (const t of tools) {
  const area = areaOf(t.name);
  if (!groups.has(area)) groups.set(area, []);
  groups.get(area).push(t);
}
const orderedAreas = [...areaOrder.filter((a) => groups.has(a)), ...(groups.has('Other') ? ['Other'] : [])];

// 5. Write TOOLS.md.
const ASKS = /^Asks the person to confirm in the app before it acts\.\s*/;
const kind = (t) => (t.annotations.readOnlyHint ? 'Read' : t.annotations.destructiveHint ? 'Destructive' : 'Write');
const cell = (s) => noDashes(s).replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const reads = tools.filter((t) => t.annotations.readOnlyHint).length;
const about = Math.round(tools.length / 10) * 10;

const lines = [
  '# SuiteDash MCP tools',
  '',
  'This list is generated from the live SuiteDash MCP server\'s tool definitions. Nobody edits it by hand.',
  '',
  `Last updated: ${date} (UTC).`,
  '',
  'The server\'s own `tools/list` is always authoritative. Your A.I. app loads the live list each time it connects, and each person is offered only the tools an admin switched on for them that the account\'s plan includes.',
  '',
  `About ${about} tools: ${reads} read and ${tools.length - reads} write.`,
  '',
  'Kind: **Read** finds or reads and changes nothing. **Write** creates or changes something. **Destructive** can remove or overwrite data, or reach people outside your account, so treat it with care. "Asks first" means your A.I. app shows the request and waits for you to approve it.',
  '',
  '## Areas',
  '',
  ...orderedAreas.map((a) => `- [${a}](#${slug(a)}) (${groups.get(a).length})`),
  '',
];
for (const area of orderedAreas) {
  lines.push(`## ${area}`, '', '| Name | Title | What it does | Kind |', '|---|---|---|---|');
  for (const t of groups.get(area)) {
    const asks = ASKS.test(t.description);
    const desc = t.description.replace(ASKS, '');
    lines.push(`| \`${t.name}\` | ${cell(t.title)} | ${cell(desc)} | ${kind(t)}${asks ? ', asks first' : ''} |`);
  }
  lines.push('');
}
const md = noDashes(lines.join('\n'));

mkdirSync(path.dirname(dataPath), { recursive: true });
writeFileSync(dataPath, JSON.stringify({ serverVersion: raw.serverVersion, protocolVersions: raw.protocolVersions, tools }, null, 2) + '\n');
writeFileSync(outPath, md);
console.log(JSON.stringify({ tools: tools.length, read: reads, write: tools.length - reads, areas: orderedAreas.length, other: groups.get('Other')?.map((t) => t.name) ?? [], leftOut: raw.tools.length - kept.length }));

function noDashes(s) {
  return String(s).replace(/\s*[—–]\s*/g, ', ');
}
function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
}
function fail(list) {
  console.error('TOOLS.md not written. The safety check flagged:');
  for (const l of list) console.error(`  ${l}`);
  process.exit(1);
}
