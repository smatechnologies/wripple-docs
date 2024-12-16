# Search Customers

You can use this action to search for customers in Synapsys.

## Input Fields

- **Search Method** *(Required)*
  - Options: `Name`, `Phone Number`, `Tax ID`
- **First Name** *(Available if searching by Name)*
- **Last Name** *(Available if searching by Name)*
- **Phone Number** *(Required if searching by Phone Number)*
- **Tax ID** *(Required if searching by Tax ID)*

## Output Fields

This action outputs the following fields:

- **Customers** *(A list of customer records which will contain some or all of the following properties)*
  - **Customer ID**
  - **First Name**
  - **Last Name**
  - **Com Name**
  - **Birth Date**
  - **Tax ID**
  - **Client ID**
  - **Client ID Type**
