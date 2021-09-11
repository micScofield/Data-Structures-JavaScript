class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let node = new Node(val)

        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        
        this.length += 1
        return this
    }

    pop() {
        if (!this.head) return undefined

        let toBeRemoved = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = toBeRemoved.prev
            this.tail.next = null
    
            // clear popped items prev as well just for better practice
            toBeRemoved.prev = null
        }

        this.length -= 1
        return toBeRemoved
    }

    shift() {
        if (this.length === 0) return undefined

        let toBeRemoved = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let newHead = toBeRemoved.next
            newHead.prev = null
            this.head = newHead

            toBeRemoved.next = null // cleanup for better practice
        }

        this.length -= 1
        return toBeRemoved
    }

    unshift(val) {
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length += 1
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let count, current
        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, value) {
        let node = this.get(index)

        if (!node) return false

        node.val = value
        return true
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false

        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)

        let newNode = new Node(val)

        let prevNode = this.get(index-1)

        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode

        newNode.next = nextNode
        nextNode.prev = newNode
        
        this.length += 1
        return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false

        if (index === 0) return this.shift()

        if (index === this.length - 1) return this.pop()

        let toBeRemoved = this.get(index)

        let nextNode = toBeRemoved.next
        let prevNode = toBeRemoved.prev

        prevNode.next = nextNode
        nextNode.prev = prevNode

        // clear out next and prev of the toBeRemoved node for better practice
        toBeRemoved.next = null
        toBeRemoved.prev = null

        this.length -= 1
        return toBeRemoved
    }

    reverse() {
        if (!this.head) return false

        if (this.length === 1) return this

        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let nextNode = null;
        let prevNode = null;

        for(let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }

    // below method is just for testing purposes. 
    print() {
        let arr = []
        let cur = this.head
        while (cur) {
            arr.push(cur.val)
            cur = cur.next
        }
        console.log(arr)
    }
}

let a = new DoublyLinkedList()

console.log(a.push(1))
console.log(a.push(2))
console.log(a.push(3)) // [1,2,3]
console.log(a.pop()) // [1,2]
console.log(a.unshift(3)) // [3,1,2]
console.log(a.shift()) // [1,2]
console.log(a.push(3))
console.log(a.get(1))
console.log(a.push(5)) // [1,2,3,5]
console.log(a.set(3, 4)) // [1,2,3,4]
console.log(a.insert(3, 5)) // [1,2,3,5,4]
console.log(a.remove(3)) // [1,2,3,4]
a.print()
console.log(a.reverse()) // [4,3,2,1]
a.print()