# SuiteDash MCP tools

This list is generated from the live SuiteDash MCP server's tool definitions. Nobody edits it by hand.

Last updated: 2026-11-23 (UTC).

The server's own `tools/list` is always authoritative. Your A.I. app loads the live list each time it connects, and each person is offered only the tools an admin switched on for them that the account's plan includes.

About 160 tools: 60 read and 102 write.

Kind: **Read** finds or reads and changes nothing. **Write** creates or changes something. **Destructive** can remove or overwrite data, or reach people outside your account, so treat it with care. "Asks first" means your A.I. app shows the request and waits for you to approve it.

## Areas

- [CRM](#crm) (40)
- [Deals](#deals) (10)
- [Projects and tasks](#projects-and-tasks) (26)
- [Time tracking](#time-tracking) (18)
- [Invoicing and payments](#invoicing-and-payments) (32)
- [Expenses](#expenses) (7)
- [Reports](#reports) (14)
- [Staff and teams](#staff-and-teams) (11)
- [Skills](#skills) (2)
- [Messaging](#messaging) (1)
- [Branding](#branding) (1)

## CRM

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_contact_tag` | Add Contact Tag | Give a contact one or more tags by name, keeping the tags it has; a tag the account lacks is made. | Destructive, asks first |
| `add_contact_to_circle` | Add Contact to Circle | Add a client or prospect to a circle; they gain its portal access and are emailed its shared files. | Destructive, asks first |
| `apply_auto_template` | Apply Auto-Template to Record | Apply the Auto-Template an Auto-Decision Skill chose to a contact or company, only once the person has said yes. | Destructive, asks first |
| `claim_contact` | Claim Contact | Claim for the salesperson asking a contact or company nobody holds, as Claim on the CRM screen does. | Destructive, asks first |
| `convert_contact` | Convert Contact | Move a lead to prospect or client, or a prospect to client, as Convert on the CRM screen does; it gets a portal login. | Destructive, asks first |
| `create_circle` | Create Circle | Create a circle with a name, an optional description and an optional color. It starts with no members. | Write |
| `create_company` | Create Company | Add a company to the CRM, only when the person asks to add one. Needs an existing contact to represent it. | Destructive, asks first |
| `create_contact` | Create Contact | Add a person to the CRM, at an existing company when the person names one. | Destructive, asks first |
| `create_follow_up` | Create Follow-Up | Set a follow-up with a contact, as Add Follow-Up does; on their calendar, it can email them. | Destructive, asks first |
| `create_note` | Create Note | Leave a note on a contact, a company or a project. | Destructive, asks first |
| `delete_circle` | Delete Circle | Delete a circle for good; its members lose its portal access. | Destructive, asks first |
| `delete_company` | Delete or Deactivate Company | Set an active company inactive, or delete an inactive or idle one for good, as its CRM list does for the person asking. | Destructive, asks first |
| `delete_contact` | Deactivate Contact | Set a contact inactive, as Set Inactive on the CRM screen does for the person asking; their portal login closes too. | Destructive, asks first |
| `delete_follow_up` | Delete Follow-Up | Delete a follow-up for good; it leaves its calendars. | Destructive, asks first |
| `delete_note` | Delete Note | Delete a note as the note screen lets the person asking; a note that came from a support ticket stays. | Destructive, asks first |
| `find_circle` | Find Circles | Find or list circles by name, oldest or newest first, as the Circles list shows them. Use before a circle id. | Read |
| `find_company` | Find Companies | Find or list companies by name, oldest or newest first, as the company list shows them. Use before a company id. | Read |
| `find_contact` | Find Contacts | Find or list contacts by name, email or role, oldest or newest first, as the contact list shows them. Use before an id. | Read |
| `find_follow_up` | Find Follow-Ups | Find or list follow-ups by status, category, contact, host, due dates or name, or oldest or newest first. | Read |
| `find_note` | Find Notes | Find or list notes by title on a contact, company or project, or on every one, oldest or newest first, as tabs show. | Read |
| `link_contact_to_company` | Link Contact to Company | Link a contact in no company to a company, as Add Contact on its page does; it can email them the circle's files. | Destructive, asks first |
| `read_circle` | Get Circle Details | Read one circle: its description, color, whether it is on, and the clients and prospects in it. | Read |
| `read_company` | Get Company Details | Read one company in full, custom fields included, as the person asking could open it. | Read |
| `read_contact` | Get Contact Details | Read one contact in full (custom fields, company and the companies it represents) as the person asking could open it. | Read |
| `read_follow_up` | Get Follow-Up Details | Read one follow-up: contact, host, when, category, status, who sees it, whose calendars it is on. | Read |
| `read_note` | Get Note Details | Read one note (message, author, the record it is on) as the person asking would see it on its notes tab. | Read |
| `remove_contact_from_circle` | Remove Contact from Circle | Take a person out of a circle; they lose its portal access. | Destructive, asks first |
| `remove_contact_tag` | Remove Contact Tag | Take one tag off a contact by its name, as read_contact lists it; the contact's other tags stay. | Destructive, asks first |
| `restore_contact` | Restore Contact | Bring back an inactive contact (find_contact with inactive true), as Set Active does; they rejoin their marketing lists. | Destructive, asks first |
| `send_portal_invite` | Send Portal Invitation | Email a prospect or client their portal invitation, until accepted. Not after convert_contact emailed it. | Destructive, asks first |
| `set_circle_status` | Set Circle Status | Switch a circle on or off; off takes its portal access from its members. | Destructive, asks first |
| `set_company_primary_contact` | Set Company Primary Contact | Make a contact the primary contact who may act for a company, as its page does; it can email them that they now do. | Destructive, asks first |
| `set_contact_salespeople` | Set Contact Salespeople | Set a contact's primary salesperson and the salespeople it is shared with, or unassign it, as the contact page does. | Destructive, asks first |
| `set_follow_up_status` | Set Follow-Up Status | Mark a follow-up done, which runs its automations, or not done. | Destructive, asks first |
| `unlink_contact_from_company` | Unlink Contact from Company | Unlink a contact from their company, as Remove on its contact list does; they leave the company's circle. | Destructive, asks first |
| `update_circle` | Update Circle | Change a circle's name, description or color (only the fields you name); members change through their own tools. | Destructive, asks first |
| `update_company` | Update Company | Change a company's details, its Custom Fields included. Only the fields you name are touched. | Destructive, asks first |
| `update_contact` | Update Contact | Change a contact's details, company and Custom Fields included. Only the fields you name are touched; role is not one. | Destructive, asks first |
| `update_follow_up` | Update Follow-Up | Change or reschedule a follow-up to another day or time, only the fields you name; its calendars follow. | Destructive, asks first |
| `update_note` | Update Note | Change a note's message or title, as the note screen lets the person asking. Who can see it is not touched. | Destructive, asks first |

## Deals

| Name | Title | What it does | Kind |
|---|---|---|---|
| `close_deal` | Close Deal | Close a deal as won or lost, marking the sale won or the opportunity lost. | Destructive, asks first |
| `create_deal` | Create Deal | Add a new sales deal (opportunity) for a contact in a pipeline: its value, expected close and stage. | Destructive, asks first |
| `delete_deal` | Delete Deal | Delete a deal for good; it leaves the pipeline board and the Deals list. | Destructive, asks first |
| `find_deal` | Find Deals | Find or list deals by title, contact, pipeline, stage, category, close date, amount, oldest or newest first. | Read |
| `move_deal` | Move Deal | Move a deal to another stage of its pipeline, which runs that stage's automations. | Destructive, asks first |
| `read_deal` | Get Deal Details | Read one deal: how likely it is, amount, pipeline stage, won or lost, close date, contact, who follows it, history. | Read |
| `read_deal_activity` | Read Deal Activity | Read the latest activity on deals the person follows: moves, wins, losses and changes, newest first. | Read |
| `read_deal_forecast` | Read Deal Forecast | Read a pipeline forecast by month: open, weighted, won and expected sales revenue to close. | Read |
| `reopen_deal` | Reopen Deal | Reopen a won or lost deal, so it is open again in its stage. | Destructive, asks first |
| `update_deal` | Update Deal | Edit a deal's details (title, value, expected close, contact, followers); only the fields you name. | Destructive, asks first |

## Projects and tasks

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_subtask` | Add Subtask | Add a subtask (a checklist step) under a task named by its title or id; it goes to that task's assignee. | Destructive, asks first |
| `apply_project_template` | Apply Task Template to Project | Apply one of the account's task templates to a project, dated from a chosen day. | Destructive, asks first |
| `archive_project` | Archive Project | Archive a project off the Projects list; restore_project brings it back. | Destructive, asks first |
| `archive_work_request` | Archive Work Request | Archive a client's work request, moving it off the Work Requests list; restore_work_request brings it back. | Destructive, asks first |
| `bill_task` | Bill Task | Bill a task onto a new or draft invoice or accumulating generator as a $0.00 line; takes no amount or due date. | Destructive, asks first |
| `comment_on_task` | Comment on Task | Post a comment on a task, named by its title or id; its assignee and followers are told. | Destructive, asks first |
| `convert_work_request_to_estimate` | Convert Work Request to Estimate | Convert a work request into a new or existing estimate or quote; items become lines and the client is emailed. | Destructive, asks first |
| `convert_work_request_to_invoice` | Convert Work Request to Invoice | Convert a work request into a new or existing invoice; items become lines and the client is emailed a link. | Destructive, asks first |
| `convert_work_request_to_project` | Convert Work Request to Project | Convert a work request into a new or existing project; items become tasks and the client is emailed a link. | Destructive, asks first |
| `create_project` | Create Project | Start a project for a client. Dates are written the way this account writes them. | Destructive, asks first |
| `create_task` | Create Task | Raise a task for someone in this account. It makes a task of its own, never a subtask of another. | Destructive, asks first |
| `delete_project` | Delete Project | Delete a project as the person asking could on the project screen. Its tasks, files and phases are retired with it. | Destructive, asks first |
| `delete_task` | Delete Task | Delete a task, as the person asking could on the task screen. Its files and subtasks go with it. | Destructive, asks first |
| `duplicate_project` | Duplicate Project | Start a copy of a project with its tasks and team; it is made in the background. | Destructive, asks first |
| `find_project` | Find Projects | Find or list projects by name, oldest or newest first, on the Projects list of the person asking. Use before its id. | Read |
| `find_task` | Find Tasks | Find or list tasks by title, oldest or newest first, among those the person sees on their task lists. Use before its id. | Read |
| `find_work_request` | Find Work Requests | Find clients' work requests by name, client, status or day they came in, newest or oldest first: what awaits triage. | Read |
| `read_project` | Get Project Details | Read one project as the person asking could open it: open tasks, Custom Fields, and who its tasks can be assigned to. | Read |
| `read_task` | Get Task Details | Read one task in full, its project and assignee included, when the person asking sees it on one of their task lists. | Read |
| `read_work_request` | Get Work Request Details | Read one client's work request: what was asked, its items, answers, messages, price and what it converted to. | Read |
| `restore_project` | Restore Archived Project | Bring an archived project back onto the Projects list. | Destructive, asks first |
| `restore_work_request` | Restore Archived Work Request | Bring an archived work request back to the Work Requests list, in the status it held. | Destructive, asks first |
| `set_project_status` | Set Project Status | Set a project's status to one of the account's own; Completed finishes it. | Destructive, asks first |
| `set_task_priority` | Set Task Priority | Set a task's priority (urgent, high, normal, low or the account's own) by its title or id. | Destructive, asks first |
| `update_project` | Update Project | Change a project's details, its Custom Fields included. Only the fields you name are touched; the client is not one. | Destructive, asks first |
| `update_task` | Update Task | Complete a task, hand it to someone else, or move its due date. | Destructive, asks first |

## Time tracking

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_time_entry` | Add Time Entry | Add a stretch to a timer, finished or billed too; start and end are required, and a running timer is refused. | Destructive, asks first |
| `bill_timer` | Bill Timer | Bill the stretches preview_timer_billing priced, its priced value repeated; bills nothing if anything changed. | Destructive, asks first |
| `delete_time_entry` | Delete Time Entry | Delete one stretch of a timer by its id from read_timer; one running or on an invoice is refused. | Destructive, asks first |
| `delete_timer` | Delete Timer | Delete a timer by its title or id; one with any invoiced time is refused. | Destructive, asks first |
| `find_timer` | Find Timers | Find time-tracking timers by title, client, project, task, status, billing or owner, or oldest or newest first. | Read |
| `finish_timer` | Complete Timer | Mark a paused timer Completed by its title or id; one running, already completed or with no recorded time is refused. | Destructive, asks first |
| `log_time` | Log Time | Log a past time entry, with start and end, on a task or project as a new paused timer, at the person's own rate. | Destructive, asks first |
| `pause_timer` | Pause Timer | Pause a running timer by its title or id; its running stretch ends now. | Destructive, asks first |
| `preview_timer_billing` | Preview Timer Billing | Price billing a timer's time before bill_timer: what it would charge, or why it is refused; bills nothing. | Read |
| `read_timer` | Get Timer Details | Read one timer: its tracked time, time entries with start and end, rate, billed and unbilled money, and what it is for. | Read |
| `repoint_timer` | Move Timer to Other Work | Point a timer at a different task, project or client, or at nothing; its time moves too and it keeps running. | Destructive, asks first |
| `restore_time_entry` | Restore Deleted Time Entry | Put back a stretch deleted from a timer within the last ten minutes, by the id it had. | Destructive, asks first |
| `restore_timer` | Restore Deleted Timer | Bring a deleted timer back onto the Timers page by its title or id, with its time entries. | Destructive, asks first |
| `resume_timer` | Resume Timer | Run a paused or completed timer again by its title or id; running a completed one clears its Completed. | Destructive, asks first |
| `set_timer_day` | Set What a Day Comes To | Set what one day of a timer comes to, in hours; below its billed time, or while it runs that day, is refused. | Destructive, asks first |
| `start_timer` | Start Timer | Start a running timer now in the person's own name at their own rate (takes no rate), beside any already running. | Destructive, asks first |
| `update_time_entry` | Update Time Entry | Correct one stretch of a timer by its id from read_timer; one running or on an invoice is refused. | Destructive, asks first |
| `update_timer` | Update Timer | Rename a timer, or change its hourly rate or note; a new rate reprices its tracked time. | Destructive, asks first |

## Invoicing and payments

| Name | Title | What it does | Kind |
|---|---|---|---|
| `adjust_client_balance` | Adjust Client Balance | Top up, take away from or set a client's prepaid balance (credit, hours, sessions), by the id read_client_balance gives. | Destructive, asks first |
| `cancel_subscription` | Cancel Subscription | Cancel a subscription for good: it can email the client, fire the webhook and end paid and course access. | Destructive, asks first |
| `create_estimate` | Create Draft Estimate | Draft an estimate: a quote, not a bill. It is never sent. | Write |
| `create_invoice_draft` | Create Draft Invoice | Draft an invoice for a client. It is never sent; a person decides that. | Write |
| `create_item` | Create Item | Add a one-time item to the account's catalog, offered by every invoice and estimate picker. Only when asked. | Destructive, asks first |
| `create_proposal` | Create Draft Proposal | Draft a proposal: a document of pages, not a bill. It is never sent. | Write |
| `delete_estimate` | Delete Draft Estimate | Delete a draft estimate as the estimate list's Delete lets the person asking. One already sent or approved stays. | Destructive, asks first |
| `delete_invoice_draft` | Delete Draft Invoice | Delete a draft invoice as the invoice list's Delete lets the person asking. Anything already sent or paid stays. | Destructive, asks first |
| `delete_proposal` | Delete Draft Proposal | Delete a draft proposal as the proposal list's Delete lets the person asking. One already sent or signed stays. | Destructive, asks first |
| `find_estimate` | Find Estimates | Find or list estimates by title, number or client, oldest or newest first, as the person sees them. Use before an id. | Read |
| `find_invoice` | Find Invoices | Find or list invoices by title, number or client, oldest or newest first, as the person sees them. Use before an id. | Read |
| `find_item` | Find Items | Find or list catalog items by name, oldest or newest first, as the invoice and estimate line picker offers them. | Read |
| `find_payment` | Find Payments | Find or list payments received on invoices and subscriptions by payer, method, day, transaction id or when recorded. | Read |
| `find_proposal` | Find Proposals | Find or list proposals by title or client, oldest or newest first, as the person sees them. Use before a proposal id. | Read |
| `find_sales_room` | Find Sales Rooms | Find or list prospects' Sales Rooms (private links to a sales page design) by contact, design, status, oldest or newest. | Read |
| `find_subscription` | Find Subscriptions | Find or list clients' recurring subscriptions by number, client, plan or status, oldest or newest first. | Read |
| `generate_sales_room` | Generate Sales Room for Contact | Generate a contact's own Sales Room from a design and, as the design says, email them its private link. | Destructive, asks first |
| `reactivate_sales_room` | Activate Revoked Sales Room | Reactivate a revoked Sales Room so the prospect's same link works again. | Destructive, asks first |
| `read_client_balance` | Get Client Balances | See a client's prepaid balance: credit, prepaid hours, prepaid sessions left. Give the client's name or id. | Read |
| `read_estimate` | Get Estimate Details | Read one estimate: lines, totals, paid, balance due, notes and Custom Fields, when the person's estimate list shows it. | Read |
| `read_invoice` | Get Invoice Details | Read one invoice: lines, totals, paid, balance due, notes and Custom Fields, when the person's invoice list shows it. | Read |
| `read_item` | Get Item Details | Read one catalog item (rate, quantity, discount, tax, descriptions, pricing options) as the Items screen shows it. | Read |
| `read_payment` | Get Payment Details | Read one payment: its amount, method, day, status, payer, the invoice it paid and its transaction id. | Read |
| `read_proposal` | Get Proposal Details | Read one proposal (status, value, valid until, recipients, pages, reminders) when the person sees it on the list. | Read |
| `read_sales_room` | Get Sales Room Details | Read one Sales Room: its prospect, design, active or revoked status, private link, when they last opened it. | Read |
| `read_subscription` | Get Subscription Details | Read one client's subscription: what it bills, how often, its next bill date, status, tax and discount. | Read |
| `record_payment` | Record Payment | Record money received on an invoice: it can email the client a receipt, run paid automations and grant access. | Destructive, asks first |
| `revoke_sales_room` | Revoke Sales Room | Revoke a prospect's Sales Room link so it stops working; it can be reactivated later. | Destructive, asks first |
| `update_estimate` | Update Draft Estimate | Change a draft estimate's title, due date, amount, client Note or Custom Fields, as the person's estimate screen allows. | Destructive, asks first |
| `update_invoice_draft` | Update Draft Invoice | Change a draft invoice's title, due date, amount, client Note or Custom Fields, as the person's invoice screen allows. | Destructive, asks first |
| `update_proposal` | Update Draft Proposal | Change a draft proposal's title or due date, as the proposal editor lets the person asking. Its pages are not touched. | Destructive, asks first |
| `update_subscription` | Update Subscription | Change a subscription's quantity, rate, discount, tax, next bill date or billing cycle; never its client or plan. | Destructive, asks first |

## Expenses

| Name | Title | What it does | Kind |
|---|---|---|---|
| `bill_expense` | Bill Expense | Bill an unbilled expense to its client on a new draft invoice, never sent; it marks the expense Invoiced. | Destructive, asks first |
| `create_expense` | Create Expense | Record a one-time business expense (a cost or receipt): what it was, its amount and date, a client to bill it to. | Write |
| `delete_expense` | Delete Expense | Delete an expense for good; one already billed on an invoice is never deleted. | Destructive, asks first |
| `find_expense` | Find Expenses | Find or list business expenses (costs, receipts) by title, client, status, date or total, oldest or newest first. | Read |
| `make_expense_recurring` | Convert Expense to Recurring | Turn a one-time expense into a recurring expense on a schedule: a recurring copy, left as a draft. | Destructive, asks first |
| `read_expense` | Get Expense Details | Read one expense: its cost lines, total, billed or unbilled status, client, receipt date, recurring schedule. | Read |
| `update_expense` | Update Expense | Edit an expense's details (title, amount, date, client, billable, category); only the fields you name. | Destructive, asks first |

## Reports

| Name | Title | What it does | Kind |
|---|---|---|---|
| `run_ar_aging_report` | Run Accounts Receivable Aging | Run Accounts Receivable Aging: what clients owe on unpaid invoices, by days overdue (0-30 to 91+) or by client. | Read |
| `run_email_campaign_performance_report` | Run Email Campaign Performance | Run Email Campaign Performance: sends, opens, clicks and unsubscribes, by campaign, month, audience or link. | Read |
| `run_invoice_status_report` | Run Invoice Status Summary | Run Invoice Status Summary: the invoices of a period counted and totaled by status, by month or by client. | Read |
| `run_on_time_completion_report` | Run On-time Completion | Run On-time Completion: tasks finished on time or late in a period, by project, assignee, client, leader or month. | Read |
| `run_overdue_tasks_report` | Run Overdue Tasks | Run Overdue Tasks: tasks past their due date and how late, by project, assignee, client, project leader or status. | Read |
| `run_payments_received_report` | Run Payments Received | Run Payments Received: payments taken in a period, by day, week, month, client, method, gateway or status, or each one. | Read |
| `run_profit_and_loss_report` | Run Profit & Loss | Run Profit & Loss: income, refunds, expenses, tax and net profit in a period, by month, direction or category. | Read |
| `run_project_health_report` | Run Project Health | Run Project Health: projects on track, at risk or overdue and their progress, by project leader, client or status. | Read |
| `run_revenue_overview_report` | Run Revenue Overview | Run Revenue Overview: invoiced, collected and outstanding revenue by month, quarter, year, invoice status or client. | Read |
| `run_sales_by_target_report` | Run Sales by Target | Run Sales by Target: what each client was invoiced in a period, by client, month or owner, or invoice by invoice. | Read |
| `run_sales_pipeline_report` | Run Sales Pipeline | Run Sales Pipeline: the deals of a pipeline, their value and weighted value, by stage, client or expected close month. | Read |
| `run_sales_tax_report` | Run Sales Tax | Run Sales Tax: the tax collected, refunded and net on payments in a period, by tax or by month. | Read |
| `run_timesheets_report` | Run Timesheets | Run Timesheets: the time logged in a period, entry by entry or by day, week, month, staff, client, project or task. | Read |
| `run_uninvoiced_time_report` | Run Uninvoiced Time and Value | Run Uninvoiced Time and Value: billable time not yet invoiced and its value, by client, project, staff, task or date. | Read |

## Staff and teams

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_staff_to_team` | Add Staff to Team | Add one colleague to a team, by the ids find_team and find_colleague give. They gain what the team can reach. | Destructive, asks first |
| `create_staff_member` | Create Staff Member | Add a colleague to this account. Cannot make anyone an administrator. | Destructive, asks first |
| `create_team` | Create Team | Create a team with a name, an optional description and optional members (user ids from find_colleague). | Destructive, asks first |
| `delete_staff_member` | Deactivate Staff Member | Remove a colleague as the staff screen's Set Inactive does: the login closes, the record stays and can be restored. | Destructive, asks first |
| `delete_team` | Delete Team | Delete a team as the Teams list's Delete does: it leaves the list and its team chat channel is removed. | Destructive, asks first |
| `find_colleague` | Find Staff Members | Find or list colleagues by name or email, oldest or newest first, as the staff roster shows them. Use before a user id. | Read |
| `find_team` | Find Teams | Find or list teams by name, oldest or newest first, as the Teams list shows them. Use before anything needing a team id. | Read |
| `read_colleague` | Get Staff Member Details | Read one colleague's record (role, email, last visit, Custom Fields) as the staff roster shows them to the person. | Read |
| `read_team` | Get Team Details | Read one team (its description and the colleagues on it) as the Teams page shows it to the person asking. | Read |
| `update_staff_member` | Update Staff Member | Change a colleague's details, their Custom Fields included. Only the fields you name; the role is not one. | Destructive, asks first |
| `update_team` | Update Team | Change a team's name or description. Only the fields you name; members are added with add_staff_to_team. | Destructive, asks first |

## Skills

| Name | Title | What it does | Kind |
|---|---|---|---|
| `list_skills` | List Skills | Lists the published Skills available to the signed-in staff member, including their IDs, names, kinds and summaries. | Read |
| `use_skill` | Use a Skill | Retrieves a published Skill by ID, including its saved instructions and related settings. | Read |

## Messaging

| Name | Title | What it does | Kind |
|---|---|---|---|
| `link_text_number_to_contact` | Link Text Number to Contact | Link an unknown number's text conversations to a contact, as Link to Contact in the text inbox does. | Destructive, asks first |

## Branding

| Name | Title | What it does | Kind |
|---|---|---|---|
| `remove_branding_template` | Remove Branding Template | Take the applied Branding Template off the portal, leaving a clean look with its logos and the old look as a backup. | Destructive, asks first |
