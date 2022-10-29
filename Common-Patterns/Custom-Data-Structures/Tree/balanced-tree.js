/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

const { Tree, Node } = require('./tree');

// for each node, find out max depth, if depth difference is > 1, then it is not balanced
// else move forward with the traversal and look for next nodes left and right.

var isBalanced = function (root) {
    if (!root) return true
    let visited = []

    const traverse = (traverseRoot) => {
        visited.push(traverseRoot)
        if (traverseRoot.left) traverse(traverseRoot.left)
        if (traverseRoot.right) traverse(traverseRoot.right)
    }
    traverse(root)

    let temp = null
    while (visited.length !== 0) {
        temp = visited.shift()
        const depthDiff = helper(temp.left, temp.right)
        if (depthDiff > 1) return false
        if (temp.left) temp= temp.left 
        else temp = temp.right
    }

  function findMaxDepth(node) {
    if (!node) return 0;

    let counters = [0];
    let arr = [node, 's']; // s denotes end of level
    let temp = null;
    while (arr.length !== 0) {
      temp = arr.shift();

      if (temp === 's' && arr.length === 0) return counters.length;

      if (temp === 's') {
        counters.push(0); // new counter for new level
        arr.push('s'); // put it at end of array which will denote new level's end
      } else {
        counters[counters.length - 1]++;
        if (temp && temp.left) arr.push(temp.left);
        if (temp && temp.right) arr.push(temp.right);
      }
    }
    return counters.length;
  }

  function helper(root1, root2) {
    let depth1 = findMaxDepth(root1)
    let depth2 = findMaxDepth(root2)

    console.log({ root1, depth1, root2, depth2 })
    return Math.abs(depth1 - depth2)
  }
  return true
};

const tree = new Tree();
const node = new Node(3);
tree.root = node;
tree.root.left = new Node(9);
tree.root.right = new Node(20);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(7);

const tree2 = new Tree();
const node2 = new Node(1);
tree2.root = node2;
tree2.root.left = new Node(2);
tree2.root.right = new Node(2);
tree2.root.left.left = new Node(3);
tree2.root.left.left.left = new Node(4);
tree2.root.right.right = new Node(3);
tree2.root.right.right.right = new Node(4);

console.log(isBalanced(tree.root));
console.log(isBalanced(tree2.root));
