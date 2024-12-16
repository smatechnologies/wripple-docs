# Create Document Query

You can use this action to create a Document Query in OnBase.

## Input Fields

- **Document Type**
  - The name of the document type.
  - Either this or `Document Type Group` is required. Both can be provided if desired.
- **Document Type Group**
  - The name of the document type group.
  - Either this or `Document Type` is required. Both can be provided if desired.
- **Start Date**
  - The start date for the query.
- **End Date**
  - The end date for the query.
- **Max Results**
  - Limits the number of results that the execution of a query can create.
- **Keywords**
  - An array of keywords used to execute a query. Each keyword has the following fields:
    - **Type ID**
      - The ID of the keyword type.
    - **Value**
      - The value to filter by.
    - **Operator**
      - The operator to use for the filter.
      - Options: `Equal`, `LessThan`, `GreaterThan`, `LessThanEqual`, `GreaterThanEqual`, `NotEqual`, `Literal`
    - **Relation**
      - The relation to use for the filter.
      - Options: `AND`, `OR`, `TO`
- **User Display Columns**
  - An array of user defined display columns. Each column has the following fields:
    - **Display Column Type**
      - The type of column to display.
      - Options: `Keyword`, `DocumentId`, `DocumentName`, `DocumentDate`, `ArchivalDate`, `AuthorId`, `Batch`, `DocumentTypeGroup`, `DocumentTypeName`
    - **Keyword Type ID**
      - The ID of the keyword type to display.
      - Only required if `Display Column Type` is `Keyword`.
  - Note: If the query already has display columns defined, the predefined display columns will be ignored and the user defined display columns will be used.

## Output Fields

This action outputs the following fields:

- **Document Query ID**
