# Project Structure

After creating your Wripple app, you will find the following structure in your project directory:

- **MyWeatherApp**
  - **/Actions**
    - **SampleAction.cs**: This file contains the implementation of a sample action.
    - **SampleAction.Schema.json**: This JSON schema defines the input structure for the sample action.
    - **SampleAction.Schema.UI.json**: This JSON UI schema specifies the user interface for the sample action input.
  - **/Triggers**
    - **SamplePollingTrigger.cs**: This file contains the implementation of a sample polling trigger.
    - **SamplePollingTrigger.Schema.json**: This JSON schema defines the input structure for the sample polling trigger.
  - **Application.cs**: This file contains some helper methods for app configuration.
  - **ApplicationConfig.cs**: This file defines the configuration settings for the application.
  - **ApplicationConfig.Schema.json**: This JSON schema defines the input structure for the application configuration.
  - **icon128.png**: A sample 128x128 pixel icon for the app.
  - **icon48.png**: A sample 48x48 pixel icon for the app.
  - **README.md**: This file provides general help about the project structure, actions, and triggers.

Each of these files plays a crucial role in the functionality and configuration of your Wripple app, providing a solid foundation for further development and customization.