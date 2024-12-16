# Actions

## Ask Question

This action sends your input to Chat GPT and captures the response. 

### Fields

#### Question *(Required)*

The question to ask to Chat GPT.

#### Model *(Required)*

ID of the model to use. For more information about models click [here](https://platform.openai.com/docs/models/overview).

#### Advanced settings

| Field | Description |
| ----------- | ----------- |
| Max tokens | The maximum number of [tokens](https://platform.openai.com/tokenizer) to generate in the chat completion. |
| Presence Penalty | Number between -2 and 2. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. [See more information about frequency and presence penalties](https://platform.openai.com/docs/guides/text-generation/parameter-details). |
| Temperature | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |

### Output Fields

This action outputs following fields:

- **Response** (*Response of Chat GPT to your question.*)
- **TotalTokensUsed** (*Total Open AI tokens used in the conversation.*)