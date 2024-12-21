import fs from 'node:fs'
import { CACHE_FILE } from './const'

const save = (cache: Map<string, string | null>) =>
	fs.writeFileSync(CACHE_FILE, JSON.stringify([...cache]))

export { save }
