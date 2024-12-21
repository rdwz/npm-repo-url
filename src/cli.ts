import { program } from '@redwerkz/commander'
import { color } from './color'
import { fetchPkg } from './pkg'

program
	.name(`${color.m('npm-repo-url')}`)
	.version(require('../package.json').version)
	.description('CLI tool to get repo URL from npm package name')
	.argument('<pkg>', 'npm package name')
	.option('-q, --quiet', 'Suppress output')
	.option('-v, --verbose', 'Enable verbose mode')
	.action(async (pkg, options) => {
		try {
			const url: Promise<string | null> = fetchPkg(pkg, options)
			const res = await url
			if (res) {
				if (options.verbose) {
					console.info(`Repository URL for ${pkg}: ${res}`)
				} else {
					console.info(res)
				}
			} else {
				if (!options.quiet) {
					console.warn(`Repository URL for ${pkg} not found.`)
				}
			}
		} catch (error) {
			if (options.verbose) {
				console.error(`Error fetching data for ${pkg}: ${error.message}`)
			} else {
				console.error(`Error fetching data for ${pkg}`)
			}
		}
	})
	.usage(`${color.c('[options]')} <package>`)

export { program }
