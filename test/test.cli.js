import cli from '../src/cli.js'

describe('CLI', () => {
  test('should print help message', async () => {
    const output = await cli(['--help'])
    expect(output).toContain('Usage:')
  })
})