# Extract Envelope Form Data

You can use this action to extract form data from an envelope in DocuSign.

## Input Fields

- **Envelope ID** *(Required)*

## Output Fields

This action outputs following fields:

- **Fields** *(Output will be based on the form data in the provided envelope)*
  - Referencing this field in a later step will output text in the format of "label: value." Example here:

      ```
      Full Name: Bob Smith
      Address: 123 Main St.
      Phone Number: 123-456-7890
      ```

  - To reference an individual field in a later step, you can type the field name at the end of the token, separated by a period. For instance, to refernce the `Full Name` field, you can provide this token:
    `{{Extract Envelope Form Data.Fields.Full Name}}`
