# Create Consumer

You can use this action to create a consumer in NCR Voyix's Consumer Data Management (CDM) service.

## Input Fields

- **First Name**
- **Middle Name**
- **Last Name**
- **Birth Date**
- **Gender**
- **Phone**
- **Mobile**
- **Fax**
- **Profile Username**
- **Identity**
- **Home Store**
- **Receipt Type** [None, All, Email, SMS]
- **Effective Date**
- **Addresses** *(A list of address records with the following properties)*
  - **Name** *(Required if providing address)*
  - **Line 1**
  - **Line 2**
  - **City**
  - **State**
  - **Postal Code**
  - **Ext. Postal Code**
  - **Country**
  - **Delivery Instructions**
- **Consents** *(A list of consents with the following properties)*
  - **Consent** *(Required if providing consents)* [A/B Testing, Analytics, Loyalty, Marketing]
  - **Type** *(Required if providing consents)* [Opt In, Opt Out, Implicit Opt In, Implicit Opt Out]
  - **Origin**
  - **Created By**
  - **Date**

## Output Fields

- **Consumer Account Number**
