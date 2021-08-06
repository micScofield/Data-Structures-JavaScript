function fibonacci(num) {
    // base case 1
    if (num <= 2) return 1

    // calculation + recursive call with different input
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(0)) // 1
console.log(fibonacci(5)) // 11235 => 5
console.log(fibonacci(10)) // 11235813213455 => 55

// Variation: Print fibonacci series upto n

function printFib(n) {
    let n1 = 0
    let n2 = 1
    let next = 0
    let series = []

    for (let i = 0; i < n; i++) {
        next = n1 + n2
        n1 = n2
        n2 = next

        series.push(n1)
    }
    return series
}

console.log(printFib(5))