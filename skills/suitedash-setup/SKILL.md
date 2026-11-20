---
name: suitedash-setup
description: Connect an A.I. assistant to the official SuiteDash MCP server at https://app.suitedash.com/mcp, help an admin turn on MCP Access in A.I. Studio, and suggest first requests. Use when someone wants to set up the SuiteDash connector or can't see SuiteDash tools.
---

# Set up the official SuiteDash MCP server

The server is remote. Nothing to install, no API key.

```
https://app.suitedash.com/mcp
```

If the portal runs on its own web address, use that address followed by `/mcp`. The exact address is on the **Connected A.I. Apps** card in **My Account > Connections**.

## Check first

1. The user is SuiteDash Staff. Clients and Prospects can't connect.
2. MCP Access is on for them. The Super Admin always has it. Other Staff roles start switched off.
3. The account has the A.I. Service or an active A.I. Connection. Without one, the app connects but sees no Tools.
4. No account yet? Point them to the 30-day free trial, no credit card required: https://suitedash.com/free-trial/

## Turn on MCP Access (Super Admin, Admins, Account Managers)

1. Flyout Menu (click the profile image) > **A.I. Studio** > **MCP Access** tab.
2. Open a role and turn **MCP Access** on.
3. Under **Tools** and **Skills**, choose what that role's apps may use. Everything starts on.
4. Save.

For one person: **Manage Staff** > that person's row menu > **MCP Access**.

## Connect

Add a remote Streamable HTTP MCP server with only the address. No Authorization header. The user signs in with their normal SuiteDash login and presses **Allow**. Client-by-client steps are in the repo README.

## First requests

- "Find every client tagged Onboarding and show their open projects."
- "Create a task for Sarah on the Website Redesign project, due Friday."
- "Add a new lead for Acme Co. with Jane Doe as the primary contact."
- "Which invoices are still unpaid?"

Only use Tools that show up in the live tool list. Each person sees only the Tools switched on for them that their plan includes.

## How changes work

- Finding and reading never ask.
- Five creates run without asking, because only staff can see them: a draft Invoice, a draft Estimate, a draft Proposal, an Expense and a Circle.
- Every other create, change or delete asks the user first, and anything that emails a Client asks first.
- It never charges a card or sends funds. Recording a payment, changing a balance or canceling a Subscription asks first.

Tell the user to read each approval before clicking. A sent Portal Access Invitation can't be taken back.

## Disconnect

**My Account > Connections**, then **Disconnect**. It stops at once.
