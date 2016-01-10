
highlight-with-codemirror
======================

Syntax highlighter based on CodeMirror.


Usage
-----

First, require CodeMirror and desired modes.

```js
const CodeMirror = require('codemirror/addon/runmode/runmode.node')
require('codemirror/mode/javascript/javascript')
```

Then, require `highlight-with-codemirror`.

```js
const highlight = require('highlight-with-codemirror')(CodeMirror)
```

Finally, call `highlight(source, modeSpec, options)`

```js
highlight('const value = 42', 'javascript')
// => '<span class="cm-keyword">const</span> <span class="cm-def">value</span> <span class="cm-operator">=</span> <span class="cm-number">42</span>'
```
