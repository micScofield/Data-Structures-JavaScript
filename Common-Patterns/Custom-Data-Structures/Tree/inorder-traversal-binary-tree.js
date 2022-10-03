/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
*/

// t5 = 1 [2[5,6],3]

const { Tree, Node, t5 } = require('./tree')


var inorderTraversal = function(root) {
    let arr = []
    let temp = null
    let result = []

    function helper(root) {
        while (root) {
            arr.unshift(root)
            root = root.left
        }
    
        while (arr.length !== 0) {
            temp = arr.shift()
            result.push(temp.data)
            if (temp.right) {
                helper(temp.right)
            }
        }
        return result
    }
    return helper(root)
};

let tree = new Tree()
tree.root = new Node(1)

console.log(inorderTraversal(t5.root)) // [5,2,6,1,3]
// console.log(inorderTraversal(tree.root))