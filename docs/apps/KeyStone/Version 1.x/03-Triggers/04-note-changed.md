# Note Changed

You can use this trigger to start your workflow when a note is added or updated in KeyStone.

## Input Fields

- List of **Note Type** *(At least 1 note type is required)*

## Output Fields

This trigger outputs the following fields:

- **Note Serial** *(Serial of the note that has been added or updated)*
- **Note Description** *(Description of the note record, normally formatted as `Parent Description` `Note Type` - `Explanation`)* 
- **Is New** *(`true` if the note was added, `false` if the note was updated)*
