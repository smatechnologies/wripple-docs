# Weather Changed Trigger

Now that we have configured our application, it's time to write our first trigger. This trigger will be a polling trigger. You can get more information about triggers [here](/developers/implementation/triggers/).

In this trigger, we want users to be able to set a threshold for weather temperature and trigger a workflow if the weather is above the set degree.

## Update Trigger Name and Models

First, let's start with renaming the following files:
- `Triggers/SamplePollingTrigger.cs` > `Triggers/WeatherChanged.cs`
- `Triggers/SamplePollingTrigger.Schema.json` > `Triggers/WeatherChanged.Schema.json`

Next, update the trigger's class name from `SamplePollingTrigger` to `WeatherChanged` and update the `[DisplayName]` and `[Description]` attributes values to:
- **DisplayName**: Weather Changed
- **Description**: Triggers when weather temperature is above the set threshold.

Let's change the sample models to our needs by replacing the existing request and response models with the following. We want to get the threshold value from the user and return the current temperature.

```csharp
public record WeatherChangedRequest(float Threshold) : IAppRequest;
public record WeatherChangedResponse(float Temperature) : IAppResponse;
```

## JSON Schemas

Now, just like what we did with the application config, let's change the `WeatherChanged.Schema.json` file's contents to the following:

```json
{
  "type": "object",
  "required": [
    "threshold"
  ],
  "properties": {
    "threshold": {
      "type": "number",
      "title": "Threshold"
    }
  }
}
```

We can also create another file called `Triggers/WeatherChanged.Schema.UI.json` to give more information to users with our form. More information about UI Schemas can be found [here](/developers/json-schema/ui-schema-definition).

```json
{
  "threshold": {
    "ui:description": "Please enter the temperature threshold in fahrenheit to check if current weather is above this value."
  }
}
```
This will show a tooltip for the `threshold` field on the form.

## API Model

We will be using the [Open-Meteo public weather API](https://open-meteo.com/en/docs), so we need to create a model that handles the response. The Open-Meteo forecast API returns a JSON response like this:

```json
{
  "latitude": 29.767237,
  "longitude": -95.35445,
  "generationtime_ms": 0.0160932540893555,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 14,
  "current_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature_2m": "°F"
  },
  "current": {
    "time": "2024-10-01T21:30",
    "interval": 900,
    "temperature_2m": 92.2
  }
}
```

We only need the `current.temperature_2m` variable from this response. Let's create some models to handle that. Add these two lines below your request and response models:

```csharp
public record ApiWeatherResponseCurrent(float Temperature_2m);
public record ApiWeatherResponse(ApiWeatherResponseCurrent Current);
```

And lastly, clean up the sample code in the body of the `Handle` method.

## Get Config and Request Values

Now, we will need the user's config to get the location information, and we will need the threshold value user entered when they configure their trigger, add following lines to your `Handle` method body, so we can get access to this information,

```csharp
var config = context.GetConfiguration<ApplicationConfig>();
var request = context.GetRequest<WeatherChangedRequest>();
```

- `context.GetConfiguration` will give us the information the user entered when they configured their app in the application config. 
- `context.GetRequest` will give us the information the user entered when they configured their trigger in the workflow builder.

## Call the API

It's time for some logic. First, let's build our endpoint URL with the information from the app configuration:

```csharp
var apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={config.Latitude}&longitude={config.Longitude}&current=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";
```

Call the API with `HttpClient`. More information about `HttpClient` can be found [here](https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient). 

> To keep things simple, we are going to create an instance of `HttpClient` and call the API in the same place. You can create a common utils class and move some of the logic to it, and you can use it from different actions and triggers later on.

```csharp
var client = new HttpClient();
var apiResponse = await client.GetFromJsonAsync<ApiWeatherResponse>(apiUrl);
var temperature = apiResponse.Current.Temperature_2m;
```

Note that we are not doing any validation or error checking here to keep things simple. If you need to do validation or error handling, check the [Errors and Validation](/developers/implementation/errors-and-validation/) page.

Let's check our condition if the temperature is above the threshold and trigger a workflow:

```csharp
if (temperature > request.Threshold)
{
    // temperature is above the threshold, let's trigger a workflow by returning the current temperature
    var response = new WeatherChangedResponse(temperature);
    return new PollingTriggerResponse<WeatherChangedResponse>(response);
}
```

Lastly, if the temperature is not above the threshold, return an empty response:

```csharp
// return empty response, this will not trigger a workflow
return new PollingTriggerResponse<WeatherChangedResponse>();
```

## Final Code

Final code should look like this,

```csharp
public record WeatherChangedRequest(float Threshold) : IAppRequest;
public record WeatherChangedResponse(float Temperature) : IAppResponse;

public record ApiWeatherResponseCurrent(float Temperature_2m);
public record ApiWeatherResponse(ApiWeatherResponseCurrent Current);

[DisplayName("Weather Changed")]
[Description("Triggers when weather temperature is above the set threshold.")]
public class WeatherChanged : IAppPollingTrigger<WeatherChangedRequest, WeatherChangedResponse>
{
    public async Task<PollingTriggerResponse<WeatherChangedResponse>> Handle(PollingExecutionContext context)
    {
        var request = context.GetRequest<WeatherChangedRequest>();
        var config = context.GetConfiguration<ApplicationConfig>();

        var apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={config.Latitude}&longitude={config.Longitude}&current=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";
        var client = new HttpClient();
        var apiResponse = await client.GetFromJsonAsync<ApiWeatherResponse>(apiUrl);
        var temperature = apiResponse.Current.Temperature_2m;

        if (temperature > request.Threshold)
        {
            // temperature is above the threshold, lets trigger a workflow by returning a value
            var response = new WeatherChangedResponse(temperature);
            return new PollingTriggerResponse<WeatherChangedResponse>(response);
        }

        // return empty response, this will not trigger a workflow
        return new PollingTriggerResponse<WeatherChangedResponse>();
    }
}
```