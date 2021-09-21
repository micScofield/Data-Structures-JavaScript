class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        // Step 1. Push to values
        // Step 2. Bubble up and put it in right place

        this.values.push(val)

        let index = this.values.length - 1
        let parentIndex 

        while(index > 0) {
            parentIndex = Math.floor((index-1) / 2)

            if (this.values[parentIndex] < this.values[index]) {
                let temp = this.values[parentIndex]
                this.values[parentIndex] = this.values[index]
                this.values[index] = temp
                
                index = parentIndex
            } else break
        }

        return this
    }

    extractMax() {
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
                    if (this.values[leftChildIdx] > this.values[index]) {
                        swapWith = leftChildIdx
                    }
                }
    
                if (rightChildIdx < this.values.length) {
                    if ((swapWith === null && this.values[rightChildIdx] > this.values[index]) || (swapWith !== null && this.values[rightChildIdx] > this.values[leftChildIdx])) {
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

let b = new MaxBinaryHeap()

console.log(b.insert(18))
console.log(b.insert(12))
console.log(b.insert(27))
console.log(b.insert(33))
console.log(b.insert(41))
console.log(b.insert(39))
console.log(b.insert(17))

console.log(b.extractMax())