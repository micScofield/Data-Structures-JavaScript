/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]
*/

// t5 = 1 [2[5,6],3] => [1,2,5,6,3]

const { Tree, Node, t5 } = require('./tree')


var preorderTraversal = function(root) {
    let arr = []
    let temp = root
    let result = []
    let temp2 = null

    function helper(temp) {
        while (temp) {
            result.push(temp.data)
            arr.unshift(temp)
            temp = temp.left
        }
    
        while (arr.length !== 0) {
            temp2 = arr.shift()
            if (temp2.right) {
                helper(temp2.right)
            }
        }
        return result
    }

    return helper(temp)
};

console.log(preorderTraversal(t5.root)) // [1,2,5,6,3]