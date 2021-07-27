// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
    const len = arr.length
    if (len === 0) return false

    return cb(arr[0]) || someRecursive(arr.slice(1), cb)
}

// without recursion

// function someRecursive(arr, cb) {
//     for (let i of arr) {
//         if(cb(i)) return true
//     }
//     return false
// }

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false