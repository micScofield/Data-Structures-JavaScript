class Stack {
    constructor(data) {
        this.data = data || []
    }

    push(entry) {
        this.data.push(entry) // O(1)
    }

    pop() {
        return this.data.pop() // O(1)
    }

    getStack() {
        return this.data
    }

    peek() {
        return this.data[this.data.length-1] // O(1)
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.pop() // should return 2

module.exports = { Stack }