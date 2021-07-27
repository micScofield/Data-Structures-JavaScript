function power(base, exp) {
    // base case 1
    if (exp === 0) return 1

    // calculation + recursive call with different input
    return base * power(base, exp-1)
}

console.log(power(2,0)) // 1
console.log(power(2,5)) // 32