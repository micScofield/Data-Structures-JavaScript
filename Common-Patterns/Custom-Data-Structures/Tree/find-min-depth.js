const { Tree, Node } = require('./tree');

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

function minDepth(root) {
  if (!root) return 0;

  let visited = [root, 's'];
  let processed = null;
  let depth = 1;

  while (visited.length !== 0) {
    processed = visited.shift();

    if (processed === 's') {
      depth++;
    } else {
      if (processed.left) visited.push(processed.left);
      if (processed.right) visited.push(processed.right);
      if (!processed.left && !processed.right) {
        return depth;
      }
      if (visited[visited.length - 1] !== 's' && visited[0] === 's') visited.push('s');
    }
  }
  return depth;
}

const tree = new Tree();
const node = new Node(2);
tree.root = node;
tree.root.right = new Node(3);
tree.root.right.right = new Node(4);
tree.root.right.right.right = new Node(5);
tree.root.right.right.right.right = new Node(6);

const tree2 = new Tree();
const node2 = new Node(3);
tree2.root = node2;
tree2.root.left = new Node(9);
tree2.root.right = new Node(20);
tree2.root.right.left = new Node(15);
tree2.root.right.right = new Node(7);

const tree3 = new Tree();
const node3 = new Node(1);
tree3.root = node3;
tree3.root.left = new Node(2);
tree3.root.right = new Node(3);
tree3.root.left.left = new Node(4);
tree3.root.left.right = new Node(5);

console.log(minDepth(tree.root)); // should return 5
console.log(minDepth(tree2.root)); // should return 2
console.log(minDepth(tree3.root)); // should return 2
