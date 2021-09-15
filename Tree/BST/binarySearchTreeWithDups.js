class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
        this.count = 0
    }
}

class BinarySearchTreeWithDuplicates {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new Node(value)

        if (!this.root) {
            node.count++
            this.root = node
            return this
        }

        let temp = this.root

        while (true) {
            if (value === temp.value) {
                temp.count++
                return this
            }

            if (value < temp.value) {
                if (!temp.left) {
                    node.count++
                    temp.left = node
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (!temp.right) {
                    node.count++
                    temp.right = node
                    return this
                } else {
                    temp = temp.right
                }
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false
        }

        let temp = this.root
        let found = false

        while (temp && !found) {
            if (value === temp.value) return temp
            if (value < temp.value) {
                temp = temp.left
            } else if(value > temp.value) {
                temp = temp.right
            } else {
                found = true
            }
        }

        if (!found) return undefined
        return temp
    }

    contains(value) {
        if (!this.root) {
            return false
        }

        let temp = this.root
        let found = false

        while (temp && !found) {
            if (value < temp.value) {
                temp = temp.left
            } else if(value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }

        return false
    }
}

let t = new BinarySearchTreeWithDuplicates()
t.insert(10)
t.insert(5)
t.insert(15)
t.insert(20)
t.insert(13)
t.insert(10)
t.insert(7)
t.insert(7)