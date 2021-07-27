function hasAveragePair(arr, n) {
    let left = 0
    let right = arr.length - 1
    let avg

    while(left <= right) {
        avg = (arr[left] + arr[right]) / 2

        if (avg === n) return true 

        avg > n ? right-- : left++
    }
    return false
}

console.log(hasAveragePair([1,3,3,5,6,7,10,12,19], 8))