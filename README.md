# md-sections

Get an array of sections (heading + nodes) from a markdown doc, using [`remark`](https://github.com/wooorm/remark).

Any nodes before the first heading are ignored.

## Usage

**Args:**

- `root`: root `remark` node

**Output:** Array of objects in the format `{ heading: node, nodes: <Array>node }`

### Example

```js
var fs = require('fs')
var remark = require('remark')
var mdSections = require('md-sections')

var root = remark.parse(fs.readFileSync('./my-markdown-file.md'))
var sections = mdSections(root)
```

## License

MIT
