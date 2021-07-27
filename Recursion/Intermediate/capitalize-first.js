// Without recursion solution:
/*
function capitalizeFirst(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr
}
*/

function capitalizeFirst(arr) {
    let res = []
    if (arr.length === 0) return res

    return res.concat(arr[0][0].toUpperCase() + arr[0].slice(1), capitalizeFirst(arr.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']