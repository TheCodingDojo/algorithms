// DFS Inorder: (Left, Parent, Right)
function bstToArrayInorder(bst, node = bst.root, vals = []) {
  if (node) {
    bstToArrayInorder(node.left, vals);
    vals.push(node.data);
    bstToArrayInorder(node.right, vals);
  }
  return vals;
}

module.exports = bstToArrayInorder;
