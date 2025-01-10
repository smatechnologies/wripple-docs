---
sidebar_label: 'Get Note Details'
hide_title: true
---

# Get Note Details

You can use this action to get the details of a Note record in KeyStone.

## Input Fields

- **Parent Type** *(Required)* *(The type of record the note belongs to)*
  - Options: `Account`, `Person`, `Share`, `Loan`, `Card`, `Application`, `GL Account`, `Invoice`
- **Note serial** *(Required)*

## Output Fields

This action outputs following fields:

- **Explanation** *(Content of the Note)*
- **Parent Serial** *(Serial of the Parent Record)*
- **Parent** *(Description of the Parent Record, will vary based on the record type)*
- **Type Serial** *(Serial of the Note Type)*
- **Type** *(Name of the Note Type)*
- **Placement Date Time** *(Date and Time when the Note was placed)*
- **Placement User** *(Name of the user who placed the Note)*
- **Expiration Date** *(Date when the Note will expire)*
- **Last FM Date** *(Date when the Note was last modified)*
