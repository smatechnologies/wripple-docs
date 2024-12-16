# Find Consumers

You can use this action to find consumers in NCR Voyix's Consumer Data Management (CDM) service.

## Input Fields

- **First Name**
- **Last Name**
- **Birth Date**
- **Home Store**

## Output Fields

This action outputs following fields:

- **Total Count** *(The total number of consumers matching the provided criteria, maximum of 100)*
- **Consumers** *(A list of consumer records with the following properties)*
  - **Consumer Account Number**
  - **Profile Username**
  - **First Name**
  - **Middle Name**
  - **Last Name**
  - **Effective Date**
  - **Birth Date**
  - **Gender**
  - **Phone**
  - **Mobile**
  - **Fax**
  - **Identity**
  - **Home Store**
  - **Addresses** *(A list of address records with the following properties)*
    - **Name**
    - **Line 1**
    - **Line 2**
    - **City**
    - **State**
    - **Postal Code**
    - **Ext. Postal Code**
    - **Country**
    - **Delivery Instructions**
