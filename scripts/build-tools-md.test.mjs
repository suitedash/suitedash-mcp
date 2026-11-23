// Regression tests for build-tools-md.mjs: the safety filter, the Kind labels and the count line.
// Run with `node --test scripts/` (Node's built-in test runner, no dependencies).
//
// The "real export" case reads data/tools.json, the public copy of the server's export. Set TOOLS_EXPORT to a raw
// export to run it against that instead.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(here, 'build-tools-md.mjs');
const realExport = process.env.TOOLS_EXPORT || path.join(here, '..', 'data', 'tools.json');

const ASKS = 'Asks the person to confirm in the app before it acts. ';

const tool = (name, description, annotations = {}, extra = {}) => ({
  name,
  title: name.replace(/_/g, ' '),
  description,
  annotations: { title: name.replace(/_/g, ' '), readOnlyHint: false, destructiveHint: false, ...annotations },
  ...extra,
});

const baseTools = () => [
  tool('list_contacts', 'Find contacts by name.', { readOnlyHint: true }),
  tool('add_contact_tag', `${ASKS}Give a contact a tag.`, { destructiveHint: true }),
  tool('update_task', 'Change a task title.', { destructiveHint: true }),
];

function run(tools, { allow } = {}) {
  const dir = mkdtempSync(path.join(tmpdir(), 'tools-md-test-'));
  const inPath = path.join(dir, 'raw.json');
  writeFileSync(inPath, JSON.stringify({ serverVersion: '0.0.0', protocolVersions: [], tools }));
  const args = [script, '--in', inPath, '--data', path.join(dir, 'out', 'tools.json'), '--out', path.join(dir, 'TOOLS.md'), '--date', '2000-01-01'];
  if (allow) {
    const allowPath = path.join(dir, 'allow.json');
    writeFileSync(allowPath, JSON.stringify({ allow }));
    args.push('--allow', allowPath);
  }
  const r = spawnSync(process.execPath, args, { encoding: 'utf8' });
  const result = {
    status: r.status,
    stdout: r.stdout,
    stderr: r.stderr,
    wroteMd: existsSync(path.join(dir, 'TOOLS.md')),
    wroteData: existsSync(path.join(dir, 'out', 'tools.json')),
    md: existsSync(path.join(dir, 'TOOLS.md')) ? readFileSync(path.join(dir, 'TOOLS.md'), 'utf8') : '',
  };
  rmSync(dir, { recursive: true, force: true });
  return result;
}

function assertBlocked(r, what) {
  assert.equal(r.status, 1, `expected exit 1 for ${what}; stderr: ${r.stderr}`);
  assert.equal(r.wroteMd, false, `${what}: TOOLS.md must not be written`);
  assert.equal(r.wroteData, false, `${what}: the data file must not be written`);
  assert.match(r.stderr, /TOOLS\.md not written/);
}

test('the real export passes with the expected counts and labels', () => {
  const raw = JSON.parse(readFileSync(realExport, 'utf8'));
  const r = run(raw.tools);
  assert.equal(r.status, 0, r.stderr);
  const summary = JSON.parse(r.stdout.trim());
  assert.equal(summary.tools, 162);
  assert.equal(summary.read, 60);
  assert.equal(summary.changesData, 102);
  assert.match(r.md, /^More than 160 tools: 60 read and 102 that change data\.$/m);
  assert.doesNotMatch(r.md, /Destructive/);
  assert.doesNotMatch(r.md, /[\u2013\u2014]/);
});

test('Kind labels follow readOnlyHint and the confirm sentence, not destructiveHint', () => {
  const r = run(baseTools());
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.md, /\| `list_contacts` \|.*\| Read \|$/m);
  assert.match(r.md, /\| `add_contact_tag` \|.*\| Changes data, asks first \|$/m);
  assert.match(r.md, /\| `update_task` \|.*\| Changes data \|$/m);
  assert.doesNotMatch(r.md, /Destructive/);
  assert.match(r.md, /^3 tools: 1 read and 2 that change data\.$/m);
});

const blocked = [
  ['TODO', 'Find contacts. TODO: add paging.'],
  ['an email address', 'Ask support@example.com for help.'],
  ['a .local hostname', 'Calls app.suitedash.local for data.'],
  ['a link to a host not on the allowlist', 'See https://example.com/help for details.'],
  ['a bare hostname not on the allowlist', 'Works like docs.example.org says.'],
  ['a file path', 'Reads src/protected/modules/crm/ContactService.php for the rules.'],
  ['a path with a leading slash', 'Uses /var/www for files.'],
  ['a file name', 'Settings live in config.yml.'],
  ['the word internal', 'Adds an internal note to the contact.'],
];
for (const [what, description] of blocked) {
  test(`blocks ${what}`, () => {
    const tools = baseTools();
    tools.push(tool('bad_tool', description));
    const r = run(tools);
    assertBlocked(r, what);
    assert.match(r.stderr, /bad_tool \(description\)/);
  });
}

test('blocks a bad title as well as a bad description', () => {
  const tools = baseTools();
  tools.push(tool('bad_title', 'Fine.', {}, { title: 'Internal tool' }));
  assertBlocked(run(tools), 'a bad title');
});

test('lets links to suitedash.com and its help, app and www hosts through', () => {
  const tools = baseTools();
  tools.push(
    tool(
      'linked_tool',
      'See https://help.suitedash.com/article/123-tags and https://app.suitedash.com/frontend/login, www.suitedash.com or suitedash.com.',
    ),
  );
  const r = run(tools);
  assert.equal(r.status, 0, r.stderr);
});

test('everyday slashes are not file paths', () => {
  const tools = baseTools();
  tools.push(tool('slash_tool', 'Turn read/write access on or off, and/or pick a date.'));
  assert.equal(run(tools).status, 0);
});

test('an allowlisted phrase passes, and only that tool and that text', () => {
  const tools = baseTools();
  tools.push(tool('add_note', 'Adds an internal note to the contact.'));
  const allow = [{ tool: 'add_note', text: 'internal note' }];
  const r = run(tools, { allow });
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.md, /Adds an internal note to the contact\./);

  const other = baseTools();
  other.push(tool('other_tool', 'Adds an internal note to the contact.'));
  assertBlocked(run(other, { allow }), 'the phrase on a tool the allowlist does not name');

  const rest = baseTools();
  rest.push(tool('add_note', 'Adds an internal note. TODO: more.'));
  assertBlocked(run(rest, { allow }), 'the rest of an allowlisted field');
});

test('a tool with _meta.internal true is left out', () => {
  const tools = baseTools();
  tools.push(tool('secret_debug', 'Shows the internal state.', {}, { _meta: { internal: true } }));
  const r = run(tools);
  assert.equal(r.status, 0, r.stderr);
  assert.doesNotMatch(r.md, /secret_debug/);
  assert.equal(JSON.parse(r.stdout.trim()).leftOut, 1);
});
