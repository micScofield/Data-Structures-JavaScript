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
console.log(insertion([1,2,3,7,10,4])) // Best Case O(n)
console.log(insertion([19,44,38,5,47,15])) // general case O(nˆ2)

// In addition, lets have a look at the insertion in a sorted array:-
// Binary search plus insert O(log n)

function insertionSorted(arr, val) {
    var i;
    for (i = arr.length - 1; (i >= 0 && arr[i] > val); i--)
        arr[i + 1] = arr[i];

    arr[i + 1] = val;

    return arr;
}

console.log(insertionSorted([10,20,30,35,40,50,55], 26))
