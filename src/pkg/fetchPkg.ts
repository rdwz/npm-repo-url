/**
 * Format a repository URL into a nice form, removing leading "git+" and/or trailing ".git".
 *
 * @param {string} url - The URL to format.
 *
 * @returns {string} The formatted URL.
 *
 * @example
 * _fmt('git+https://github.com/rdwz/npm-repo-url.git') => 'https://github.com/rdwz/npm-repo-url'
 * _fmt('https://github.com/rdwz/npm-repo-url.git') => 'https://github.com/rdwz/npm-repo-url'
 */
const _fmt = (url: string): string => url.replace(/^git\+/, '').replace(/\.git$/, '');

/**
 * Fetches the repository URL for a given npm package name.
 * @param {string} pkgName - The name of the package.
 * @returns {Promise<string|null>} The repository URL, or null if not found.
 * @throws {Error} If there is an error fetching data.
 */
async function fetchPkg(pkgName: string): Promise<string | null> {
	try {
		const res = await (
			await fetch(`https://registry.npmjs.org/${pkgName}`)
		).json()
		if (res.repository?.url) {
			return _fmt(res.repository?.url)
		}
		return null
	} catch (error) {
		throw new Error(`Error fetching data for ${pkgName}: ${error.message}`)
	}
}

export { fetchPkg }
