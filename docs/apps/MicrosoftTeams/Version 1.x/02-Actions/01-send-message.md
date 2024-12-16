# Send Message

You can use this action to send messages to any specified chat or channel that the user is part of.

## Input Fields

- **Chat or Channel Url** *(Required)* *(Chat/Channel Url to which message to be sent. You can find this in any chat/channel on teams. Open an existing chat/channel to which you want to send message, mouse-hover on any one message in the chat, click on '...' found at the end in the popup, then click on 'Copy link' in the popup window, paste the copied content from clipboard in the text box. Example Chat Url: \"https://teams.microsoft.com/l/message/19:30426816-f491-4b0c-bebf-21e965-70cc32_afc4b8b2-aab0-4982-a167-cc33c07da736@unq.gbl.spaces/1716989552808?context=%7B%22contextType%22%3A%22chat%22%7D\".)*
- **Message** *(Required)* *(Content of the message to be sent.)*

## Output Fields

This action outputs following fields:

- **Message** (*The content of the message sent.*)
- **Message Sent On** (*The date time of the message sent.*)
- **Sender Name** (*The name of sender of the message.*)

