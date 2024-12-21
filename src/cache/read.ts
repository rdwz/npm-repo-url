import fs from 'node:fs'
import { CACHE_FILE } from './const'

/**
 * Reads the cache from the cache file.
 *
 * If the cache file does not exist, the function will create it and return an empty Map.
 *
 * @returns A Map of package names to their repository URLs.
 */
const read = (): Map<string, string | null> => {
	try {
		const data = fs.readFileSync(CACHE_FILE, 'utf8')
		return new Map<string, string | null>(JSON.parse(data))
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error
		}
		fs.promises.mkdir(`${process.env.HOME}/.cache/npm-repo-url`, {
			recursive: true,
		})
		fs.promises.writeFile(CACHE_FILE, '{}')
		return new Map<string, string>()
	}
}

export { read }
