# Creating the App from Template

We will create a new Wripple app using the Wripple.SDK.AppTemplates package that we installed previously.

1. **Create a New Directory**: Start by creating a new directory for your app somewhere in your file system.

2. **Run the Template Command**: Open your terminal and navigate to the newly created directory. Run the following command to create a Wripple app:
   ```bash
   dotnet new wripple-app --name MyWeatherApp --actionsEnabled --pollingTriggersEnabled --configSampleEnabled
   ```
   - The `--name` flag specifies the name of the app and the app folder.
   - The `--actionsEnabled` flag will create sample action.
   - The `--pollingTriggersEnabled` flag will create a sample polling trigger.
   - The `--configSampleEnabled` flag will create a sample application configuration.

   For all the available options in Wripple.SDK.AppTemplates, visit the [App Templates Usage](http://localhost:5002/developers/tools/app-templates/usage) page.

   This step will create a new .NET C# project in the current folder.

3. **Open the Project**: Now, open the newly created `MyWeatherApp/MyWeatherApp.csproj` file in your editor.
