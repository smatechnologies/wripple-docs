# Create Your First App

Now that you have all the required software installed on your system, we are ready to guide you through building your first Wripple app. 

## App Overview

We will create a simple application that utilizes the [Open-Meteo public weather API](https://open-meteo.com/en/docs) to monitor weather conditions and trigger actions based on specific criteria.

Our app will have the following capabilities:

1. **Configuration**: Users can enter the latitude and longitude of the location they want to monitor for weather conditions.
2. **Polling Trigger**: The app will include a polling trigger that initiates a workflow when the weather exceeds a user-defined temperature threshold. For more information about polling triggers, visit [Polling Triggers](/developers/implementation/triggers/polling-triggers).
3. **Action**: The app will have an action that retrieves the current temperature from the Open-Meteo API. For more information about actions, visit [Actions](/developers/implementation/actions).

By the end of this section, you will have a fully functional Wripple app that can monitor weather conditions and respond accordingly. Let's get started!