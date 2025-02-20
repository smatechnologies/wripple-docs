﻿---
sidebar_label: 'Email Received'
hide_title: true
---

# Email Received

You can use this trigger to start your workflow when an email is received in your gmail.

### Fields

#### From (optional)

- Filter out emails based on the sender. You can search with part of the sender's email or name. Ex: @mycompany.com will match all the emails coming from mycompany.com domain.

#### Subject (optional)

- Filter out emails based on the subject. You can search with part of the subject. Ex: Notification will match all the emails with a subject contains the word Notification.

#### Message (optional)

- Filter out emails based on the message body. You can search with part of the message. Ex: error will match all the emails with a message that contains the word error.

#### Return HTML (optional)

- If selected, incoming email will be returned as HTML.

### Output Fields

This action outputs following fields:

- **BCC**
- **CC**
- **From**
- **Message**
- **Subject**
- **To**
