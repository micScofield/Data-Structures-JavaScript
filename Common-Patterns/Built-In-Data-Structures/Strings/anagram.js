// Approach 1
function anagram(str1, str2) {
    const freq1 = {}
    const freq2 = {}

    let formatted1 = str1.toLowerCase()
    let formatted2 = str2.toLowerCase()

    // char map
    for (let i of formatted1) {
        freq1[i] = ++freq1[i] || 1
    }

    for (let i of formatted2) {
        freq2[i] = ++freq2[i] || 1
    }

    // number of keys should be equal
    if((Object.keys(formatted1).length) !== (Object.keys(formatted2).length)) return false

    // check occurence
    for (let i of formatted1) {
        if (!(i in freq2)) return false
        if (!(freq1[i] === freq2[i])) return false
    }
    return true
}

const str1 = 'RAIL! SafeTY!'
const str2 = 'fairy tales!!'
console.log(anagram(str1, str2))


// Approach 2
function anagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')

    // removes special chars and spaces
    return str1.replace(/[^\w ]/g, '').toLowerCase().split('').sort().join('') === str2.replace(/[^\w ]/g, '').toLowerCase().split('').sort().join('')
}
