function maxSubArray(arr, n) {
    let sum = 0
    let total = 0

    // calculate sum upto n ie. create a window
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }

    // start another loop with index n
    for (let i = n; i < arr.length; i++) {
        // calculate =  prevSum + nextArrayValue - previousWindowFirstEl ie. i-n

        total = sum + arr[i] - arr[i-n]

        sum = Math.max(sum, total)
    }

    return sum
}

console.log(maxSubArray([1,2,5,2,8,1,2], 4)) // gives result in O(n)

// Naive approach is to use a for loop inside another, where inner loop runs n times and outer one runs length - n + 1 times. That results in quadtratic time complexity.