# Send Message to Channel

Sends a message to a private or public Slack channel.

### Input Fields

#### Channel Name *(Required)*

The exact name of the Slack channel. Be sure to invite @Wripple to the channel where you want to send messages.

#### Message *(Required)*

The message you’d like to send to the channel. You can use [Slack formatting](https://slack.com/help/articles/202288908-Format-your-messages) markup to enhance your message.

### Output Fields

This action outputs following fields:

- **MessageSent** (*`True`, if message is successful, otherwise `False`*)
