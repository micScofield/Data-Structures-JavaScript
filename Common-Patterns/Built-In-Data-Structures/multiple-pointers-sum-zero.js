// assumption is that we will receive a sorted array
function sumZero(arr) {
    // assign two pointers
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }

        if (sum < 0) left++ 
        if (sum > 0) right--
    }
    return null
}

console.log(sumZero([-3,-2,-1,1,5,6,7,10,22])) // should return [-1,1]