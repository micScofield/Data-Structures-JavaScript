class QueueNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new QueueNode(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp // because we will entire node for checking whether it has a left/right/both or not
        // return temp.value;
    }
}

class StackNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new StackNode(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp;
        // return temp.value;
    }
}

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

    breadthFirstSearch() {
        let queue = new Queue()
        let visited = []

        if (!this.root) return undefined

        queue.enqueue(this.root)
        let deQueuedNode

        while(queue.size !== 0) {
            deQueuedNode = queue.dequeue()
            console.log(deQueuedNode)
            visited.push(deQueuedNode.value.value)

            if (deQueuedNode.value.left) {
                queue.enqueue(deQueuedNode.value.left)
            }
            if (deQueuedNode.value.right) {
                queue.enqueue(deQueuedNode.value.right)
            }
        }

        return visited
    }

    // Pre Order Travesal: A. With Recursion (Easy), B. Iterative- Using Stack
    preOrderTraversal() {
        if (!this.root) return undefined

        let visited = []
        let current = this.root

        function helper(node) {
            visited.push(node.value)

            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }

        helper(current)

        return visited
    }
}

let t = new BinarySearchTree()

t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)

console.log(t.breadthFirstSearch())