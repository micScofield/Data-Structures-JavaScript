/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

const { Tree, Node } = require('./tree')


var isBalanced = function(root) {
    let root1 = root.left
    let root2 = root.right

    return helper(root1, root2)

    function helper(root1, root2) {
        
    }
};

const tree = new Tree()
const node = new Node(3)
tree.root = node
tree.root.left = new Node(9)
tree.root.right = new Node(20)
tree.root.right.left = new Node(15)
tree.root.right.right = new Node(7)

console.log(isBalanced(tree.root))