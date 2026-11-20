# Install the official SuiteDash MCP server

Steps for an A.I. coding agent (Cline, Claude Code, Codex, Cursor and others) adding SuiteDash to an MCP client. The server is remote. There's nothing to install, build or run locally, and no API key.

## Install

1. Add a remote MCP server named `suitedash`.
2. Transport: Streamable HTTP.
3. URL:

   ```
   https://app.suitedash.com/mcp
   ```

   If the user's portal runs on its own web address, use that address followed by `/mcp` instead (for example `https://portal.yourbusiness.com/mcp`). The user can copy the right address from **My Account > Connections**, on the Connected A.I. Apps card.
4. Don't add an API key, bearer token or Authorization header. Sign-in is OAuth, and the client handles it.
5. Ask the user to sign in with their normal SuiteDash login and press **Allow**.

Example config for clients that read `mcpServers`:

```json
{
  "mcpServers": {
    "suitedash": { "type": "streamable-http", "url": "https://app.suitedash.com/mcp" }
  }
}
```

## Before it will work

- The user must be SuiteDash Staff. Clients and Prospects can't connect.
- MCP Access must be on for the user. The Super Admin always has it. For everyone else, an admin turns it on in **A.I. Studio > MCP Access** (for a role) or **Manage Staff > row menu > MCP Access** (for one person).
- The account needs the A.I. Service or an active A.I. Connection.
- No account yet? Start a 30-day free trial, no credit card required, at https://suitedash.com/free-trial/.

## Troubleshooting

- **Connected, but no tools appear.** The account needs the A.I. Service or an active A.I. Connection. Ask an administrator to add one, then reconnect. Also check that MCP Access is on for the user in **A.I. Studio > MCP Access**.
- **"MCP access is not enabled for you."** An administrator hasn't turned on MCP Access for the user's role or for them, in **A.I. Studio > MCP Access**.
- **"This Tool is not enabled for you."** That Tool is switched off for the user's role or for them in MCP Access.
- **"Can't Connect This App."** The address belongs to another account. Use the address shown on the user's own Connected A.I. Apps card.
- **The app keeps asking to sign in.** Remove the connector and add it again, with only the URL and no API key or header.
- **"Too many requests. Try again in [number] seconds."** Wait, then carry on. Limits are 60 requests a minute per app, 120 per person, 600 per account.
- **"The request timed out. Check the record before retrying."** The change may or may not have been made. Check the record before asking again.

Full help: https://help.suitedash.com/article/729-mcp-connect-ai-app or help@suitedash.com.
