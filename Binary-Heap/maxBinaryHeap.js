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
}

let b = new MaxBinaryHeap()

console.log(b.insert(18))
console.log(b.insert(12))
console.log(b.insert(27))
console.log(b.insert(33))
console.log(b.insert(41))
console.log(b.insert(39))
console.log(b.insert(17))