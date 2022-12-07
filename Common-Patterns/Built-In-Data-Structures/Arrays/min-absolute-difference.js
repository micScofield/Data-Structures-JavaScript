/*
Given an unsorted array, find the minimum difference between any pair in the given array.

Examples :

Input: {1, 5, 3, 19, 18, 25}
Output: 1
Explanation: Minimum difference is between 18 and 19
*/

function minAbsDifference(arr) {
    let diff = Infinity
    let pair = []

    // Naive O(nˆ2)

    /*
    for (let i=0; i<arr.length; i++) {
        for (let j=1; j<arr.length; j++) {
            if (i !== j) {
                diff = Math.min(diff, Math.abs(arr[i]-arr[j]))
            }
        }
    }
    */

    // Advanced O(n)
    
    const sortedArr = arr.sort((a, b) => a-b)
    let temp = Infinity

    for (let i in sortedArr) {
        if (sortedArr[i] && sortedArr[i-1]) {
            temp = Math.min(temp, Math.abs(sortedArr[i] - sortedArr[i-1]))
            if (temp < diff) {
                diff = temp
                pair = [arr[i], arr[i-1]]
            }
        }
    }

    return {diff, pair}
}

console.log(minAbsDifference([1,5,3,19,18,25])) // {diff: 1, pair: [19,18]}