import { read, save } from '../cache'
/**
 * Format a repository URL into a standard form
 * by removing any leading "git+" and trailing ".git".
 *
 * @param {string} url - The URL to format.
 * @returns {string} - The formatted URL.
 *
 * @example
 * _fmt('git+https://github.com/rdwz/npm-repo-url.git') => 'https://github.com/rdwz/npm-repo-url'
 */
const _fmt = (url: string): string =>
	url.replace(/^git\+/, '').replace(/\.git$/, '')

async function fetchPkg(
	pkgName: string,
	{ verbose }: { verbose: boolean } = { verbose: true }
): Promise<string | null> {
	const cache = read()
	const cachedUrl = cache.get(pkgName)
	if (cachedUrl) {
		if (verbose) console.info(`Cache hit for ${pkgName}`)
		return cachedUrl ?? Promise.resolve(null)
	}

	const promise = fetch(`https://registry.npmjs.org/${pkgName}`)
		.then(async (response) => {
			if (!response.ok) {
				throw new Error(`Failed to fetch data for ${pkgName}`)
			}

			const { repository } = await response.json()
			const url = repository?.url ? _fmt(repository.url) : null
			cache.set(pkgName, url)
			save(cache)

			return url
		})
		.catch((error) => {
			throw new Error(`Error fetching data for ${pkgName}: ${error.message}`)
		})

	return promise
}

export { fetchPkg }
