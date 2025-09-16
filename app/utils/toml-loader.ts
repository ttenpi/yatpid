import fs from 'fs'
import path from 'path'
import toml from '@iarna/toml'

export default function tomlLoader(fileName: string): any {
  const filePath = path.resolve('app/assets/data', fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return toml.parse(fileContent)
}
