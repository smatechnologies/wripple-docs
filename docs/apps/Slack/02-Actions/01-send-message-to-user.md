# Send Message to User

Sends a direct message to a user from the `@Wripple` bot.

### Input Fields

#### Find User By *(Required)*

The method you want to use to find the user in Slack (`Display Name` or `Slack Member ID`)

#### Display Name *(Required if using as find method)*

The display name for the user as seen in Slack. Can also be found by opening the user's profile, opening the options menu (`...`) and selecting `Copy display name`

> Note: Display name is not guaranteed to be unique.

#### Slack Member ID *(Required if using as find method)*

The member ID of the Slack user. Can be found by opening the user's profile, opening the options menu (`...`) and selecting `Copy member ID`

> Note: This is always unique and is the most secure way to ensure the correct user is found.

#### Message *(Required)*

The message you’d like to send to the user. You can use [Slack formatting](https://slack.com/help/articles/202288908-Format-your-messages) markup to enhance your message.

### Output Fields

This action outputs following fields:

- **MessageSent** (*`True`, if message is successful, otherwise `False`*)
