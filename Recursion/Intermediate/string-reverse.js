function reverse(str) {
    const len = str.length
    // base case 1
    if (len === 1) return str

    // calculation + recursive call with different input

    return str[len-1] + reverse(str.slice(0, len-1))
}

console.log(reverse('awesome'))// emosewa
console.log(reverse('s')) // s