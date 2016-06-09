/**

Get an array of sections (heading + nodes) from a markdown doc.

Any nodes before the first heading are ignored.

Args:

- `root`: root `remark` node

Output: Array of objects in the format `{ heading: node, nodes: <Array>node }`

*/
module.exports = function findSections (root) {
  // find sections
  var sections = []
  var currentSection

  // construct sections from top-level nodes
  root.children.forEach(function (node) {
    const isSectionHeading = (node.type === 'heading')

    // ignore anything that comes before the first section
    if (!currentSection && !isSectionHeading) { return }

    // new section
    if (isSectionHeading) {
      var section = {
        heading: node,
        nodes: []
      }

      currentSection = section
      sections.push(section)
    } else {
      currentSection.nodes.push(node)
    }
  })

  return sections
}
