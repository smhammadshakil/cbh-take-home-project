# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:
DESCRIPTION:
1- Create a table in db named `FacilityAgents` with columns `FacilitiID`, `AgentID` which will be bring from Facilities and Agents tables also add one more column its a new ID name `FacilityAgentID` it will be used by Facilities.

2- If same agent with the same facility already worked in a shift in past do not create new `FacilityAgentID` used already created `FacilityAgentID`.

Ticket 2:
ASSUME `setShiftsByFacility` is a function which assign agent on shifts.
DESCRIPTION:
UPDATE `setShiftsByFacility` function and make sure while assigning agent to a shift, `FacilityAgentID` also stored with agents metadata in shifts details. So, it can be accessable through `getShiftsByFacility`.

Ticket 3:
DESCRIPTION:
UPDATE `generateReport` function while creating PDF use `FacilityAgentID` istead of `AgentID` (previously used).
