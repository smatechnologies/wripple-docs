# Get Document Content

You can use this action to get the content of a Document in OnBase.

## Input Fields

- **Document ID** *(Required)*
- **Context**
  - Options: `View`, `Download`, `Email Attachment`

>Note: The maximum supported file size is 100KB

## Output Fields

This action outputs the following fields:

- **Document Content**
  - This will either be plain text or a Base64 string depending on the format of the  document.
