# Account Updated

Use this trigger to kickstart a workflow when an existing account is updated on Salesforce.

## Filters
By default all account fields are watched for changes. You can filter out changes by specifying which fields to watch.

1. Uncheck `Trigger on any change` box
2. Select fields to watch
   1. Select one or more pre-defined fields
      1. Account name
      2. Account type
      3. Billing address
      4. Shipping address
      5. Phone
   2. Or specify custom fields by using `Additional fields` section. Simply add field names you want to watch for changes.

## Output fields
This trigger outputs following fields:

- **Id** (*Id of the updated account.*)
- **Name**
- **BillingStreet**
- **BillingCity**
- **BillingState**
- **BillingPostalCode**
- **BillingCountry**
- **Phone**
- **Type**