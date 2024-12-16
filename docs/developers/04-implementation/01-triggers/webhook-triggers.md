# Webhook Triggers

Webhook triggers listen for third-party events and execute a workflow when an event is received.

## Register Method

When a user publishes a workflow with a webhook trigger, Wripple calls the `Register` method on the webhook trigger implementation and passes a `WebhookRegistrationContext` context.

The context will have the following properties:

- `string WebhookUrl`: *The URL that must be registered with the third party.*
- `AppLogger Logger`: *App logger provides a way to log information within the app.*

And the following methods:

- `GetRequest<T>`: *Gets the user form input.*
- `GetConfiguration<T>`: *Gets the user's app configuration.*

**Returns `WebhookRegisterResponse`.**

## Handle Method

When a third party calls the webhook URL, Wripple calls the `Handle` method on the webhook trigger implementation and passes a `WebhookExecutionContext` context.

The context will have the following properties:

- `Dictionary<string, string>? RequestHeaders`: *The list of request headers sent by the third party.*
- `Dictionary<string, string>? RequestQueryString`: *The list of query variables sent by the third party.*

And the following methods:

- `GetRegisterRequest<T>`: *Gets the user's form input when they configure the trigger.*
- `GetRequestJsonBody<T>`: *Gets the request body sent by the third party.*
- `GetRequestXmlBody`: *Gets the request body sent by the third party as `XDocument`.*

**Returns `WebhookTriggerResponse<T>`.**
> Unlike other `Handle` methods, a webhook's `Handle` method returns two responses:
>
> - One for the following step.
> - One for the third party, see: WebhookCallerResponse.

## Deregister Method

When a user un-publishes a workflow with a webhook trigger, Wripple calls the `Deregister` method on the webhook trigger implementation and passes a `WebhookDeregistrationContext` context.

The context will have the following properties:

- `string WebhookUrl`: *The URL that was registered with the third party.*
- `AppLogger Logger`: *App logger provides a way to log information within the app.*

And the following methods:

- `GetRequest<T>`: *Gets the user form input.*
- `GetConfiguration<T>`: *Gets the user's app configuration.*
- `GetStateValue<T>`: *Gets the state value from the previous run. You can find more information about State below.*

**Returns `Task`.**

## Webhook State

Wripple provides a way to pass values between `Register` and `Deregister` methods. This is often useful if you have a unique ID, such as a webhook ID from the third party, and you need to use the ID to deregister your webhook.

### Set Value to the State

Before you return your register response, you can use the `response.State` variable to set state values.

```csharp
var response = new WebhookRegisterResponse();
response.State["id"] = "Webhook Register Id";
```

### Get Value from the State

You can retrieve state variables as shown below:

```csharp
context.GetStateValue<string?>("myVar");
```