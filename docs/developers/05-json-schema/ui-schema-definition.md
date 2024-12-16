---
sidebar_position: 2
---

# UI Schema Definition

Use UI Schema files to enrich your form's look. UI Schemas are optional. If you want to use UI Schema you should create a `[Name].Schema.UI.json` file along with your schema file.

> [Name] refers to the name of the config, action, trigger or lookup. 
> For example if your action name is `CreateUser`, your schema file should be named `CreateUser.Schema.json` and your UI Schema file should be named to `CreateUser.Schema.json`.

---

## Additional Options
Other than the options listed in [uiSchema Reference][lnUISchemaRef], Wripple provides additional UI options to use in your forms.

### Action, Trigger and Lookup Options
These options can be used in actions, triggers and lookups.

#### Hide Expressions `ui:hideexpressions`

This UI option can be used on field level to hide output field selector that shows next to the field.

```json
{
  "myField": {
    "ui:hideexpressions": true
  }
}
```

### Application Config Options

#### OAuth URL `oauthUrl`

This is the url that Wripple will redirect to user to start the oauth flow. You can use dynamic values in the url.
For example `{redirectUrl}` will be replaced by the actual return url. You can also inject values from configuration form.

> For example: If you have a field called `clientId` in your app configuration, you can inject that to url by adding `{clientId}` in your url.

```json
{
  "ui:options": {
    "oAuthUrl": "https://3rdpartyprovider.url?clientid={clientId}&redirect_uri={redirectUrl}"
  }
}
```

_This is required when you implement `IOAuthApplication` for you app._

#### Show OAuth URL `oAuthShowUrl`

_default: false_

Setting this option to `true` will show the redirect url to the user. This is useful when user needs to know the return url to setup the application.

```json
{
  "ui:options": {
    "oAuthUrl": "https://3rdpartyprovider.url?clientid={clientId}&redirect_uri={redirectUrl}",
    "oAuthShowUrl": true
  }
}
```

## Further Reading
- [uiSchema Reference][lnUISchemaRef] to learn more about UI Schemas.
- [react-jsonschema-form sandbox][lnRJSF] to see samples and build your form.

[lnUISchemaRef]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/
[lnRJSF]: https://rjsf-team.github.io/react-jsonschema-form/