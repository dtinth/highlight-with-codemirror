
import test from 'ava'

const CodeMirror = require('codemirror/addon/runmode/runmode.node')
require('codemirror/mode/javascript/javascript')

const highlight = require('./')(CodeMirror)

test('Basic highlighting', t => {
  const result = highlight('var x = 1\n\tvar y = 2', 'javascript')
  t.ok(result.indexOf('cm-keyword') > -1)
})
