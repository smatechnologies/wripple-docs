# App Configuration

In this section, we will modify our app to prompt users to configure it by entering the latitude and longitude for the location they want to monitor. This allows different users to configure the app for different locations. You can get more information about app configurations [here](/developers/implementation/configs). 

> Typically, app configurations are used to request credentials such as API keys or tokens to connect to a specified service. However, to keep things simple, we will only configure the location for our weather app.

1. **Update ApplicationConfig.cs**: Open the `ApplicationConfig.cs` file and replace the `ApplicationConfig` record with the following code:
    ```csharp
    public record ApplicationConfig(float Latitude, float Longitude) : IAppConfiguration;
    ```

2. **Create the Configuration Form**: Wripple uses [JSON Schema](https://json-schema.org/) standards to build user-facing forms. Open the `ApplicationConfig.Schema.json` file and replace its contents with:
    ```json
    {
      "type": "object",
      "required": [
        "latitude",
        "longitude"
      ],
      "properties": {
        "latitude": {
          "type": "number",
          "title": "Latitude"
        },
        "longitude": {
          "type": "number",
          "title": "Longitude"
        }
      }
    }
    ```
    This schema will create a simple form that asks users to enter the latitude and longitude (both fields are required).

    > You can get more information about how Wripple utilizes JSON Schemas [here](/developers/json-schema/).

With these changes, your app is now configured to prompt users for the necessary location data. This setup ensures that each user can customize the app to monitor weather conditions for their specific location.