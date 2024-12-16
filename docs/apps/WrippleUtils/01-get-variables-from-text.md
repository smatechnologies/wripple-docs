# Get Variables from Text

Use the Wripple template language to extract variables from a text input.

### Template Language

The Wripple template syntax is a simple text processor that helps you extract variables from input text. To use it, replace the parts you want to extract from your input text with `[[variableName]]`.

### Samples

Let's say you want to extract `name`, `email`, `date` and `account number` from the following input text:

```text title="Input Text"
You have received a request from John Doe (john@doe.com) on 8/7/2024. 
Account number is: 111222
```

Your template would look like this:

```text title="Template"
You have received a request from [[name]] ([[email]]) on [[date]]. 
Account number is: [[accountNumber]]
```

The output would be:

```json title="Output"
{
  "name": "John",
  "email": "john@doe.com",
  "date": "8/7/2024",
  "accountNumber": "111222"
}
```

You can also skip new lines when writing your template syntax. The following template is equivalent to the one above:

```text title="Template without new lines"
You have received a request from [[name]] ([[email]]) on [[date]]. Account number is: [[accountNumber]]
```

**Skipping Text**

Suppose you have a very long text, but you're only interested in specific parts. Instead of entering the entire input text as template syntax, use an empty variable `[[]]` to skip unnecessary text. For example:

```text title="Long Input Text"
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et vestibulum quam, nec faucibus magna. Aliquam metus neque, laoreet at scelerisque quis, molestie ac tortor. Curabitur blandit pretium nibh, at porta erat. Etiam at convallis nibh, et euismod lectus. Donec non sem in metus consequat scelerisque a a dui. Sed dictum interdum ipsum, sed pulvinar lectus commodo vitae. Aenean non aliquam velit. Integer suscipit suscipit laoreet. Nullam tristique, augue et iaculis sagittis, magna orci facilisis lorem, a commodo nisi quam bibendum tellus. Praesent egestas nulla libero, in ornare quam vestibulum ut. Maecenas faucibus nisi enim, ut suscipit elit vestibulum eu. Maecenas ipsum velit, sollicitudin at libero ut, egestas placerat ligula.

Account number is: 123456

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et vestibulum quam, nec faucibus magna. Aliquam metus neque, laoreet at scelerisque quis, molestie ac tortor. Curabitur blandit pretium nibh, at porta erat. Etiam at convallis nibh, et euismod lectus. Donec non sem in metus consequat scelerisque a a dui. Sed dictum interdum ipsum, sed pulvinar lectus commodo vitae. Aenean non aliquam velit. Integer suscipit suscipit laoreet. Nullam tristique, augue et iaculis sagittis, magna orci facilisis lorem, a commodo nisi quam bibendum tellus. Praesent egestas nulla libero, in ornare quam vestibulum ut. Maecenas faucibus nisi enim, ut suscipit elit vestibulum eu. Maecenas ipsum velit, sollicitudin at libero ut, egestas placerat ligula.
```

```text title="Template with skip"
[[]]Account number is: [[accountNumber]] Lorem[[]]
```

> Note that we put `Lorem` after our variable to indicate where the variable ends. If we omit the `Lorem`, the template would take the rest of the text.

**Notes for Variable Names**

Certainly! Let's spruce up that section in your technical documentation:

---

### Notes for Variable Names

When defining variable names, keep the following guidelines in mind:

1. **Avoid Spaces**: Variable names should not contain spaces. Instead, use underscores or camelCase to separate words within a variable name. For example:
   - Good: `accountNumber`, `customerName`, `orderTotal`
   - Avoid: `account number`, `customer name`, `order total`

2. **Unique Variable Names**: Ensure that you use unique variable names. If you reuse the same variable name, it can lead to unintended behavior. For instance:
   - Good: If you have two different variables representing order numbers, name them distinctly, such as `orderNumber1` and `orderNumber2`.
   - Avoid: Using the same variable name (e.g., `orderNumber`) for multiple purposes within your code.