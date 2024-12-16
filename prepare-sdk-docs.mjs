import { readdirSync, readFileSync, writeFileSync, cpSync } from 'fs'

const SDK_REF_FOLDER = "docs/developers/99-api-reference"

console.info(`Formatting SDK Docs for Docusaurus.`)
readdirSync(SDK_REF_FOLDER).forEach(file=> {
  if(!file.endsWith(".md")) {
    return
  }

  const fullPath = `${SDK_REF_FOLDER}/${file}`
  const fileContent = 
    readFileSync(fullPath, "utf8")
    .replace(/<a\s*.*>\s*.*<\/a>/gm, "") // remove links
    .replace(/ +/g, " ") // remove double space
    .replace(/\[[^\[\]]*[<>]([^\[\]]|\[.*\]?)*\]/gm, (match) => match.replace(/(?<!\\)[<]/g, "\\<").replace(/(?<!\\)[<]/g, "//>")) // escape < > in markdown links
    .replace(/^(#+.*)[<>](.*)$/gm, (match) => match.replace(/(?<!\\)[<]/g, "\\<").replace(/(?<!\\)[<]/g, "//>")) // replace < > with &lt; &gt; in markdown headers
    .replace(/\[.+?\].+[<>].+$/gm, (match) => match.replace(/(?<!\\)[<]/g, "\\<").replace(/(?<!\\)[<]/g, "//>")) // escape < > after links
    .replace(/(?<=\])(\([^\(\)]*[\\][^\(\)]+\))/gm, (match) => match.replace(/\\/gm, "")) // fix broken links
	// replace code tags with markdown code blocks```
    .replace(/<pre><code class="lang-csharp">/gm, "```csharp\n")
    .replace(/<\/code><\/pre>/gm, "\n```")
	.replace(/<code>/gm, "`").replace(/<\/code>/gm, "`") // fix standalone code tags
	.replace(/<p>/gm, "").replace(/<\/p>/gm, "\n") // remove paragraphs

  writeFileSync(fullPath, fileContent)
});

console.info(`SDK Docs formatted successfully.`)