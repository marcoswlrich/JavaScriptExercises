const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  walk(files)
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if (stats.isDirectory()) {
      readdir(fileFullPath)
      continue
    }

    if (/\.git/g.test(fileFullPath)) continue
  }
  console.log(file)
}
//caminho das pastas dentro dessas funções
readdir()
