class Node {
    constructor(data, next) {
        this.data = data
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertFirst(value) {
        const node = new Node(value)

        // If first node
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    size() { return this.length }

    getFirst() { return this.head }

    getlast() {
        // check if only one node present
        if (!this.head.next) return this.head
        
        let current = this.head

        for (let i=0; i<this.length; i++) {
            if (current.next === null) return current
            current = current.next
        }
        return current
    }

    clear() {
        this.head = null
        this.length = 0
    }

    removeFirst() {
        let newHead = this.head.next
        this.head = newHead
        this.length--
    } 

    removeLast() {
        // check if only one node present
        if (!this.head.next) this.head = null
        
        let current = this.head
        let prev = null

        for (let i=0; i<this.length; i++) {
            if (current.next === null) {
                prev.next = null
            }
            prev = current
            current = current.next
        }
        this.length--
    } 

    insertLast(val) {
        const node = new Node(val)

        if (!this.head) {
            this.head = node
            this.length++
            return
        }

        // check if only one node present
        if (!this.head.next) {
            this.head.next = node
            this.length++
            return
        }
        
        let current = this.head

        for (let i=0; i<this.length; i++) {
            if (current.next === null) current.next = node
            current = current.next
        }
        this.length++
    } 

    getAt(index) {
        if (index === 0) return this.head

        let current = this.head

        for (let i=0; i<=index; i++) {
            if (current.next === null) throw new Error('No node at the provided index!')
            if (i===index) return current
            current = current.next
        }
    } 

    removeAt(index) {
        if (index === 0) this.head === null

        /*
        let current = this.head
        let prev = null

        for (let i=0; i<=index; i++) {
            if (current.next === null) throw new Error('No node at the provided index!')
            if (i===index) {
                prev.next = current.next
                this.length--
                return
            }
            prev = current
            current = current.next
        }
        */

        // Code Reuse
        let previous = this.getAt(index-1) 
        if (!previous || !previous.next) throw new Error('No node at the provided index!')
        previous.next = previous.next.next
        this.length--
    } 

    insertAt(index, val) {
        const node = new Node(val)

        if (index === 0) this.head === node

        if (index === 1) {
            node.next = this.head.next
            this.head.next = node
        }

        /*
        let current = this.head
        let prev = null

        for (let i=0; i<=index; i++) {
            if (current.next === null) throw new Error('No node at the provided index!')
            if (i===index) {
                prev.next = node
                node.next = current
                this.length++
                return
            }
            prev = current
            current = current.next
        }
        */

        // Code Reuse
        let previous = this.getAt(index-1) 
        if (!previous || !previous.next) throw new Error('No node at the provided index!')
        node.next = previous.next
        previous.next = node
        this.length++
    } 

    traverse() {
        if (!this.head.next) return this.head
        
        let current = this.head

        for (let i=0; i<this.length; i++) {
            if (current.next === null) return current
            console.log(current)
            current = current.next
        }
    }

    forEach(fn) {
        let current = this.head

        for (let i=0; i<this.length; i++) {
            if (current === null) return

            fn(current, i)

            current = current.next
        }
    }

    *[Symbol.iterator]() {
        let node = this.head

        while(node) {
            yield node
            node = node.next
        }
    }
    // Allows us to iterate over the list using a for of syntax. For ex. for (let node of list) { node.data += 10 }
}

const list = new LinkedList()

// list.insertFirst(3)
// list.insertFirst(2)
// list.insertFirst(1)
list.insertLast(4)
list.insertLast(5)
list.insertLast(6)
// console.log(list.getAt(2))

// console.log(list.removeAt(2))

// console.log(list.insertAt(2, 10))

// list.forEach((node, index) => {
//     if (index > 0 && index %3 ===0) node.data += 10
// })

// for (let node of list) {
//     node.data += 10
// }

// console.log(list.traverse())

module.exports = { LinkedList, Node }