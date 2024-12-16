# App Info
Web Crawler Wripple app gives you simple web crawling tools to use in your workflows. 

> To be able to make most out this app you will need to have basic understanding of HTML.
> You can check [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) source to learn more about HTML.

> Please note that many websites blocks web crawlers. Only use web crawler on the websites that allows crawlers.

## Actions
- **Get Content** *(Gets a text content from a website.)*
  
## Triggers
- **Content Changed** *(Triggers when a section or the entire webpage content changes.)*
- **Website Down** *(Triggers when specified website is down.)*


## Selectors
Web Crawler app uses css selectors to find what content to extract from a website. You can use tag, class or id selectors.

> If there are multiple matches to the selector, action will only use the first match.

### Examples
We will use below sample HTML to select elements from.

```html title="Sample HTML"
<!DOCTYPE html>
<html>
    <title>Website Title</title>
    <body>
        <h1>Header</h1>
        <p>Paragraph 1</p>
        <p id="paragraph2">Paragraph 2</p>
        <p class="red">Paragraph 3</p>
    </body>
</html>
```

```text title="Select the title of the page by tag"
selector : title
result   : Website Title
```

```text title="Select the first paragraph by tag"
selector : p
result   : Paragraph 1
```

```text title="Select the second paragraph by id"
selector : #paragraph2
result   : Paragraph 2
```

```text title="Select the third paragraph by class name"
selector : .red
result   : Paragraph 3
```

Further reading: [Type, class, and ID selectors by MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)