# Envelope Completed

You can use this trigger to start your workflow when an envelope is completed in DocuSign.

## Input Fields

- **Type Filter** *(Optionally filter envelopes based on their type. If you select `Other`, you will need to provide the exact Type Name.)*
- **Document Filter** *(Optionally filter envelopes based on the name of a document. This will match if any document in the envelope contains the provided text in it's name. For instance, if your input text is "Invoice", it will match an envelope with a document named "Annual Invoice 123".)*
- **Sender Email Filter** *(Optionally filter envelopes based on the email of the sender. The email address needs to match exactly.)*
- **Signing Group Filter** *(Optionally filter envelopes based on the name of the signing group. The name needs to match exactly.)*

## Output Fields

This action outputs following fields:

- **Envelope Id**
- **Sender Name**
- **Sender Email**
- **Recipient Emails** *(A comma separated list of email addresses)*
- **Email Subject**
- **Document Names** *(A comma separated list of document names)*
- **Created DateTime**
- **Sent DateTime**
- **Completed DateTime**
- **SignerNames** *(A comma separated list of signer names)*
