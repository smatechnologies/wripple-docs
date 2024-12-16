# Polling Triggers

Polling triggers are the most common type of triggers. They run periodically based on the interval value set at the workflow level.

## Handle Method

When a polling trigger is executed, the Wripple SDK will pass a `PollingExecutionContext` to the implementation.

The context will have the following properties:

- `DateTime WorkflowPublishDate`: *Date and time of the workflow publish date.*
- `DateTime? LastPollDate`: *Date and time of the last execution.*
- `AppStorage? Storage`: *App storage, provides a way to read and upload files for the current workflow.*
- `AppLogger Logger`: *App logger provides a way to log information within the app.*

And the following methods:

- `GetRequest<T>`: *Gets the user form input.*
- `GetConfiguration<T>`: *Gets the user's app configuration.*
- `GetStateValue<T>`: *Gets the state value from the previous run. You can find more information about State below.*

**Returns `PollingTriggerResponse<T>`.**

## State

Wripple provides a way to pass values between polling trigger runs.

### Set Value to the State

Before you return your trigger response, you can use the `response.State` variable to set state values.

```csharp
var response = new PollingTriggerResponse<MyTriggerResponse>();
response.State["myVar"] = "this value will be passed to the next run";
```

### Get Value from the State

You can retrieve state variables as shown below:

```csharp
context.GetStateValue<string?>("myVar");
```
