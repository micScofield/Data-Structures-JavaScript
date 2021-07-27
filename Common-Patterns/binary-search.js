// must have a sorted array
function binarySearch(arr, elem) {
    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start + end) / 2)

    while (start <= end) {
        if (arr[middle] === elem) return middle

        if (elem < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,11,12,21,22,32], 21)) // 11
console.log(binarySearch([1,2,3,4,5,6,7,8,9,11,12,21,22,32], 33)) // -1
console.log(binarySearch([1,2,3,4,5,6,7,8,9,11,12,21,22,32], 1)) // 0

// Searches with O(log n)