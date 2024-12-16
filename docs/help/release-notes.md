---
sidebar_position: 1
---

# Release Notes

## v1.6.1 Skittles (2024-11-12)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixing an issue with Insights page permissions.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.6.0 Skittles (2024-11-01)

### Breaking Changes

N/A

### New Apps

- Added Jira app with Get Issue Details action.
- Added Webex app with Send Message action.

### New Features

- Added Add Prospect action in Synapsys app.
- Added Update Prospect action in Synapsys app.
- Added Get Prospect Details action in Synapsys app.
- Added Referral Search action in Synapsys app.
- Added Add New Note action to KeyStone app.
- Added Add Update Note action to KeyStone app.
- Added Create Sheet action to Smartsheet app.

### Bug Fixes

- Fixed browser errors.
- Fixed date picker resetting.

### Performance Improvements

N/A

### Other Changes

Updated Prospect Search action in Synapsys app.

---

## v1.5.2 Skittles (2024-10-16)

### Breaking Changes

N/A

### New Apps

- Added Smartsheet app with Add Rows action.

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.5.1 Skittles (2024-10-07)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

- Add tagging for Gainsight analytics tracking.

---

## v1.5.0 Skittles (2024-09-30)

### Breaking Changes

N/A

### New Apps

- Added Twilio app with Send Message action.

### New Features

- Added Send Message to User action in Slack app.
- Added Send Message action to Teams app.
- Added Address Link Changed trigger to KeyStone app.
- New 'Agent is Offline' status for applications.

### Bug Fixes

- Fixed broken filters in Workflow History page.

### Performance Improvements

N/A

### Other Changes

- UI bulk improvements.
- Added API endpoint for listing users in a customer account.
- Added logic to purge event data after every workflow and stored data when workflow is unpublished.
- Removed auditing for event data.
- Updated dependencies.
- Updated webhook handler to support async responses.
- Updated tests in HubSpot app.

---

## v1.4.4 Skittles (2024-09-19)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Added Wait action to Wripple Utils app.
- Added Execute Self Service action to OpCon app.

### Bug Fixes

- Fixed broken documentation link.

### Performance Improvements

N/A

### Other Changes

- Redirected documentation links in app configuration dialog.
- Updated KeyStone app documentation.

---

## v1.4.3 Skittles (2024-09-13)

### Breaking Changes

N/A

### New Apps

- Synapsys

### New Features

N/A

### Bug Fixes

- Fixed sorting/filtering functionality on Workflow History page.

### Performance Improvements

N/A

### Other Changes

- UI Improvements

---

## v1.4.2 Skittles (2024-09-09)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Reapplied webhook trigger updates.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.4.1 Skittles (2024-09-09)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed webhook triggers not executing workflows.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.4.0 Skittles (2024-09-05)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Added Send Gmail Email Message action to Gmail app.
- Added Envelope Filters to DocuSign Triggers.

### Bug Fixes

- Fixed dark mode link text for app configuration.
- Fixed real time status updates for app validation.

### Performance Improvements

N/A

### Other Changes

- Updated help documentation for applications.
- Updated app configuration UI for OAuth applications.
- Updated UI button colors.
- Updated favicon.
- Updated UI dialog button order.

---

## v1.3.4 Skittles (2024-08-22)

### Breaking Changes

N/A

### New Apps

- Added Gmail app.

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.3.3 Skittles (2024-08-21)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Added Update Opportunity action to KeyStone app.
- Added Update Interaction action to KeyStone app.
- Added New Interaction action to KeyStone app.

### Bug Fixes

- Fixed an issue when selecting value from dropdown in action would not save correctly.
- Fixed an issue with hour selection in date time picker would not show all fields.
- Fixed an issue with output field selector would not fully show in smaller screens.
- Fixed an issue with app trigger failure when multiple instances of the same app executes at the same time.
- Fixed an issue when using Get Variables from Text action matches a text longer than intended.
- Fixed an issue with websocket connection could not be established.
- Fixed an issue when changing the application on previous step would not reflect changes to step outputs in following steps.

### Performance Improvements

N/A

### Other Changes

- Added Privacy Policy link to login page.

---

## v1.3.2 Skittles (2024-08-14)

### Breaking Changes

N/A

### New Apps

- Added Wripple Utils App with Get Variables from Text action.

### New Features

- Added Extract Envelope Form Data action to Docusign app.
- Added ability to use dynamic key/value fields in workflow designer.

### Bug Fixes

- Fixed an issue when Slack channel cannot be found by name.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.3.1 Skittles (2024-08-14)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed an issue on validating workflow when trigger input has no fields.
- Fixed an issue when workflow context menu would stay open even after workflow gets deleted.
- Fixed an issue when dashboard values would not refresh on browser reload.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.3.0 Skittles (2024-08-06)

### Breaking Changes

- Updated workflow designer.
  - Added ability to edit condition branch names.
  - Added new UI for output field selector.
  - Added new UI for action and trigger forms.
  - Added new UI for step forms.
  - Added new UI for quick navigation.
  - Added new UI for flow controls.

### New Apps

