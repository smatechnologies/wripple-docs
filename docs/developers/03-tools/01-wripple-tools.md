# Wripple Tools

.NET CLI for validating and packing your app for publishing.

## Installation

1. Create a new tool manifest file in the solution or project folder.
   ```bash
   dotnet new tool-manifest
   ```

2. Run following command to install the package.
   ```bash
   dotnet tool install wripple.sdk.tools
   ```

> For pre-release versions, you need pass version arguments to specify the version.

**Verify the Installation**: After installation, you can verify it by running:
   ```bash
   dotnet wripple-tools --version
   ```

**Uninstall SDK Tools**

Run following command to uninstall the tool

```bash
dotnet tool uninstall wripple.sdk.tools
```

## Usage

```bash
dotnet wripple-tools [command] [options]
```

### Packing Apps `pack`

This comand will pack your Wripple app to be ready to run on the Wripple platform. Run following command in the same location of Wripple app csproj file.

```bash
dotnet wripple-tools pack [options]
```

#### Options

| Option         | Type   | Default Value                    | Description                                                                                                                                                                                                                                         |
| -------------- | ------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -p, --projects | string | csproj file(s) in current folder | Wripple app project(s) location. (Optional). Pattern to search for csproj files to pack. You can separate multiple patterns with a semicolon, and you can make a pattern negative by prefixing it with '!'. Example: **/\*.csproj;!**/\*.Tests.csproj |
| -o, --output   | string | Current folder                   | Output folder for packaged app.                                                                                                                                                                                                                     |
| --allow-empty  | bool   | false							 | Allows apps to be packed without an action or a trigger.
| --dry-run      | bool   | false                            | Validates the app without creating a package file.                                                                                                                                                                                                  |
| --force        | bool   | false                            | Overwrites the output file if the file exists.                                                                                                         