# Actions

Actions are one of the building blocks in Wripple workflows. They can be placed anywhere after a trigger in your workflow, and they retrieve input and provide an output to use for the following steps.

## Run Method

When an action is executed, the Wripple SDK will pass an `ActionExecutionContext` to the implementation.

The context will have the following properties:

- `AppStorage? Storage`: *App storage, provides a way to read and upload files for the current workflow.*
- `AppLogger Logger`: *App logger provides a way to log information within the app.*

And the following methods:

- `GetRequest<T>`: *Gets the user form input.*
- `GetConfiguration<T>`: *Gets the user's app configuration.*

**Returns `Task<T>`.**