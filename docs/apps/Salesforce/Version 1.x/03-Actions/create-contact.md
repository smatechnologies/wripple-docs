# Create Contact

You can use this action to create an contact on Salesforce.

## Input Fields

- **Account id** *(Required)*
- **First name** *(Required)*
- **Last name** *(Required)*
- **Email**
- **Phone**
- **Mobile phone**
- **Website**
- **Mailing address**
  - **Street**
  - **City**
  - **State**
  - **Postal code**
  - **Country**
- **Additional Fields** (*You can use this list to add any other fields than listed above.*)

## How to Get Id Fields
You can use previous step's output to get the id (if previous step is a Salesforce step). Or you can use various browser extensions to get the id of an entity on Salesforce.

## Output fields
This action outputs following fields:

- **Id** (*Id of the newly created contact.*)