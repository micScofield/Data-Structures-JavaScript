// assumption is that we must receive sorted array

// Approach 1 with sets
/*
function countUnique(arr) {
    let set = new Set(arr)
    return set.size
}
*/

// Approach with multiple pointers

function countUnique(arr) {
    // edge case 1
    if (arr.length === 1) {
        return 1
    }

    // edge case 2
    if (arr.length === 2) {
        if (arr[0] === arr[1]) return 1
        else return 2
    }

    //edge case 3
    if (arr.length === 0) {
        return 0;
    }

    // main solution
    
    // 1. Here we are altering the given array.
    // 2. If array values and left and right dont match, we set the arr[left] to arr[right] and move the right head.
    // 3. If right head is at the end, we determine where the left head is ie. the index. And return index+1 as the answer
    
    let left = 0
    let right = 1

    while (left < right) {
        if (right === arr.length ) {
            console.log('right head traversed the whole array')
            return +left+1
        }

        if (arr[left] === arr[right]) {
            right++
            continue
        }

        if (arr[left] !== arr[right]) {
            arr[+left+1] = arr[right]
            left++
            right++
            continue
        }
    }
}
console.log(countUnique([-2,-2,1,1,1,2,3,4,4,4,6])) // should return 6

// Refactoring: Using for instead of while

function countUnique2(arr) {
    // add code for edge cases
    let i = 0

    for (let j=1; j<arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }

    return i+1
}

// without multiple pointers
function countUnique3(arr) {
    let freq = {}
    for (let i of arr) {
        freq[i] = ++freq[i] || 1
    }

    let count = 0
    for (let i in freq) {
        count++
    }

    return count
}