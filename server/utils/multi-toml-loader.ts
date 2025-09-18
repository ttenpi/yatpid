import fs, { readdirSync, readFileSync } from 'fs'
import path, { join } from 'path'
import toml from '@iarna/toml'

export default function multiTomlLoader(dir: string): any {
  const filePath = path.resolve('server/data', dir)
  const files = readdirSync(filePath).filter(f => f.endsWith('.toml'))

  if (dir === 'words') {
    const combined: Record<string, any> = {}

    files.forEach(file => {
      const raw = readFileSync(join(filePath, file), 'utf-8')
      const parsed = toml.parse(raw)

      if (!parsed.lemma) {
        console.warn(`Skipping ${file}, no lemma found`)
        return
      }

      // Use the lemma as the key
      combined[parsed.lemma as string] = parsed
    })
    return combined
  } else {
    const combined = files.reduce((acc, file) => {
      const raw = readFileSync(join(filePath, file), 'utf-8')
      const parsed = toml.parse(raw)

      // Merge top-level keys into accumulator
      return { ...acc, ...parsed }
    }, {} as Record<string, any>)
    return combined
  }

}
