# App Templates

.NET app templates for building Wripple Apps.

## Installation

Run following command to install the package.

```bash
dotnet new install Wripple.SDK.AppTemplates
```

> For pre-release versions, you need pass version arguments to specify the version.

**Verify the Installation**: After installation, you can verify it by running:
   ```bash
   dotnet new wripple-app --help
   ```

**Uninstall**

Run following command to uninstall the Wripple App Templates.

```bash
dotnet new uninstall Wripple.SDK.AppTemplates
```


## Usage

```bash
dotnet new wripple-app [options] [template options]
```

### Options

| Option     | Type   | Default Value          | Description                                     |
| ---------- | ------ | ---------------------- | ----------------------------------------------- |
| -n, --name | string | "MyProject.MyWrippleApp" | Sets the namespace and project name for the app |

Run `dotnet new wripple-app -h` to get the all available options.

### Template options:

Pass below options when using the `dotnet new wripple-app` command to customize the app.

| Option                       | Type | Default Value | Description                      |
| ---------------------------- | ---- | ------------- | -------------------------------- |
| -ac, --actionsEnabled        | bool | false         | Creates a sample action          |
| -w, --webhookTriggersEnabled | bool | false         | Creates a sample webhook trigger |
| -p, --pollingTriggersEnabled | bool | false         | Creates a sample polling trigger |
| -c, --configSampleEnabled    | bool | false         | Creates a sample configuration   |
| -oa, --oauthSupport          | bool | false         | Adds OAuth support               |

### Examples

Examples below will create an Wripple app in `MyApps.MyApp` folder and set the namespace to `MyApps.MyApp`.

- Create an empty app.
  `dotnet new wripple-app -n MyApps.MyApp`
- Create an app with sample action.
  `dotnet new wripple-app -n MyApps.MyApp -ac`
- Create an app with sample action and sample webhook trigger.
  `dotnet new wripple-app -n MyApps.MyApp -ac -w`
- Create an app with sample action and sample polling trigger.
  `dotnet new wripple-app -n MyApps.MyApp -ac -p`
- Create an app with all the sample content enabled.
  `dotnet new wripple-app -n MyApps.MyApp -ac -w -p -c`