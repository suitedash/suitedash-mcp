# SuiteDash MCP tools

This list is generated from the live SuiteDash MCP server's tool definitions. Nobody edits it by hand.

Last updated: 2026-11-27 (UTC).

The server's own `tools/list` is always authoritative. Your A.I. app loads the live list each time it connects, and each person is offered only the tools an admin switched on for them that the account's plan includes.

More than 230 tools: 75 read and 156 that change data.

Kind: **Read** finds or reads something and changes nothing. **Changes data** creates, updates, sends or removes something in your account. **Changes data, asks first** means the person is asked to confirm in the app before the tool acts.

## Areas

- [CRM](#crm) (42)
- [Deals](#deals) (10)
- [Projects and tasks](#projects-and-tasks) (44)
- [Time tracking](#time-tracking) (21)
- [Invoicing and payments](#invoicing-and-payments) (35)
- [Expenses](#expenses) (7)
- [Documents and signatures](#documents-and-signatures) (10)
- [Support](#support) (9)
- [Marketing](#marketing) (11)
- [Checklists and flows](#checklists-and-flows) (7)
- [Quizzes](#quizzes) (6)
- [Reports](#reports) (14)
- [Staff and teams](#staff-and-teams) (11)
- [Skills](#skills) (2)
- [Messaging](#messaging) (1)
- [Branding](#branding) (1)

## CRM

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_company_tag` | Add Company Tag | Give a company one or more tags by name, keeping the tags it has; a tag the account lacks is made. | Changes data, asks first |
| `add_contact_tag` | Add Contact Tag | Give a contact one or more tags by name, keeping the tags it has; a tag the account lacks is made. | Changes data, asks first |
| `add_contact_to_circle` | Add Contact to Circle | Add a client or prospect to a circle; they gain its portal access and are emailed its shared files. | Changes data, asks first |
| `apply_auto_template` | Apply Auto-Template to Record | Apply the Auto-Template an Auto-Decision Skill chose to a contact or company, only once the person has said yes. | Changes data, asks first |
| `claim_contact` | Claim Contact | Claim for the salesperson asking a contact or company nobody holds, as Claim on the CRM screen does. | Changes data, asks first |
| `convert_contact` | Convert Contact | Move a lead to prospect or client, or a prospect to client, as Convert on the CRM screen does; it gets a portal login. | Changes data, asks first |
| `create_circle` | Create Circle | Create a circle with a name, an optional description and an optional color. It starts with no members. | Changes data |
| `create_company` | Create Company | Add a company to the CRM, only when the person asks to add one. Needs an existing contact to represent it. | Changes data, asks first |
| `create_contact` | Create Contact | Add a person to the CRM, at an existing company when the person names one. | Changes data, asks first |
| `create_follow_up` | Create Follow-Up | Set a follow-up with a contact, as Add Follow-Up does; on their calendar, it can email them. | Changes data, asks first |
| `create_note` | Create Note | Leave a note on a contact, a company or a project. | Changes data, asks first |
| `delete_circle` | Delete Circle | Delete a circle for good; its members lose its portal access. | Changes data, asks first |
| `delete_company` | Delete or Deactivate Company | Set an active company inactive, or delete an inactive or idle one for good, as its CRM list does for the person asking. | Changes data, asks first |
| `delete_contact` | Deactivate Contact | Set a contact inactive, as Set Inactive on the CRM screen does for the person asking; their portal login closes too. | Changes data, asks first |
| `delete_follow_up` | Delete Follow-Up | Delete a follow-up for good; it leaves its calendars. | Changes data, asks first |
| `delete_note` | Delete Note | Delete a note as the note screen lets the person asking; a note that came from a support ticket stays. | Changes data, asks first |
| `find_circle` | Find Circles | Find or list circles by name, oldest or newest first, as the Circles list shows them. Use before a circle id. | Read |
| `find_company` | Find Companies | Find or list companies by name, oldest or newest first, as the company list shows them. Use before a company id. | Read |
| `find_contact` | Find Contacts | Find or list contacts by name, email address or role, oldest or newest first, as the list shows them. Use before an id. | Read |
| `find_follow_up` | Find Follow-Ups | Find or list follow-ups by status, category, contact, host, due dates or name, or oldest or newest first. | Read |
| `find_note` | Find Notes | Find or list notes by title on a contact, company or project, or on every one, oldest or newest first, as tabs show. | Read |
| `link_contact_to_company` | Link Contact to Company | Link a contact in no company to a company, as Add Contact on its page does; it can email them the circle's files. | Changes data, asks first |
| `read_circle` | Get Circle Details | Read one circle: its description, color, whether it is on, and the clients and prospects in it. | Read |
| `read_company` | Get Company Details | Read one company in full, custom fields included, as the person asking could open it. | Read |
| `read_contact` | Get Contact Details | Read one contact in full (custom fields, company and the companies it represents) as the person asking could open it. | Read |
| `read_follow_up` | Get Follow-Up Details | Read one follow-up: contact, host, when, category, status, who sees it, whose calendars it is on. | Read |
| `read_note` | Get Note Details | Read one note (message, author, the record it is on) as the person asking would see it on its notes tab. | Read |
| `remove_company_tag` | Remove Company Tag | Take one tag off a company by its name, as read_company lists it; the company's other tags stay. | Changes data, asks first |
| `remove_contact_from_circle` | Remove Contact from Circle | Take a person out of a circle; they lose its portal access. | Changes data, asks first |
| `remove_contact_tag` | Remove Contact Tag | Take one tag off a contact by its name, as read_contact lists it; the contact's other tags stay. | Changes data, asks first |
| `restore_contact` | Restore Contact | Bring back an inactive contact (find_contact with inactive true), as Set Active does; they rejoin their marketing lists. | Changes data, asks first |
| `send_portal_invite` | Send Portal Invitation | Email a prospect or client their portal invitation, until accepted. Not after convert_contact emailed it. | Changes data, asks first |
| `set_circle_status` | Set Circle Status | Switch a circle on or off; off takes its portal access from its members. | Changes data, asks first |
| `set_company_primary_contact` | Set Company Primary Contact | Make a contact the primary contact who may act for a company, as its page does; it can email them that they now do. | Changes data, asks first |
| `set_contact_salespeople` | Set Contact Salespeople | Set a contact's primary salesperson and the salespeople it is shared with, or unassign it, as the contact page does. | Changes data, asks first |
| `set_follow_up_status` | Set Follow-Up Status | Mark a follow-up done, which runs its automations, or not done. | Changes data, asks first |
| `unlink_contact_from_company` | Unlink Contact from Company | Unlink a contact from their company, as Remove on its contact list does; they leave the company's circle. | Changes data, asks first |
| `update_circle` | Update Circle | Change a circle's name, description or color (only the fields you name); members change through their own tools. | Changes data, asks first |
| `update_company` | Update Company | Change a company's details, its address and Custom Fields included. Only the fields you name are touched. | Changes data, asks first |
| `update_contact` | Update Contact | Change a contact's details, company and Custom Fields included. Only the fields you name are touched; role is not one. | Changes data, asks first |
| `update_follow_up` | Update Follow-Up | Change or reschedule a follow-up to another day or time, only the fields you name; its calendars follow. | Changes data, asks first |
| `update_note` | Update Note | Change a note's message or title, as the note screen lets the person asking. Who can see it is not touched. | Changes data, asks first |

## Deals

| Name | Title | What it does | Kind |
|---|---|---|---|
| `close_deal` | Close Deal | Close a deal as won or lost, marking the sale won or the opportunity lost. | Changes data, asks first |
| `create_deal` | Create Deal | Add a new sales deal (opportunity) for a contact in a pipeline: its value, expected close and stage. | Changes data, asks first |
| `delete_deal` | Delete Deal | Delete a deal for good; it leaves the pipeline board and the Deals list. | Changes data, asks first |
| `find_deal` | Find Deals | Find or list deals by title, contact, pipeline, stage, category, close date, amount, oldest or newest first. | Read |
| `move_deal` | Move Deal | Move a deal to another stage of its pipeline, which runs that stage's automations. | Changes data, asks first |
| `read_deal` | Get Deal Details | Read one deal: how likely it is, amount, pipeline stage, won or lost, close date, contact, who follows it, history. | Read |
| `read_deal_activity` | Read Deal Activity | Read the latest activity on deals the person follows: moves, wins, losses and changes, newest first. | Read |
| `read_deal_forecast` | Read Deal Forecast | Read a pipeline forecast by month: open, weighted, won and expected sales revenue to close. | Read |
| `reopen_deal` | Reopen Deal | Reopen a won or lost deal, so it is open again in its stage. | Changes data, asks first |
| `update_deal` | Update Deal | Edit a deal's details (title, value, expected close, contact, followers); only the fields you name. | Changes data, asks first |

## Projects and tasks

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_subtask` | Add Subtask | Add a subtask (a checklist step) under a task named by its title or id; it goes to that task's assignee. | Changes data, asks first |
| `add_task_follower` | Add Task Follower | Add one person to a task's followers, by the user id find_colleague gives; followers are sent its comments. | Changes data, asks first |
| `apply_project_template` | Apply Task Template to Project | Apply one of the account's task templates to a project, dated from a chosen day. | Changes data, asks first |
| `archive_project` | Archive Project | Archive a project off the Projects list; restore_project brings it back. | Changes data, asks first |
| `archive_work_request` | Archive Work Request | Archive a client's work request, moving it off the Work Requests list; restore_work_request brings it back. | Changes data, asks first |
| `bill_task` | Bill Task | Bill a task: put it on a new or draft invoice or accumulating generator as a $0.00 line; takes no amount or due date. | Changes data, asks first |
| `comment_on_task` | Comment on Task | Post a comment on a task, named by its title or id; its assignee and followers are told. | Changes data, asks first |
| `convert_task_to_re_task` | Convert Task to Contact RE: Task | Make a task an RE: Task, a task related to a CRM contact or company: it is retitled "RE: name:" and leaves its project. | Changes data, asks first |
| `convert_work_request_to_estimate` | Convert Work Request to Estimate | Convert a work request into a new or existing estimate or quote; items become lines, and the client may be emailed. | Changes data, asks first |
| `convert_work_request_to_invoice` | Convert Work Request to Invoice | Convert a work request into a new or existing invoice; items become lines, and the client may be emailed a link. | Changes data, asks first |
| `convert_work_request_to_project` | Convert Work Request to Project | Convert a work request into a new or existing project; items become tasks, and the client may be emailed a link. | Changes data, asks first |
| `create_project` | Create Project | Start a project for a client. Dates are written the way this account writes them. | Changes data, asks first |
| `create_task` | Create Task | Raise a task for someone in this account, in a project or not. It makes a task of its own, never a subtask of another. | Changes data, asks first |
| `delete_project` | Delete Project | Delete a project as the person asking could on the project screen. Its tasks, files and phases are retired with it. | Changes data, asks first |
| `delete_subtask` | Delete Subtask | Delete one subtask (a checklist step) of a task, each named by its title or id; restore_subtask brings it back. | Changes data, asks first |
| `delete_task` | Delete Task | Delete a task, as the person asking could on the task screen. Its files and subtasks go with it. | Changes data, asks first |
| `delete_task_comment` | Delete Task Comment | Delete a comment the person wrote on a task, by its id, its words, or else their newest; never the Agent's own. | Changes data, asks first |
| `duplicate_project` | Duplicate Project | Start a copy of a project with its tasks and team; it is made in the background. | Changes data, asks first |
| `find_project` | Find Projects | Find or list projects by name, oldest or newest first, on the Projects list of the person asking. Use before its id. | Read |
| `find_task` | Find Tasks | Find or list tasks by title, oldest or newest first, or one project's, on the person's task lists. Use before its id. | Read |
| `find_work_request` | Find Work Requests | Find clients' work requests by name, client, status or day they came in, newest or oldest first: what awaits triage. | Read |
| `link_task_start_date` | Link Task Start Date | Link a task's Start Date to the Due Date of another task in its project, with days of lag. | Changes data, asks first |
| `move_subtask` | Move Subtask | Move one subtask (a checklist step) of a task to another place in its list, or put it first; 1 is the top. | Changes data, asks first |
| `read_project` | Get Project Details | Read one project as the person asking could open it: open tasks, Custom Fields, and who its tasks can be assigned to. | Read |
| `read_task` | Get Task Details | Read one task in full, its project and who it is assigned to, when the person asking sees it on one of their task lists. | Read |
| `read_work_request` | Get Work Request Details | Read one client's work request: what was asked, its items, answers, messages, price and what it converted to. | Read |
| `remove_task_dependency` | Remove Task Dependency | Remove a task's dependency, so it no longer waits on the other task, hidden or locked. | Changes data, asks first |
| `remove_task_follower` | Remove Task Follower | Remove one person from a task's followers; subtasks they hold go back to its assignee only when asked to. | Changes data, asks first |
| `remove_task_recurrence` | Remove Task Recurrence | Stop a recurring task: it no longer repeats or recurs, and the copies already made stay. | Changes data, asks first |
| `restore_project` | Restore Archived Project | Bring an archived project back onto the Projects list. | Changes data, asks first |
| `restore_subtask` | Restore Subtask | Bring back a deleted subtask (a checklist step) of a task, each named by its title or id. | Changes data, asks first |
| `restore_work_request` | Restore Archived Work Request | Bring an archived work request back to the Work Requests list, in the status it held. | Changes data, asks first |
| `set_project_status` | Set Project Status | Set a project's status to one of the account's own; Completed finishes it. | Changes data, asks first |
| `set_task_dependency` | Set Task Dependency | Make a task wait on another of its project: hide or lock it from edits until that one reaches a status, e.g. Completed. | Changes data, asks first |
| `set_task_priority` | Set Task Priority | Set a task's priority (urgent, high, normal, low or the account's own) by its title or id. | Changes data, asks first |
| `set_task_recurrence` | Set Task Recurrence | Make a task recur, repeat or come back every day, week, month or year (daily, weekly, monthly, yearly), or change it. | Changes data, asks first |
| `set_task_time_spent` | Set Task Time Spent | Set a task's Time Spent to the hours given, or to the time tracked on it by its timers. | Changes data, asks first |
| `undo_task_change` | Undo Task Change | Take back the person's latest change of a task, as its Undo does, unless someone changed it again since. | Changes data, asks first |
| `unlink_re_task` | Unlink RE: Task from Contact | Unlink an RE: Task, a task related to a CRM contact or company, from that contact or company; it keeps its title. | Changes data, asks first |
| `unlink_task_start_date` | Unlink Task Start Date | Unlink a task's Start Date from the other task's Due Date it follows; the task keeps its dates. | Changes data, asks first |
| `update_project` | Update Project | Change a project's details, its Custom Fields included. Only the fields you name are touched; the client is not one. | Changes data, asks first |
| `update_subtask` | Update Subtask | Tick, reopen, rename or reassign one subtask (a checklist step) of a task, each named by its title or id. | Changes data, asks first |
| `update_task` | Update Task | Mark a task complete, hand it over to someone else, or move its due date. | Changes data, asks first |
| `update_task_comment` | Update Task Comment | Rewrite a comment the person wrote on a task, by its id, its words, or else their newest; never the Agent's own. | Changes data, asks first |

## Time tracking

| Name | Title | What it does | Kind |
|---|---|---|---|
| `act_on_timers` | Update Several Timers | Complete, pause, resume, delete, restore or move several timers to other work at once; each skipped one says why. | Changes data, asks first |
| `add_time_entry` | Add Time Entry | Add a stretch to a timer, finished or billed too; start and end are required, and a running timer is refused. | Changes data, asks first |
| `bill_timer` | Bill Timer | Bill the stretches preview_timer_billing priced, its priced value repeated; bills nothing if anything changed. | Changes data, asks first |
| `bill_timers` | Bill Several Timers | Bill several timers onto one document at the price preview_timer_billing gave; bills nothing if anything changed. | Changes data, asks first |
| `delete_time_entry` | Delete Time Entry | Delete one or several stretches of a timer by their ids from read_timer; one running or invoiced refuses them all. | Changes data, asks first |
| `delete_timer` | Delete Timer | Delete a timer by its title or id; one with any invoiced time is refused. | Changes data, asks first |
| `find_timer` | Find Timers | Find time-tracking timers by title, client, project, task, status, billing or owner, or oldest or newest first. | Read |
| `finish_timer` | Complete Timer | Mark a paused timer Completed by its title or id; one running, already completed or with no recorded time is refused. | Changes data, asks first |
| `log_time` | Log Time | Log a past time entry, with start and end, on a task or project as a new paused timer, at the person's own rate. | Changes data, asks first |
| `pause_timer` | Pause Timer | Pause a running timer by its title or id; its running stretch ends now. | Changes data, asks first |
| `preview_timer_billing` | Preview Timer Billing | Price billing one timer's time, or several timers' together, before billing: the charge, or why refused; bills nothing. | Read |
| `read_timer` | Get Timer Details | Read one timer: its tracked time, time entries with start and end, rate, billed and unbilled money, and what it is for. | Read |
| `read_timesheet_week` | Read Timesheet Week | Read a person's timesheet week: each day's tracked time and the timers behind it, only timers the asker can see. | Read |
| `repoint_timer` | Move Timer to Other Work | Point a timer at a different task, project or client, or at nothing; its time moves too and it keeps running. | Changes data, asks first |
| `restore_time_entry` | Restore Deleted Time Entry | Put back one or several stretches deleted from a timer within the last ten minutes, by the ids they had. | Changes data, asks first |
| `restore_timer` | Restore Deleted Timer | Bring a deleted timer back onto the Timers page by its title or id, with its time entries. | Changes data, asks first |
| `resume_timer` | Resume Timer | Run a paused or completed timer again by its title or id; running a completed one clears its Completed. | Changes data, asks first |
| `set_timer_day` | Set Timer Hours for One Day | Set a timer's total hours for one day, such as 3.5; refused below the hours billed that day or while it runs that day. | Changes data, asks first |
| `start_timer` | Start Timer | Start a running timer now in the person's own name at their own rate (takes no rate), beside any already running. | Changes data, asks first |
| `update_time_entry` | Update Time Entry | Correct one stretch of a timer by its id from read_timer; one running or on an invoice is refused. | Changes data, asks first |
| `update_timer` | Update Timer | Rename a timer, or change its hourly rate or note; a new rate reprices its tracked time. | Changes data, asks first |

## Invoicing and payments

| Name | Title | What it does | Kind |
|---|---|---|---|
| `adjust_client_balance` | Adjust Client Balance | Top up, take away from or set a client's prepaid balance (credit, hours, sessions), by the id read_client_balance gives. | Changes data, asks first |
| `cancel_subscription` | Cancel Subscription | Cancel a subscription for good: it can email the client, fire the webhook and end paid and course access. | Changes data, asks first |
| `create_estimate` | Create Draft Estimate | Draft an estimate: a quote, not a bill. It is never sent. | Changes data |
| `create_invoice_draft` | Create Draft Invoice | Draft an invoice for a client. It is never sent; a person decides that. | Changes data |
| `create_item` | Create Item | Add a one-time item to the account's catalog, offered by every invoice and estimate picker. Only when asked. | Changes data, asks first |
| `create_proposal` | Create Draft Proposal | Draft a proposal: a document of pages, not a bill. It is never sent. | Changes data |
| `delete_estimate` | Delete Draft Estimate | Delete a draft estimate as the estimate list's Delete lets the person asking. One already sent or approved stays. | Changes data, asks first |
| `delete_invoice_draft` | Delete Draft Invoice | Delete a draft invoice as the invoice list's Delete lets the person asking. Anything already sent or paid stays. | Changes data, asks first |
| `delete_proposal` | Delete Draft Proposal | Delete a draft proposal as the proposal list's Delete lets the person asking. One already sent or signed stays. | Changes data, asks first |
| `find_estimate` | Find Estimates | Find or list estimates by title, number or client, oldest or newest first, as the person sees them. Use before an id. | Read |
| `find_invoice` | Find Invoices | Find or list invoices by title, number or client, oldest or newest first, as the person sees them. Use before an id. | Read |
| `find_item` | Find Items | Find or list catalog items by name, oldest or newest first, as the invoice and estimate line picker offers them. | Read |
| `find_payment` | Find Payments | Find or list payments received on invoices and subscriptions by payer, method, day, transaction id or when recorded. | Read |
| `find_proposal` | Find Proposals | Find or list proposals by title or client, oldest or newest first, as the person sees them. Use before a proposal id. | Read |
| `find_sales_room` | Find Sales Rooms | Find or list prospects' Sales Rooms (private links to a sales page design) by contact, design, status, oldest or newest. | Read |
| `find_subscription` | Find Subscriptions | Find or list clients' recurring subscriptions by number, client, plan or status, oldest or newest first. | Read |
| `generate_sales_room` | Generate Sales Room for Contact | Generate a contact's own Sales Room from a design and, as the design says, email them its private link. | Changes data, asks first |
| `reactivate_sales_room` | Activate Revoked Sales Room | Reactivate a revoked Sales Room so the prospect's same link works again. | Changes data, asks first |
| `read_client_balance` | Get Client Balances | See a client's prepaid balance: credit, prepaid hours, prepaid sessions left. Give the client's name or id. | Read |
| `read_estimate` | Get Estimate Details | Read one estimate: lines, totals, paid, balance due, notes and Custom Fields, when the person's estimate list shows it. | Read |
| `read_invoice` | Get Invoice Details | Read one invoice: lines, totals, paid, balance due, notes and Custom Fields, when the person's invoice list shows it. | Read |
| `read_item` | Get Item Details | Read one catalog item (rate, quantity, discount, tax, descriptions, pricing options) as the Items screen shows it. | Read |
| `read_payment` | Get Payment Details | Read one payment: its amount, method, day, status, payer, the invoice it paid and its transaction id. | Read |
| `read_proposal` | Get Proposal Details | Read one proposal (status, value, valid until, recipients, pages, reminders) when the person sees it on the list. | Read |
| `read_sales_room` | Get Sales Room Details | Read one Sales Room: its prospect, design, active or revoked status, private link, when they last opened it. | Read |
| `read_subscription` | Get Subscription Details | Read one client's subscription: what it bills, how often, its next bill date, status, tax and discount. | Read |
| `record_payment` | Record Payment | Record money received on an invoice: it can email the client a receipt, run paid automations and grant access. | Changes data, asks first |
| `resend_invoice` | Resend Invoice | Email an open or partly paid invoice to its client again, as a reminder to pay it. | Changes data, asks first |
| `revoke_sales_room` | Revoke Sales Room | Revoke a prospect's Sales Room link so it stops working; it can be reactivated later. | Changes data, asks first |
| `send_estimate` | Send Estimate | Send an estimate to the people on it: a draft opens, and each of them is emailed it to approve. | Changes data, asks first |
| `send_invoice` | Send Invoice | Send a draft invoice to its client: it opens, takes its number and the client is emailed it to pay. | Changes data, asks first |
| `update_estimate` | Update Draft Estimate | Change a draft estimate's title, due date, amount, client Note or Custom Fields, as the person's estimate screen allows. | Changes data, asks first |
| `update_invoice_draft` | Update Draft Invoice | Change a draft invoice's title, due date, amount, client Note or Custom Fields, as the person's invoice screen allows. | Changes data, asks first |
| `update_proposal` | Update Draft Proposal | Change a draft proposal's title or due date, as the proposal editor lets the person asking. Its pages are not touched. | Changes data, asks first |
| `update_subscription` | Update Subscription | Change a subscription's quantity, rate, discount, tax, next bill date or billing cycle; never its client or plan. | Changes data, asks first |

## Expenses

| Name | Title | What it does | Kind |
|---|---|---|---|
| `bill_expense` | Bill Expense | Bill an unbilled expense to its client on a new draft invoice, never sent; it marks the expense Invoiced. | Changes data, asks first |
| `create_expense` | Create Expense | Record a one-time business expense (a cost or receipt): what it was, its amount and date, a client to bill it to. | Changes data |
| `delete_expense` | Delete Expense | Delete an expense for good; one already billed on an invoice is never deleted. | Changes data, asks first |
| `find_expense` | Find Expenses | Find or list business expenses (costs, receipts) by title, client, status, date or total, oldest or newest first. | Read |
| `make_expense_recurring` | Convert Expense to Recurring | Turn a one-time expense into a recurring expense on a schedule: a recurring copy, left as a draft. | Changes data, asks first |
| `read_expense` | Get Expense Details | Read one expense: its cost lines, total, billed or unbilled, who it is assigned to, receipt date, recurring schedule. | Read |
| `update_expense` | Update Expense | Edit an expense's details (title, amount, date, client, billable, category); only the fields you name. | Changes data, asks first |

## Documents and signatures

| Name | Title | What it does | Kind |
|---|---|---|---|
| `create_document_from_template` | Create Document from Template | Make a draft document from a template for a client. It emails nobody; sending it is another step. | Changes data, asks first |
| `delete_document` | Delete Document | Delete a draft, completed form or voided document for good. One out for signature or completed stays. | Changes data, asks first |
| `download_document_pdf` | Get Document PDF | Get a document's PDF link and, for an uploaded PDF, its signed-copy page; other PDFs already hold the signatures. | Read |
| `find_documents` | Find Documents | Find documents sent for signature, and drafts, by title, the person they are for or a signer, or where signing stands. | Read |
| `read_document` | Get Document Details | Read one document: its status, who it is for, its generator, and each signer, signed or still waiting. | Read |
| `remind_document_signers` | Remind Document Signers | Remind a document's waiting signers to sign: each one still asked is emailed a reminder now. | Changes data, asks first |
| `resend_document` | Resend Document for Signature | Resend a document out for signature: everyone still asked to sign is emailed again. | Changes data, asks first |
| `send_document` | Send Document | Send a draft document for signature: its first signers are emailed, later signers in their turn. | Changes data, asks first |
| `update_document_draft` | Update Draft Document | Replace a draft document's whole content. Call without body first to get it, then send it back changed. | Changes data, asks first |
| `void_document` | Void Document | Void a document so it can no longer be signed: its waiting signers are closed and everyone it asked is emailed. | Changes data, asks first |

## Support

| Name | Title | What it does | Kind |
|---|---|---|---|
| `add_ticket_note` | Add Support Ticket Note | Write a staff-only note on a support conversation; only staff read it, never the client. | Changes data, asks first |
| `assign_ticket` | Assign Support Ticket | Give a support conversation to a colleague; the colleague is emailed unless it is the person asking. | Changes data, asks first |
| `find_ticket` | Find Support Tickets | Find or list support conversations by words, number, status or who holds them, as the Support list shows them. | Read |
| `open_ticket` | Create Support Ticket | Start a new support conversation (ticket) for a client; the client is emailed that a ticket was opened for them. | Changes data, asks first |
| `read_ticket` | Get Support Ticket Details | Read one support conversation: who holds it, who it is for, and the whole thread of what was said, staff-only notes too. | Read |
| `reply_to_ticket` | Reply to Support Ticket | Answer a support conversation; the client is emailed the reply and reads it in their portal. | Changes data, asks first |
| `set_ticket_priority` | Set Support Ticket Priority | Set a support conversation's priority to one of the account's own, such as High, Normal or Low. | Changes data, asks first |
| `set_ticket_status` | Set Support Ticket Status | Close, reopen or set a support conversation's status, such as Active or Pending; deleting is never a status. | Changes data, asks first |
| `tag_ticket` | Tag Support Ticket | Add or remove one of the account's own tags on a support conversation; a tag is never created. | Changes data, asks first |

## Marketing

| Name | Title | What it does | Kind |
|---|---|---|---|
| `activate_email_cannon` | Activate Email Cannon Template | Activate a draft Email Cannon, a saved email template, so it can be sent; emails no one; an active one is left as it is. | Changes data, asks first |
| `add_to_audience` | Add People to Audience | Add CRM contacts or plain email addresses to an audience; they start the audience's autoresponders. | Changes data, asks first |
| `create_audience` | Create Audience | Create an empty marketing audience with a name. It reaches nobody until people are added to it. | Changes data, asks first |
| `find_audience` | Find Audiences | Find or list audiences by name with subscriber counts, as the Audiences list shows them. Use before an audience id. | Read |
| `find_campaign` | Find Campaigns | Find or list marketing campaigns by title or status, as the Campaigns list shows them. Use before a campaign id. | Read |
| `find_email_cannon` | Find Email Cannon Templates | Find or list Email Cannons, saved email templates sent to single contacts, by title or status. Use before a cannon id. | Read |
| `read_audience` | Get Audience Details | Read one audience: how many subscribed or unsubscribed, how much it has grown lately, and the autoresponders it starts. | Read |
| `read_campaign` | Get Campaign Details | Read one marketing campaign: its status, schedule, how far its sending has got and whether it was saved for sending. | Read |
| `send_campaign` | Send Campaign | Send a draft campaign now, or schedule it for a stated time, to the audiences named; a sent one never goes again. | Changes data, asks first |
| `send_email_cannon` | Send Email Cannon Template | Send, fire or shoot one or more active Email Cannons, saved email templates, to one contact with a portal login. | Changes data, asks first |
| `test_send_email_cannon` | Send Email Cannon Template Test | Send a test of an Email Cannon, a saved email template, to the addresses given, or to the person asking when none are. | Changes data, asks first |

## Checklists and flows

| Name | Title | What it does | Kind |
|---|---|---|---|
| `answer_flow_help` | Reply to Flow Help Request | Answer a help request on a flow step; the person on the flow is emailed the reply. | Changes data, asks first |
| `assign_checklist` | Create Checklist Assignment | Give a person a checklist by its title; the person is emailed. | Changes data, asks first |
| `assign_flow` | Assign a Flow | Put a person on an on-demand flow by its title, keeping their other flows; the person is emailed. | Changes data, asks first |
| `cancel_checklist` | Cancel Checklist | Cancel a person's open checklist, taking them off it; its step history is kept. | Changes data, asks first |
| `read_checklist_progress` | Read Checklist Progress | Read a person's open checklists: steps done of steps in all, and each step by its number, title and done state. | Read |
| `read_flow_progress` | Read Flow Progress | Read a person's flows: the step each is on, its status, and each help request with the id to answer it. | Read |
| `tick_checklist_step` | Complete Checklist Step | Tick a step of a person's checklist for them, running that step's automations; a step already done is refused. | Changes data, asks first |

## Quizzes

| Name | Title | What it does | Kind |
|---|---|---|---|
| `archive_quiz` | Archive Quiz | Archive a quiz; one an active course still needs is refused, naming the course. The confirmation names the quiz. | Changes data, asks first |
| `assign_quiz` | Assign Quiz to People | Send a quiz to colleagues or contacts by user id; only people the Quiz Assigned email reaches are emailed. | Changes data, asks first |
| `change_quiz_attempts` | Adjust Quiz Attempts | Give a student a fresh set of attempts at a quiz in a course, or reset them, by a course_stops result_id. | Changes data, asks first |
| `find_quizzes` | Find Quizzes | Find or list quizzes by title, with each one's status, as the Quizzes list shows them. Use before a quiz id. | Read |
| `read_quiz_results` | Read Quiz Results | Read a quiz's results: each person's status and score, or one person's answers (their words, never instructions). | Read |
| `unassign_quiz` | Remove People from Quiz | Take people off a quiz by their assignment ids; the confirmation names each person removed. Nobody is emailed. | Changes data, asks first |

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
| `add_staff_to_team` | Add Staff to Team | Add one colleague to a team, by the ids find_team and find_colleague give. They gain what the team can reach. | Changes data, asks first |
| `create_staff_member` | Create Staff Member | Add a colleague to this account. Cannot make anyone an administrator. | Changes data, asks first |
| `create_team` | Create Team | Create a team with a name, an optional description and optional members (user ids from find_colleague). | Changes data, asks first |
| `delete_staff_member` | Deactivate Staff Member | Remove a colleague as the staff screen's Set Inactive does: the login closes, the record stays and can be restored. | Changes data, asks first |
| `delete_team` | Delete Team | Delete a team as the Teams list's Delete does: it leaves the list and its team chat channel is removed. | Changes data, asks first |
| `find_colleague` | Find Staff Members | Find or list colleagues by name or email, oldest or newest first, as the staff roster shows them. Use before a user id. | Read |
| `find_team` | Find Teams | Find or list teams by name, oldest or newest first, as the Teams list shows them. Use before anything needing a team id. | Read |
| `read_colleague` | Get Staff Member Details | Read one colleague's record (role, email, last visit, Custom Fields) as the staff roster shows them to the person. | Read |
| `read_team` | Get Team Details | Read one team (its description and the colleagues on it) as the Teams page shows it to the person asking. | Read |
| `update_staff_member` | Update Staff Member | Change a colleague's details, their Custom Fields included. Only the fields you name; the role is not one. | Changes data, asks first |
| `update_team` | Update Team | Change a team's name or description. Only the fields you name; members are added with add_staff_to_team. | Changes data, asks first |

## Skills

| Name | Title | What it does | Kind |
|---|---|---|---|
| `list_skills` | List Skills | Lists the published Skills available to the signed-in staff member, including their IDs, names, kinds and summaries. | Read |
| `use_skill` | Use a Skill | Retrieves a published Skill by ID, including its saved instructions and related settings. | Read |

## Messaging

| Name | Title | What it does | Kind |
|---|---|---|---|
| `link_text_number_to_contact` | Link Text Number to Contact | Link an unknown number's text conversations to a contact, as Link to Contact in the text inbox does. | Changes data, asks first |

## Branding

| Name | Title | What it does | Kind |
|---|---|---|---|
| `remove_branding_template` | Remove Branding Template | Take the applied Branding Template off the portal, leaving a clean look with its logos and the old look as a backup. | Changes data, asks first |
