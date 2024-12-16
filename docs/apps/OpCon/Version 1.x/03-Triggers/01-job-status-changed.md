# Job Status Changed

You can use this trigger to start your workflow when a job status changes in OpCon.

## Input Fields

- **Schedule Name** *(Required)*
- **Job Name** *(Required)*
- **Status** *(Required)*
- **Schedule Date Range** *(Required)* *(This will include schedules that have been build in the past. Choosing a large range might affect performance.)*

## Output Fields

This trigger outputs following fields:

- **Frequency Name**
- **ID**
- **Job Name**
- **Job Start Time**
- **Job Status**
- **Job Termination**
- **Job Type**
- **Machine Name**
- **Schedule Name**
