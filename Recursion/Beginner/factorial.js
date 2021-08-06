function factorial(num) {
    // base case 1
    if (num === 0) return 1

    // calculation + recursive call with different input
    return num * factorial(num-1)
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120