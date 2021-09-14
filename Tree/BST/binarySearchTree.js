class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new Node(value)

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

    // Approach 1:

    // find(value) {
    //     if (!this.root) {
    //         return false
    //     }

    //     let temp = this.root

    //     while (true) {
    //         if (value === temp.value) return temp
    //         if (value < temp.value) {
    //             if (!temp.left) {
    //                 return undefined
    //             } else {
    //                 temp = temp.left
    //             }
    //         } else {
    //             if (!temp.right) {
    //                 return undefined
    //             } else {
    //                 temp = temp.right
    //             }
    //         }
    //     }
    // }

    // Approach 2:

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

let t = new BinarySearchTree()
t.insert(10)
t.insert(5)
t.insert(15)
t.insert(20)
t.insert(13)

t.find(15)
t.contains(7)
t.contains(20)

// console.log(t.insert(10))
// console.log(t.insert(5))
// console.log(t.insert(15))
// console.log(t.insert(20))
// console.log(t.insert(13))

// console.log(t.find(15))
// console.log(t.contains(7))
// console.log(t.contains(20))