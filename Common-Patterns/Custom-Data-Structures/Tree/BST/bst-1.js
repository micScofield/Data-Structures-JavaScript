class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)

        if (!this.root) {
            this.root = node
            return this
        }

        let temp = this.root

        while (true) {
            if (value === temp.value) return false
            if (value < temp.value) {
                if (!temp.left) {
                    temp.left = node
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (!temp.right) {
                    temp.right = node
                    return this
                } else {
                    temp = temp.right
                }
            }
        }
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(0)
bst.insert(12)
console.log(bst)
bst.insert(-1)
bst.insert(4)
console.log(bst)
