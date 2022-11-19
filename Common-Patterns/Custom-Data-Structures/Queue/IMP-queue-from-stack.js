// Implement a queue using 2 stacks. Queue should implement enqueue, dequeue and peek methods
const { Stack } = require('../Stack/stack')

class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(el) {
        if (!this.stack1.peek()) {
            this.stack1.push(el)
        } else {
            // pop till there are elements in stack 1
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop())
            }
            this.stack1.push(el)
            while (this.stack2.peek()) {
                // push to stack1 there are elements in stack 2
                this.stack1.push(this.stack2.pop())
            }
        }
        console.log('Queue: ', this.stack1)
    }

    dequeue() {
        return this.stack1.pop()
    }

    peek() {
        return this.stack1.peek()
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.dequeue()) // 1
console.log(queue.peek()) // 2