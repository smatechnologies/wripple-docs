# Getting Started

Before you begin developing with the Wripple SDK, ensure you have the following prerequisites:

1. **.NET 8.0**: Developers need to have at least .NET 8.0 installed. If you do not have it, you can download it from [here](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
2. **Integrated Development Environment (IDE)**: You will need an IDE to build C# applications. We recommend using Visual Studio, but you can also use Visual Studio Code, Rider, or any other IDE of your preference. Note that all samples and tutorials in this documentation assume you have Visual Studio installed.
3. **Wripple.SDK.Tools**: Ensure that the Wripple.SDK.Tools .NET tool is installed on your system. This tool is essential for interacting with the Wripple SDK.
4. **Wripple.SDK.AppTemplates**: To create a new app from a template, you need to install the Wripple.SDK.AppTemplates package.


## Installing Wripple.SDK.Tools

To install the Wripple.SDK.Tools package, follow these steps:

1. **Install the Tool**: Open your terminal and run the following command to install the Wripple.SDK.Tools globally:
   ```bash
   dotnet tool install Wripple.SDK.Tools --global
   ```

2. **Verify the Installation**: After installation, you can verify it by running:
   ```bash
   dotnet wripple-tools --version
   ```

For more information about the `dotnet tool install` command, visit the [official documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-tool-install).

Additionally, you can check out the Wripple.SDK.Tools CLI reference [here](/developers/tools/wripple-tools) for detailed usage instructions and examples.


## Installing Wripple.SDK.AppTemplates

To install the Wripple.SDK.AppTemplates package, follow these steps:

1. **Install the Package**: Open your terminal and run the following command to install the Wripple.SDK.AppTemplates:
   ```bash
   dotnet new install Wripple.SDK.AppTemplates
   ```

2. **Verify the Installation**: After installation, you can verify it by running:
   ```bash
   dotnet new wripple-app --help
   ```

For more information about the `dotnet new install` command, visit the [official documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new-install).

Additionally, you can check out the Wripple.SDK.AppTemplates CLI reference [here](/developers/tools/app-templates) for detailed usage instructions and examples.