N/A

### New Features

- Added a check for active / inactive accounts.
- Added an ability to return additional data (metadata) from app integrations.
- Added an ability to return dynamic fields from app integrations.
- Added 'Override Requested' trigger to KeyStone app.
- Added 'Search Accounts' action to KeyStone app.
- Added 'Trigger a Workflow' action to Slack app.

### Bug Fixes

- Fixed an display issue with validation messages if step name empty.
- Fixed styling and link issue with cross references in app configurations.
- Fixed an issue when tooltip won't show on checkboxes in workflow builder.
- Fixed an issue when workflow shows as published while on draft.

### Performance Improvements

N/A

### Other Changes

- Reordered output fields of Q2 Update Address Action.
- Added Gainsight integration.
- Minor design adjustments on user management pages.
- Updated application icons.

---

## v1.2.6 Skittles (2024-07-24)

### Breaking Changes

N/A

### New Apps

- Added Q2 app with actions,

  - Update Customer Address
  - Update Customer Phone Number
  - Find Single Customer

- Added Slack app with Send Message to Channel action.

### New Features

N/A

### Bug Fixes

- Fixed an issue when watch notifications would deliever to wrong user.
- Fixed an issue with SSO that prevents new users to setup SSO.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.2.5 Skittles (2024-07-17)

### Breaking Changes

N/A

### New Apps

- Added CIF 20/20 app with actions,

  - Add Address
  - Address Search
  - Customer Search
  - Modify Address

- Added CoreDirector app with actions,

  - Add Address
  - Address Search
  - Customer Search
  - Modify Address

- Added Microsoft 365 Excel app with actions,

  - Read from Worksheet
  - Update Range in Worksheet

- Added SilverLake app with actions,

  - Add Address
  - Address Search
  - Customer Search
  - Modify Address

- Added Microsoft Teams app

### New Features

- Added Address Changed trigger to KeyStone app.
- Added Update Address action to Symitar app.
- Added Update Phone Number action to Symitar app.

### Bug Fixes

N/A

### Performance Improvements

- Improved page speeds in workflows page.
- Improved error handling in Fiserv Premier app.

### Other Changes

N/A

---

## v1.2.4 Skittles (2024-07-15)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Added Update Global Property action.

### Bug Fixes

- Fixed an issue when user puts / to end of their Api Url in configuration.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.2.3 Skittles (2024-07-02)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed debouncing of toggles and reset filters button.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.2.2 Skittles (2024-07-02)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed the height of the application cards, tags, filters and other UI inconsistencies.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.2.1 Skittles (2024-07-01)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed an issue when Coming soon section would not display properly on different screen sizes due to drawer width.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.2 Skittles (2024-06-28)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Introduced Coming Soon! section.

### Bug Fixes

- Fixed an issue when Salesforce trigger would prevent workflow to publish/unpublish.

### Performance Improvements

N/A

### Other Changes

- Updated the Workflow list layout.
- Added Terms and Conditions in registration page.
- Added more detailed error messages when publishing workflow with Salesforce trigger.
- Added a check to prevent workflow to being triggered or published if an Relay agent is offline.

---

## v1.1.1 Skittles (2024-06-26)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

- Updating help center documentation.

---

## v1.1.0 Skittles (2024-06-12)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Introduced a new Applications page.
- Introduced Non-SSO User Management page.
- Implemented "Search Personal Customers" and "Update Personal Customer" actions for the FusionFabric app.

### Bug Fixes

- Fixed an issue where date fields were not clearing properly in the workflow editor.
- Fixed an issue where publishing a workflow with changed Salesforce app configuration was not registering with the webhook.
- Fixed an issue where HubSpot triggers would not work.
- Fixed an issue where SalesForce triggers would not work.
- Fixed an issue where dark mode would not persist when saved in user settings.
- Fixed an issue when existing users would still see the old version of the web app after a new version was published.
- Fixed an issue where trigger interval would not show on workflow configuration.

### Performance Improvements

- Improved polling triggers performance.
- Reduced the chunk size on production builds for the web app.

### Other Changes

- Updated icons and colors and added Wripple logos.
- Re-organized dashboard widgets display order.
- Added new help documentation for Workflow History and Relay.
- Added number of workflows triggered information to Trigger History.
- Updated API Url in OpCon app configuration to make it easier to set the API url.
- Added ability to use step outputs from outside of the sub-workflows.

---

## v1.0.3 Skittles (2024-05-30)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed an issue when empty task results would throw an error.

### Performance Improvements

N/A

### Other Changes

- Added a functionality to collect user feedback.

---

## v1.0.2 Skittles (2024-05-16)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed an issue when user guides are not displaying correctly.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.0.1 Skittles (2024-05-15)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed an issue when editing application config with agent loses the agent selection.
- Fixed an issue where polling triggers not triggering correctly.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v1.0.0 Skittles (2024-05-10)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Introducing For-Each step type
  - Supporting Sub-Flows in for-each steps
- Supporting lists in app implementations
- Introducing Condition Step type
- Introducing Wripple Relay
- Introducing Usage Limits
- Adding "Search Personal Customers" action to Finastra App

