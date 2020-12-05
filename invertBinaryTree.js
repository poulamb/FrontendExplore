

// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }


/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
    if(node == null)
      return null;
    invert(node.left)
    invert(node.right)
    let a = node.left;
    node.left = node.right;
    node.right = a;
    return node
}