function productOfArray(arr) {
    // base case 1
    if (arr.length === 0) return 1

    // calculation + recursive call with different input
    return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([])) // 1
console.log(productOfArray([0])) // 0
console.log(productOfArray([1,2,3])) // 6