# Trigger a Workflow

Triggers a Slack workflow by sending a webhook.

### Input Fields

#### Webhook Trigger URL *(Required)*

This URL will be provided by Slack when creating a webhook trigger. This should begin with `https://hooks.slack.com/triggers`

#### Data Variables

You can provide additional data here if your webhook configuration has custom variables.

### Output Fields

This action outputs following fields:

- **WorkflowTriggered** (*`True`, if workflow was triggered successfully, otherwise `False`*)
