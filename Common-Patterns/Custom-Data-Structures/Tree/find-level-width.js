const { t3, t4 } = require('./tree')

// Given root node, return an array where each element if the width of the tree. 
// For ex. in case of t3, [1,3,4]
// For ex. in case of t4, [1,3,2]

function findLevelWidth(root) {
    // Approach 1 (Mine) Didn't pass online test cases. Works in local.
    /*
    let visited = [root]

    let processed = null
    let standBy = []
    let temp = null
    let results = [1]

    while(visited.length !== 0) {
        processed = visited.shift()

        standBy.push(...processed.children)
        standBy.length > 0 && results.push(standBy.length)
        while (standBy.length !== 0) {
            temp = standBy.shift()
            visited.push(...temp.children)
            if (standBy.length === 0) results.push(visited.length)
        }
    }
    return results
    */

    // Approach 2 (which I couldn't think of) Ref V-114
    let counters = [0]
    let arr = [root, 's'] // s denotes end of level
    let temp = null

    while(arr.length !== 0) {
        temp = arr.shift()

        if (temp === 's' && arr.length === 0) return counters

        if (temp === 's') {
            counters.push(0) // new counter for new level
            arr.push('s') // put it at end of array which will denote new level's end
        } else {
            counters[counters.length-1]++
            arr.push(...temp.children)
        }
    }
    return counters
}

console.log(findLevelWidth(t3.root))