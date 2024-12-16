# Contact Updated

Use this trigger to kickstart a workflow when an existing contact is updated on Salesforce.

## Filters
By default all contact fields are watched for changes. You can filter out changes by specifying which fields to watch.

1. Uncheck `Trigger on any change` box
2. Select fields to watch
   1. Select one or more pre-defined fields
      1. Account id
      2. First name
      3. Last name
      4. Mailing address
      5. Email
      6. Phone
   2. Or specify custom fields by using `Additional fields` section. Simply add field names you want to watch for changes.

## Output fields
This trigger outputs following fields:

- **Id** (*Id of the updated account.*)
- **AccountId**
- **Email**
- **FirstName**
- **LastName**
- **MailingStreet**
- **MailingCity**
- **MailingState**
- **MailingPostalCode**
- **MailingCountry**
- **MobilePhone**
- **Phone**