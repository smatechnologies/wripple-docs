# Search Prospects

You can use this action to search for prospects in Synapsys.

## Input Fields

- **Search Method** *(Required)*
  - Options: `Customer Type`, `Name`, `City`, `State`, `Postal Code`
- **Customer Type** *(Required if searching by Customer Type)*
  - Options: `Individual`, `Business`
- **First Name** *(Available if searching by Name)*
- **Middle Name** *(Available if searching by Name)*
- **Last Name** *(Required if searching by Name)*
- **City** *(Required if searching by City)*
- **State Code** *(Required if searching by State)* *(The two-character alpha code which represents a state)*
- **Postal Code** *(Required if searching by Postal Code)*

## Output Fields

This action outputs the following fields:

- **Prospects** *(A list of prospect records which will contain some or all of the following properties)*
  - **Prospect ID**
  - **Customer Type**
  - **Tax ID**
  - **First Name**
  - **Middle Name**
  - **Last Name**
  - **Com Name**
  - **Home Phone**
  - **Work Phone**
  - **Cell Phone**
  - **Street Address 1**
  - **Street Address 2**
  - **City**
  - **State Code**
  - **Postal Code**
