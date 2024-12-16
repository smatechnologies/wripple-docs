# Build Schedule

You can use this action to build a schedule in OpCon.

## Input Fields

- **Schedule Name** *(Required)* *(List of master schedules can be found under Library > Master Schedules in OpCon Solution Manager.)*
- **From** *(Required)*
- **To** *(Required)*
- **Status** *(Required)* *(Select the state in which the schedule will build. More details about state can be found [here](https://help.smatechnologies.com/opcon/core/Files/UI/Solution-Manager/Using-Schedule-Build/).)*
- **Overwrite existing schedules** *(Existing schedules that are processing cannot be overwritten.)*
- **Use instance properties** *(If no properties are defined for the schedule, OpCon will still request the build for the schedule, but no properties will be defined.)*

## Output Fields

This action outputs following fields:

- **From**
- **Schedule Id**
- **Schedule Name**
- **To**
