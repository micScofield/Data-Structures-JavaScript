/*
Given the root of a tree, return true if it is symmetric (mirror).
*/

const { Tree, Node } = require('./tree')


var isSymmetric = function(root) {
    let root1 = root.left
    let root2 = root.right

    if (!root1 && root2) return false
    if (root1 && !root2) return false
    if (!root1 && !root2) return true

    return isMirror(root1, root2)

    function isMirror(root1, root2) {
        if (!root1 && root2) return false
        if (root1 && !root2) return false
        if (!root1 && !root2) return true
        if (root1?.data !== root2?.data) return false

        if (root1.left?.data !== root2.right?.data || root1.right?.data !== root2.left?.data) {
            return false
        }

        return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
    }
};

let t1 = new Tree()
t1.root = new Node(1)
t1.root.left = new Node(2)
t1.root.left.left = new Node(3)
t1.root.left.right = new Node(4)
t1.root.right = new Node(2)
t1.root.right.left = new Node(4)
t1.root.right.right = new Node(3)

console.log(isSymmetric(t1.root))