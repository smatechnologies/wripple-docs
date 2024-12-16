# Send Email

Sends an email using the configured Gmail account.

### Fields

#### To *(Required)*

The email address of the recipient.

#### Subject *(Required)*

The subject line of the email that is going to be sent.

#### Message *(Required)*

The message (body) of the email that is going to be sent.

#### Show other details (optional)

This will show additional optional fields.

#### Send email as HTML (optional)

This will send the body of the email in HTML format.

#### Cc (optional)

This will CC an email address to the email being sent.

#### Bcc (optional)

This will BCC an email address to the email being sent.

#### Reply-To Email (optional)

The display email to reply to.

#### Reply-To Name (optional)

The display name to reply to.

### Output Fields

This action outputs following fields:

- **Message** (*`This is the message (body) of the email`*)
- **Subject** (*`This is the subject of the message`*)
- **Successful** (*`True or false based on the emails delivery`*)
