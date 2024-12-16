# App Configuration

How to configure Salesforce Wripple App

To be able to use the Salesforce Wripple app, you need to create a connected app in Salesforce. You can find more information about connected apps [here](https://help.salesforce.com/s/articleView?id=sf.connected_app_client_credentials_setup.htm&type=5).

## Configure the App on Salesforce

### 1. Create a Connected App

1. Go to `Setup > Apps > App Manager`
2. Click on `New Connected App`
   - Connected App Name: **Wripple**
   - API Name: **wripple_app**
   - Contact Email: **[Your email]**
3. Check `API (Enable OAuth Settings)`
   - Callback URL: **sfdc://oauth/restapi/success**
   - Add `Manage user data via APIs (api)` scope to Selected OAuth Scopes.
   - Uncheck the following;
     - Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows
     - Require Secret for Web Server Flow
     - Require Secret for Refresh Token Flow
   - Check `Enable Client Credentials`.
     > When prompted click OK.
4. Click `Save`.
5. Click `Continue`.

### 2 Get Consumer Key and Secret

Now the app is created, we need to generate a consumer key and secret to use in Wripple.

1. Click `Manage Consumer Details` under API (Enable OAuth Settings).

   > Salesforce might ask you to verify your account by sending an email, complete this step as described in Salesforce.

2. Copy `Consumer Key` and `Consumer Secret` to be used in app configuration later.

3. Go to newly created app details by clicking the `Back to Manage Connected Apps` link.
4. Click `Manage`.
5. Click `Edit Policies`.
6. Under `Client Credentials Flow` select `Run As` user. This user will be used for all the operations initiated from Wripple.

## Configure App on Wripple

1. Click `App Configurations`.
2. Click `Create`.
3. Enter a name and description for your app config.
4. Select `Salesforce` as an Application.
5. Click `Next`.
6. Enter your Salesforce URL. eg: `https://MyDomainName.my.salesforce.com`
7. Enter the Consumer key and Consumer secret we copied earlier.
8. Enter a user name for the integration user. This user should be the same as the `Run As` user we set up earlier.
9. Click `Validate & Create`.
