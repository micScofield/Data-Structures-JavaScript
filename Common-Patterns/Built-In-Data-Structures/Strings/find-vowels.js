// Approach 1: Iterative
function vowels(str) {
    let vowels = ['a','e','i','o','u']
    let count = 0
    for (let i of str) {
        if (vowels.includes(i)) count++
    }
    return count
}

console.log(vowels('Why'))

// Approach 2: Regex

function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}