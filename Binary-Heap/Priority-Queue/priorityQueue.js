class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        // edge cases
        if (typeof priority !== 'number') throw new Error('Priority must be a valid number')
        if (priority < 0) throw new Error('Priority can\'t be a negative number')

        let node = new Node(val, priority)

        this.values.push(node)

        let index = this.values.length - 1
        let parentIndex 

        while(index > 0) {
            parentIndex = Math.floor((index-1) / 2)

            if (this.values[parentIndex].priority > this.values[index].priority) {
                let temp = this.values[parentIndex]
                this.values[parentIndex] = this.values[index]
                this.values[index] = temp
                
                index = parentIndex
            } else break
        }

        return this
    }

    dequeue() {
        // Step 1. Remove the root (save it in a variable so that we can return), put last value to root.
        // Step 2. Sink Down / Adjust the heap / Bubble Down

        let extractedMax = this.values[0]

        let lastVal = this.values.pop()

        const sinkDown = () => {
            let index = 0
            let leftChildIdx, rightChildIdx
            let swapWith = null
    
            console.log(this.values)
            // check larger children and swap until there are no more children to swap with
    
            while (true) {
                leftChildIdx = (2*index) + 1
                rightChildIdx = (2*index) + 2
    
                if (leftChildIdx < this.values.length) {
                    if (this.values[leftChildIdx].priority < this.values[index].priority) {
                        swapWith = leftChildIdx
                    }
                }
    
                if (rightChildIdx < this.values.length) {
                    if ((swapWith === null && this.values[rightChildIdx].priority < this.values[index].priority) || (swapWith !== null && this.values[rightChildIdx].priority < this.values[leftChildIdx].priority)) {
                        swapWith = rightChildIdx
                    }
                }
    
                if (!swapWith) break
    
                let temp = this.values[index]
                this.values[index] = this.values[swapWith]
                this.values[swapWith] = temp
    
                console.log(this.values)
    
                index = swapWith
                swapWith = null
            }
        }

        if (this.values.length > 0) {
            this.values[0] = lastVal
            sinkDown()
        }

        return { extractedMax, heap: this.values }
    }
}

let pq = new PriorityQueue()

console.log(pq.enqueue('A', 10))
console.log(pq.enqueue('B', 40))
console.log(pq.enqueue('C', 20))
console.log(pq.enqueue('C', 50))
console.log(pq.enqueue('C', 30))
console.log(pq.enqueue('C', 15))
console.log(pq.enqueue('new', 50)) // even though this node with priority 50 is pushed after an earlier one with '50' priority, there is no guarantee that who gets served first. We can add logic to that. Example: add another field to node - time: Date.now() and then when figuring out which one to swap with, we can check for same priority, who was inserted first.

console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())