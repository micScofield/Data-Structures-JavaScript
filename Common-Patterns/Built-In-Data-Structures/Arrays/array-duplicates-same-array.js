console.log(removeDuplicates([1,2,2,3,4,4]))

function removeDuplicates(arr) {
    for (let i in arr) {
        if (arr[+i+1] === arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr
}

let test = [1,2,3]
test.splice(1, 1)
// console.log(test)