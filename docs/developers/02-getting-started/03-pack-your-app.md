# Pack Your App

Now that we have built and tested our app, we can use Wripple.SDK.Tools to validate and pack our app to ensure everything works correctly. You can find more information about Wripple.SDK.Tools [here](/developers/tools/wripple-tools).

## Validate the App

In your terminal, navigate to the `MyWeatherApp` folder and run the following command:

```bash
dotnet wripple-tools pack --dry-run
```

You should see an output similar to this:

```
Wripple Tools v1.1.3
-----------------------------------------
[INFO][MyWeatherApp] Validating project location.
[INFO][MyWeatherApp] Validating project file.
[INFO][MyWeatherApp] Building project.
[INFO][MyWeatherApp] Validating SDK implementations.
[INFO][MyWeatherApp] App verified.
```

## Pack the App

In your terminal, navigate to the `MyWeatherApp` folder and run the following command:

```bash
dotnet wripple-tools pack
```

You should see an output similar to this:

```
Wripple Tools v1.1.3
-----------------------------------------
[INFO][MyWeatherApp] Validating project location.
[INFO][MyWeatherApp] Validating project file.
[INFO][MyWeatherApp] Building project.
[INFO][MyWeatherApp] Validating SDK implementations.
[INFO][MyWeatherApp] App verified.
[INFO] App package saved to 'C:\Users\MyUser\repos\MyWeatherApp\MyWeatherApp.1.0.0.app'
```

The last line of the output will tell you where your app file is saved.