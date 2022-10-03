/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.
*/

// t5 = 1 [2[5,6],3]

const { Tree, Node, t5 } = require('./tree')


var postorderTraversal = function(root) {

    if (!root) return []
    let current = root
    let visited = []

    helper(current)

    function helper(root) {
        if (root.left) helper(root.left)
        if (root.right) helper(root.right)
        visited.push(root.data)
    }
    return visited
};

const tree = new Tree()
const node = new Node(1)
tree.root = node
tree.root.right = new Node(2)
tree.root.right.left = new Node(3)
tree.root.right.left.right = new Node(4)
tree.root.right.left.right.left = new Node(5)

console.log(postorderTraversal(t5.root)) // [5,6,2,3,1]
console.log(postorderTraversal(tree.root)) // [5,4,3,2,1]