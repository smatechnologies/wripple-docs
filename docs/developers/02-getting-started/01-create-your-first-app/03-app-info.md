# App Info

In this section, we will update our app's info (sometimes referred as metadata), including the title, description, author information, tags, release notes, and icons.

## Update App Info
Open the **MyWeatherApp.csproj** file. 
> In Visual Studio, **.csproj** files are hidden by default. You can open it by right-clicking the project name and selecting **Edit Project File** from the menu.

Current **.csproj** file should look like this:

    ```xml
    <Project Sdk="Microsoft.NET.Sdk">
        <PropertyGroup>
            <TargetFramework>net8.0</TargetFramework>
            <ImplicitUsings>enable</ImplicitUsings>
            <Nullable>enable</Nullable>

            <Title>My Wripple App</Title>
            <Version>1.0.0</Version>
            <Description>Short description of my app</Description>
            <Authors>My Company</Authors>
            <PackageTags>wripple-app;sample</PackageTags>
            <PackageReleaseNotes>Initial release of my app</PackageReleaseNotes>
        </PropertyGroup>

        <ItemGroup>
            <PackageReference Include="Wripple.SDK" Version="1.0.1" />
        </ItemGroup>
    </Project>
    ```

Modify lines 7 through 12 as follows:

    - **Title**: Set the `Title` property to `MyWeatherApp`.
    - **Version**: Leave the `Version` property as `1.0.0`.
    - **Description**: Set the `Description` property to `Use this app to integrate weather forecast in your Wripple workflows`.
    - **Authors**: Set the `Authors` property to your company's name.
    - **PackageTags**: Set the `PackageTags` property to `wripple-app;weather;weather-forecast` (you can specify multiple tags separated by semicolons).
    - **PackageReleaseNotes**: Set the `PackageReleaseNotes` property to `Initial release of MyWeatherApp`.

Your updated `.csproj` file should look like this:

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <TargetFramework>net8.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>

        <Title>MyWeatherApp</Title>
        <Version>1.0.0</Version>
        <Description>Use this app to integrate weather forecast in your Wripple workflows</Description>
        <Authors>Your Company Name</Authors>
        <PackageTags>wripple-app;weather;weather-forecast</PackageTags>
        <PackageReleaseNotes>Initial release of MyWeatherApp</PackageReleaseNotes>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="Wripple.SDK" Version="1.1.2" />
    </ItemGroup>
</Project>
```

## Update Icons
Replace the `icon128.png` and `icon48.png` files with an icon that represents the app. 
- 128x128 icon: used in app details. 
- 48x48 icon: used in the workflows and connections.

> By the time of this tutorial latest version of Wripple.SDK package is 1.1.2. Make sure to update if there is a newer version.

By updating these properties, you ensure that your app's metadata is accurate and informative, making it easier for users to understand its purpose and capabilities.