'use strict'

const HTMLBuilder = require('./HTMLBuilder')

module.exports = CodeMirror => (code, modeSpec, options) => {
  const builder = new HTMLBuilder(CodeMirror, options)
  CodeMirror.runMode(code, modeSpec, builder.consume, options)
  return builder.getHTML()
}
