# Test Your App

Now that we have completed the logic of our app, let's see how we can test it and make sure it's working correctly.

One of the most common ways to test an application is to write unit tests. The Wripple SDK comes with a couple of test helpers to assist you in writing tests for your actions and triggers.

**Important:** In this section, all the tests will run against a real API. Our goal here is to be able to debug and test our application logic. You should mock the HttpClient for production tests. There are many HTTP mock providers available. One example is the [mockhttp](https://github.com/richardszalay/mockhttp) library.

## Create a Test Project

1. In Visual Studio, right-click your solution name in Solution Explorer and click Add > New Project.
2. Find the [xUnit](https://xunit.net/) Test Project template and name the project **MyWeatherApp.Tests**.
3. Set the Framework to **.NET 8.0 (Long Term Support)**.
4. Add **MyWeatherApp** as a project dependency to your test project.

## Write a Unit Test for WeatherChanged Trigger

When you create a test project in Visual Studio, it will create a file named `UnitTest1.cs` and add an empty unit test in it. Let's change this test to test our trigger. Replace the `UnitTest1` class in the `UnitTest1.cs` file with the following:

```csharp
public class MyWeatherAppTests
{
    [Fact]
    public async Task TriggerTest()
    {
        var trigger = new WeatherChanged();      
        var request = new WeatherChangedRequest(70);
        var configuration = new ApplicationConfig(29.760427f, -95.369804f);
        var response = await trigger.Handle(ContextHelpers.GetPollingTriggerContext(request, configuration));

        // Write your assertions here
    }
}
```

Now you can add a breakpoint to this test and run the test project in debug mode to test your trigger.

## Write a Unit Test for GetCurrentWeather Action

Add the following test method to your `MyWeatherAppTests` class to test the action:

```csharp
[Fact]
public async Task ActionTest()
{
    var action = new GetCurrentWeather();
    var request = new GetCurrentWeatherRequest();
    var configuration = new ApplicationConfig(29.760427f, -95.369804f);
    var response = await action.Run(ContextHelpers.GetActionContext(request, configuration));

    // Write your assertions here
}
```

Same as the trigger, you can set a breakpoint and test your action.