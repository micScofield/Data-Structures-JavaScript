let a = 'abcccd'
let b = 'ab11111d'

// Easy to Read
function mostOccuredChar(s) {
    let map = new Map()

    for (let i of s) {
        map.set(i, (map.get(i) + 1) || 1)
    }

    return [...map.entries()].sort((a, b) => b[1] - a[1])[0][0]
}

// Other Approaches

console.log(((str) => {
    let obj = {}
    for (let char of str) {
        obj[char] = ++obj[char] || 1
    }

    // Approach 1 (Using Object methods)
    /*
    const maxValue = Math.max(...Object.values(obj))

    return Object.keys(obj).find(key => obj[key] === maxValue)
    */

    // Approach two (using map)
    const map = new Map()
    let max = 0

    for (let i in obj) {
        if (obj[i] > max) {
            map.set(i, obj[i])
            max = obj[i]
        }
    }

    // We can only use following method to return the right answer because we know we only have one key:value pair in our map. That's why approach 1 is more simpler to understand
    let result
    map.forEach((value, key, map) => {
        result = key // can't return from forEach. Hence, storing the key in other variable
    })
    return result

    // return [...map].entries().next().value[1][0] // if you don't wanna use forEach

    // return map.keys().next().value // if you don't wanna use forEach & entries method

})(a))