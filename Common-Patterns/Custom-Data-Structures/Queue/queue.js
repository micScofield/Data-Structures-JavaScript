class Queue {
    constructor(queue) {
        this.queue = queue || []
    }

    enqueue(entry) {
        this.queue.unshift(entry) // O(n)
        return this.queue.length
    }

    dequeue() {
        const poppedEl = this.queue.pop()
        return poppedEl
    }

    getQueue() {
        return this.queue
    }

    peek() {
        return this.queue[this.queue.length-1]
    }
}

const queue = new Queue()

console.log(queue.enqueue('A'))
console.log(queue.enqueue('B'))
console.log(queue.dequeue()) // should return A
console.log(queue.getQueue()) // should return ['B']

module.exports = { Queue }