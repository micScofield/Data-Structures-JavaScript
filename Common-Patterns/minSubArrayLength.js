// eg: [1,2,1,2,3,4,3], 5 has two subarrays [2,1,2], [2,3]. Return with minimum length

/*
1. Have start and end points at beginning
2. Run a while loop, Start adding if total < givenSum, do end++
3. If total === givenSum, find length of the subarray and store
4. Also set start to next iteration and move end head to current start as well
5. If end head exceeds arr length, break.. this prevents infinite loop.
*/

function minSubArrayLength(arr, sum) {
    let start = 0
    let end = 0
    let total = 0
    let minLength = Infinity

    while (start < arr.length) {
        if (total > sum) {
            // remove arr[start] from total. Following if checks will determine whether total < sum or === sum
            total -= arr[start]
            start++
        }

        if (total === sum) {
            console.log(arr.slice(start, end))
            minLength = Math.min(minLength, end-start)
            total = 0
            start = start + 1
            end = start
        }

        if (total < sum && end <= arr.length) {
            total += arr[end]
            end++
        }

        if (end > arr.length) break
    }
    return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLength([1,2,3,2,4,3], 7)) // 2
console.log(minSubArrayLength([1,2,1,2,3,4,3], 5)) // 2
console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10], 55)) // 6
console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10], 95)) // 0


// Slight variation, instead of equal to given sum, find min length with greater than OR equal to
// eg: [1,4,16,22,5,7,8,9,10], 55 will return 5 [16,22,5,7,9] instead of 6.

function minSubArrayLength2(arr, sum) {
    let start = 0
    let end = 0
    let total = 0
    let minLength = Infinity

    while (start < arr.length) {
        if (total >= sum) {
            minLength = Math.min(minLength, end-start)
            total = 0
            start = start + 1
            end = start
        }

        if (total < sum && end <= arr.length) {
            total += arr[end]
            end++
        }

        if (end > arr.length) break
    }
    return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLength2([1,2,3,2,4,3], 7)) // 2
console.log(minSubArrayLength2([1,2,1,2,3,4,3], 5)) // 2
console.log(minSubArrayLength2([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubArrayLength2([1,4,16,22,5,7,8,9,10], 95)) // 0