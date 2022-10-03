/*
Given the roots of two binary trees, return true if both are same.
*/

const { Tree, Node } = require('./tree');

var areSame = function (root1, root2) {
  function traverse(node) {
    let current = null;
    let visited = [node];
    let result = [];

    while (visited.length !== 0) {
      current = visited.shift();
      if (current) {
        result.push(current.data);
        if (current && current.left) {
          visited.push(current.left);
        } 
        if (current && current.right) {
            visited.push(current.right)
        }
        if (current && current.right && !current.left) {
            visited.push(null)
        }
      } else {
        result.push(null)
      }
    }
    return result;
  }

  let tree1 = traverse(root1);
  let tree2 = traverse(root2);

  console.log(tree1);
  console.log(tree2);

  return JSON.stringify(tree1) === JSON.stringify(tree2);
};

let t1 = new Tree();
t1.root = new Node(1);
t1.root.left = new Node(2);
t1.root.right = new Node(1);

let t2 = new Tree();
t2.root = new Node(1);
t2.root.left = new Node(1);
t2.root.right = new Node(2);

console.log(areSame(t1.root, t2.root));
