import eslint from 'eslint'
import test from 'tape'

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const { CLIEngine } = eslint

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'

  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})
