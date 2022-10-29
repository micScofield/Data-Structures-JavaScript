let int1 = -15
let int2 = -90
let int3 = 500

console.log(((n) => {
    return Math.sign(n)*parseInt(n.toString().split('').reduce((acc, char) => char + acc, ''))
})(int2))