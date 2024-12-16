# Add New Note

You can use this action to add new note in KeyStone.

## Input Fields

- **Parent Record Type** *(Required)*
  - Options: `Account`, `Person`, `Share`, `Loan`, `Card`, `Application`, `GL Account`, `Invoice`
- **Parent Serial** *(Required)* *(Serial of the record you want to add a note to)*
- **Note Type** *(Required)* *(The exact description of the Note Type that you want to create. This will be unique to your organization)*
- **Explanation** *(Required)* *(The content of the note)*

## Output Fields

- **Note Serial** *(Serial of the note that has been added)*