### Bug Fixes

- Fixed an issue with OpCon app that prevents users to connect their OpCon instance.
- Fixed an issue that login page would show multiple error messages when user session expires.

### Performance Improvements

- Improving performance of viewing published workflow details.

### Other Changes

- UI fixes: colors, icons, user messages.
- Hiding App step inputs and outputs on the UI.
- Adding ability to navigate between steps by step output references.

---

## v0.9.3 Jalebi (2024-05-08)

### Breaking Changes

N/A

### New Apps

- NCR Voyix App

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.9.2 Jalebi (2024-05-01)

### Breaking Changes

N/A

### New Apps

- FICS App

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.9.1 Jalebi (2024-04-19)

### Breaking Changes

N/A

### New Apps

- Symitar App

### New Features

- Adding Add Account action to Fiserv Premier app

### Bug Fixes

- Fixed an issue when hard reloading certain pages would not load the same page again.

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.9 Jalebi (2024-04-02)

### Breaking Changes

N/A

### New Apps

N/A

### New Features

N/A

### Bug Fixes

- Fixed validation issues with date fields in action / trigger inputs.

### Performance Improvements

N/A

### Other Changes

- Output fields for actions / triggers now sorted alphabetically.
- Re-arranging config and event sections of actions / triggers input.

---

## v0.8 Kit Kat (2024-03-05)

### Breaking Changes

Introducing Flow - New workflow creation screen

### New Apps

- Finastra App
- KeyStone App
- Fiserv App

### New Features

N/A

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.7 Candy Cane (2024-02-05)

> Backend levers for supporting pricing - Database updates to accommodate and record pricing levers
> Notifications for iPaaS users - in app notifications for users  
> Polling Triggers interval - User capability to define polling triggers intervals
> More HubSpot Actions - find and update company actions
> User settings

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Adding Notifications
- User Settings
- Adding Find and Update Company actions to HubSpot app
- Ability to set polling trigger interval on workflow configuration

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.6 Churros (2023-12-28)

> Hubspot Triggers and Actions when Hubspot Account and Contact gets created or modified.
> Docusign Triggers and Actions supported for creating, sending and completing an envelope on docusign.
> OpenAI chatgpt action supported for querying Chatgpt based using workflow steps.
> Summary Container for a workflow so users can understand and navigate easily through the workflow.
> User ability to delete unused app configurations.
> Wiki for application details documentation.

### Breaking Changes

N/A

### New Apps

- Docusign App
- HubSpot App
- OpenAI App

### New Features

- Summary container on workflow configuration page
- Ability to delete app configurations

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

- Adding help for apps

---

## v0.5 Good & Plenty (2023-12-04)

> Salesforce Triggers and Actions supported on iPaaS. Webhook creation for specific apps supported by iPaaS. Roles and Permissions for iPaaS implemented for three different roles (Admin, Editor, Reader). Dashboard for iPaaS users

### Breaking Changes

N/A

### New Apps

- Salesforce

### New Features

- Webhooks support for app development
- Roles and permissions
- Dashboard

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.4 Lokum (2023-11-03)

> Opcon Triggers and Actions available for iPaaS workflows.
> Capability for users to view the execution history of all workflows. Capability to view the change log for any changes done on workflows. Capability of > using output of one step as input of following steps. User capability to delete unpublished workflows. User capability to revert the draft version of > > workflow to previously published version.

### Breaking Changes

N/A

### New Apps

- OpCon

### New Features

- Workflow execution history
- Workflow change log
- Ability to use step outputs in step inputs
- Delete workflows
- Revert workflows

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.3 Jolly Rancher (2023-10-06)

> iPaaS now supports application (Email) which requires user authentication and validated application configurations
> iPaaS now gives User capability to create a workflow, Modify a workflow, Publish a workflow, and view the list of workflows created for their tenant
> iPaaS now executes workflows where triggers and actions can be defined for Email and Webcrawler application

### Breaking Changes

N/A

### New Apps

- Email
- Web Crawler

### New Features

- Create, modify and publish a workflow
- View list of workflows
- Execute workflows

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.2 Kaju Katli (2023-08-31)

> The application now supports two applications defined in the iPaaS and gives the users capability to create a connection (aka Application Configuration) Applications support polling triggers and actions Application configuration creation supports different versions of same application Users can view the list of all application configurations available Users can search and sort on connections page Application gives users capability to modify connection iPaaS platform should be ready with the application configurations which will be used in workflows in upcoming releases.

### Breaking Changes

N/A

### New Apps

N/A

### New Features

- Add, update and list app configurations
- Polling trigger support for app development
- Multiple version support on app development

### Bug Fixes

N/A

### Performance Improvements

N/A

### Other Changes

N/A

---

## v0.1 Heath Bar (2023-08-03)

> Initial release allows the application to be deployed via automated pipelines to pre-determined environments. Functionally, the application supports multi-tenancy, allows new customers to register, and enforces basic SSO authentication in the web application. The task execution SDK schema is defined and an endpoint is exposed that returns all registered applications/integrations.
