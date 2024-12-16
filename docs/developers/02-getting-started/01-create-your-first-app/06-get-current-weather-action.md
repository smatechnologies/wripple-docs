# Get Current Weather Action

Now we are going to build an action that fetches the current temperature for the location set in the user's app configuration.

This is going to be very similar to the `WeatherChanged` trigger we have just built, with minor differences.

## Update Action Name and Models

First, let's start by renaming the `Triggers/SampleAction.cs` file to `Triggers/GetCurrentWeather.cs`. Since we do not require input from the user for this action, we can go ahead and remove any schema files for this action.

Next, update the action's class name from `SampleAction` to `GetCurrentWeather` and update the `[DisplayName]` and `[Description]` attribute values to:
- **DisplayName**: Get Current Weather
- **Description**: Gets the current weather temperature.

Let's change the sample models to our needs by replacing the existing request and response models with the following. We don't require any input from the user and return the current temperature.

```csharp
public record GetCurrentWeatherRequest() : IAppRequest;
public record GetCurrentWeatherResponse(float Temperature) : IAppResponse;
```

> Traditionally, actions will have some input. To keep things simple, we stripped the input from this action.

## API Model

We will be using the same endpoint and the same model we used in the `WeatherChanged` trigger. So let's go and add the following model below your request and response models:

```csharp
public record ApiWeatherResponseCurrent(float Temperature_2m);
public record ApiWeatherResponse(ApiWeatherResponseCurrent Current);
```

> We will just keep things simple here, but it's a good practice to keep common models in a separate file so they can be reused.

And clean up the sample methods and the code in the body of the `Run` method.

## Get Config Values

Now, we will need the user's config to get the location information. Add the following line to your `Run` method body so we can get access to this information:

```csharp
var config = context.GetConfiguration<ApplicationConfig>();
```

- `context.GetConfiguration` will give us the information the user entered when they configured their app in the application config.

## Call the API

It's time for some logic. Let's build our endpoint URL with the information from the app configuration and call the API:

```csharp
var apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={config.Latitude}&longitude={config.Longitude}&current=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";
var client = new HttpClient();
var apiResponse = await client.GetFromJsonAsync<ApiWeatherResponse>(apiUrl);
var temperature = apiResponse.Current.Temperature_2m;
```

Note that we are not doing any validation or error checking here to keep things simple. If you need to do validation or error handling, check the Errors and Validation page.

Let's return our response from the action:

```csharp
var response = new GetCurrentWeatherResponse(temperature);
return BasicMetadata.Ok(response);
```

## Final Code

The final code should look like this:

```csharp
public record GetCurrentWeatherRequest() : IAppRequest;
public record GetCurrentWeatherResponse(float Temperature) : IAppResponse;

public record ApiWeatherResponseCurrent(float Temperature_2m);
public record ApiWeatherResponse(ApiWeatherResponseCurrent Current);

[DisplayName("Get Current Weather")]
[Description("Gets the current weather temperature.")]
public class GetCurrentWeather : IAppActionWithMeta<GetCurrentWeatherRequest, GetCurrentWeatherResponse, BasicMetadata>
{
    public async Task<AppActionResponse<GetCurrentWeatherResponse, BasicMetadata>> Run(ActionExecutionContext context)
    {
        var config = context.GetConfiguration<ApplicationConfig>();

        var apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={config.Latitude}&longitude={config.Longitude}&current=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";
        var client = new HttpClient();
        var apiResponse = await client.GetFromJsonAsync<ApiWeatherResponse>(apiUrl);
        var temperature = apiResponse.Current.Temperature_2m;

        var response = new GetCurrentWeatherResponse(temperature);
        return BasicMetadata.Ok(response);
    }
}
```