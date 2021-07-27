// without recursion
function capitalizeWord(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}

function capitalizeWord(arr) {
    let res = []
    if (arr.length === 0) return arr
    return res.concat(arr[0].toUpperCase(), capitalizeWord(arr.slice(1)))
}

console.log(capitalizeWord(['I', 'am', 'learning', 'recursion']))