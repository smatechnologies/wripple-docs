# Update Range in Worksheet

You can use this action to update data in a Microsoft Excel worksheet.

## Input Fields

- **File Path** *(Required)* *(Excel file relative path on sharepoint/onedrive in the format shown in the example. eg: Folder1/SubFolder1/ExcelFileName. Note: Only the excel files with the extension '.xlsx' are supported.)*
- **Worksheet Name** *(Required)* *(Worksheet name in the specified excel file/workbook.)*
- **Range In Worksheet** *(Required)* *(Specify the range of cells to be updated in the worksheet. Starting cell-address and ending cell-address separated by colon as specified in the example (eg: A9:E11). The values provided in the request must match the specified range (at least one row should be in full length of specified range).)*
- **Input Values** *(Data to be put in the worksheet)*
  - **Row** *(Add one for each worksheet row you want to update)*
    - **Cell Value** *(The value to placed in an individual cell within the parent row, starting from Column 1)*

## Output Fields

N/A
