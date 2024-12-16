# Create Sheet

Creates a new sheet in Smartsheet.

### Input Fields

- **Sheet Name** *(Required)*
- **Sheet Location**
  - Options:  `Sheets Folder (Home)`, `Subfolder`, `Workspace`
- **Folder ID** *(Required if placing new sheet in subfolder)*
- **Workspace ID** *(Required if placing new sheet in workspace)*
- **Columns** *(At least 1 required)*
  - **Column Title** *(Required)*
  - **Column Type**
    - Options: `Text/Number`, `Date`, `Checkbox`

>Note: The first column provided will be considered the 'Primary' column. Primary Columns must have the 'Text/Number' type.

**How to find Folder/Workspace ID:**
Navigate to the 'Browse' page and right click on the desired folder or workspace, then select 'Properties'.

### Output Fields

- **Sheet ID**
