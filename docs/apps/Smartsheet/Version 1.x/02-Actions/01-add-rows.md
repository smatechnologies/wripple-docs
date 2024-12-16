# Add Rows

Adds rows to the specified sheet in Smartsheet.

### Input Fields

- **Sheet Name** *(Required)*
- **Row** *(At least 1 required)*
  - **Cell Value** *(At least 1 required in each Row)*
    - The value to place in an individual cell within the parent row, starting from Column 1.
    - The number of cells provided in each row must be less than or equal to the number of columns in the sheet.
- **Add to Top**
  - If true, the rows will be added to the top of the sheet. If false, the rows will be added to the bottom of the sheet.

### Output Fields

N/A

>Note: This action will not make partial updates. If there is an error adding any of the provided data, the entire operation will be canceled.