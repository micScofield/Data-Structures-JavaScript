function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log(arr)
        if (arr[i] < arr[i-1]) {
            console.log(arr[i], arr[i-1])
            let misplaced = i
            let j = i-1
            while (j >= 0) {
                if (arr[j] > arr[misplaced]) {
                    console.log('swapping')
                    // swap
                    let temp = arr[misplaced]
                    arr[misplaced] = arr[j]
                    arr[j] = temp
                    j--
                    misplaced--
                } else break
            }
        }
    }
    return arr
}
console.log(insertion([12,1,2,3,7,10])) 
console.log(insertion([1,2,3,7,10,4])) 
// best results on above two when we do insertion in a sorted array. This gives O(n) complexity
console.log(insertion([19,44,38,5,47,15])) // general case O(nˆ2)
