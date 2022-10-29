// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

function wordPattern(pattern, s) {
    let map = new Map()
    const string = s.split(' ')

    if (string.length !== pattern.length) return false

    let existing
    for (let i in pattern) {
        existing = map.get(pattern[i])
        if (existing) {
            if (existing !== string[i]) return false
        }
        map.set(pattern[i], string[i])
    }
    return [...map.keys()].length !== Array.from(new Set([...map.values()])).length ? false : true
}

console.log(wordPattern('abba', 'cat dog dog cat')) // true
console.log(wordPattern('aaa', 'aa aa aa aa')) // false