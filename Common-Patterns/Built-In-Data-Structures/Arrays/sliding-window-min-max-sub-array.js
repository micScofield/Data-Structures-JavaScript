// console.log(maxSubArray([1,2,5,2,8,1,2], 4)) // should be O(n) -> 17 (2+5+2+8)
console.log(minSubArray([1,2,5,2,8,1,2], 3)) // should be O(n) -> 8 (1+2+5)

function maxSubArray(arr, n) {
    let sum = 0

    for (let i=0; i<n; i++) {
        sum += arr[i]
    }

    let prevWindowSum = sum

    for (let i=n; i<arr.length; i++) {
        let currentWindowSum = 0
        // calculate new sum for a new window
        currentWindowSum = prevWindowSum + arr[i] - arr[i-n]

        prevWindowSum = currentWindowSum

        // compare with current sum and save max
        sum = Math.max(sum, currentWindowSum)
        console.log({sum, prevWindowSum, currentWindowSum})
    }

    return sum
}

function minSubArray(arr, n) {
    let sum = 0

    for (let i=0; i<n; i++) {
        sum += arr[i]
    }

    let prevWindowSum = sum

    for (let i=n; i<arr.length; i++) {
        let currentWindowSum = 0
        // calculate new sum for a new window
        currentWindowSum = prevWindowSum + arr[i] - arr[i-n]

        prevWindowSum = currentWindowSum

        // compare with current sum and save max
        sum = Math.min(sum, currentWindowSum)
        console.log({sum, prevWindowSum, currentWindowSum})
    }

    return sum
}