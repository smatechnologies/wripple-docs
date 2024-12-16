import { readdirSync, existsSync, readFileSync, rmSync, mkdirSync, cpSync, writeFileSync } from 'fs'
import { XMLParser } from 'fast-xml-parser'

const APPS_FOLDER = "../apps"

const getAppsWithWiki = () =>
  readdirSync(APPS_FOLDER, { withFileTypes: true })
    .filter(entry => 
      entry.isDirectory() && 
      entry.name.startsWith("Wripple.Apps") && 
      !entry.name.endsWith(".Tests") &&
      existsSync(`${APPS_FOLDER}/${entry.name}/Wiki`))
    .map(dir => dir.name)

const generateDocusaurusIndex = (appDir) => {
  writeFileSync(`${appDir}/_category_.json`, '{"link": {"type": "generated-index"}}')
  readdirSync(appDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .forEach(entry => {
      const path = `${appDir}/${entry.name}`
      generateDocusaurusIndex(path);
      writeFileSync(`${path}/_category_.json`, '{"link": {"type": "generated-index"}}')
    })
}

const appsWithWiki = getAppsWithWiki()
console.info(`Found ${appsWithWiki.length} apps with wiki.`)

for (let i = 0; i < appsWithWiki.length; i++) {
  const appDir = appsWithWiki[i];
  var appFullDir = `${APPS_FOLDER}/${appDir}`

  var projFiles = 
    readdirSync(appFullDir, { withFileTypes: true })
      .filter(entry => entry.name.endsWith(".csproj"))
      .map(file => `${appFullDir}/${file.name}`);

  if (projFiles.length !== 1) {
    console.error(`Cannot find .csproj file for '${appFullDir}'.`)
    continue;
  }

  const projFileData = readFileSync(projFiles[0], 'utf8')
  const parser = new XMLParser()
  const json = parser.parse(projFileData)
  const docsDir = `${appFullDir}/Wiki`
  const appName = json.Project.PropertyGroup.Title.replace(/[^A-Za-z0-9-]/g, "");
  const newDocsDir = `docs/apps/${appName}`
  const anyMarkdown = readdirSync(docsDir, { recursive: true}).some(fn => fn.endsWith('.md'));
  if(!anyMarkdown) {
    console.info(`'${docsDir}' folder does not have any markdown files. Skipping.`)
    continue;
  }

  rmSync(newDocsDir, { recursive: true, force: true })
  mkdirSync(newDocsDir, { recursive: true })
  cpSync(`${docsDir}/`, newDocsDir, { recursive: true })
  generateDocusaurusIndex(newDocsDir)

  console.info(`Wiki processed for '${appFullDir}'.`)
}
