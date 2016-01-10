'use strict'

const escapeHTML = require('escape-html')

// This code is copypasta’d and adapted for Node from runmode.js.
//
function HTMLBuilder (CodeMirror, options) {
  const buffer = [ ]
  const defaultTabSize = CodeMirror.defaults && CodeMirror.defaults.tabSize || 4
  const tabSize = (options && options.tabSize) || defaultTabSize
  let col = 0
  return { consume, getHTML }
  function consume (text, style) {
    if (text == '\n') {
      buffer.push(text)
      col = 0
      return
    }
    let content = ''
    for (let pos = 0 ;;) {
      const idx = text.indexOf('\t', pos)
      if (idx == -1) {
        content += text.slice(pos)
        col += text.length - pos
        break
      } else {
        col += idx - pos
        content += text.slice(pos, idx)
        const size = tabSize - col % tabSize
        col += size
        for (var i = 0; i < size; ++i) content += ' '
        pos = idx + 1
      }
    }
    const escapedText = escapeHTML(content)
    if (style) {
      const classNames = 'cm-' + style.replace(/ +/g, ' cm-');
      buffer.push(`<span class="${classNames}">${escapedText}</span>`)
    } else {
      buffer.push(escapedText)
    }
  }
  function getHTML () {
    return buffer.join('')
  }
}

module.exports = HTMLBuilder
