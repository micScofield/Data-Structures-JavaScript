// Failed approach to do this without recursion
/*
function flatten(arr){
    let res = []

    if (arr.length === 0) return 

    for (let i of arr) {
        if (!Array.isArray(i)) res.push(i)
        else {
            for (let j of i) {
                if (!Array.isArray(j)) res.push(j)
                else {
                    for (let k of j) {
                        if (!Array.isArray(k)) res.push(k)
                    }
                }
            }
        }
    }
    
    return res
}
*/

// arr.flat(<depth-of-recursion>) // this under the hood uses recursion itself
/*
function flatten(arr) {
    return arr.flat(10)
}
*/


// Flatten upto depth 1
/*
function flatten(arr) {
    return [].concat.apply([], arr) //flattens to depth 1
}
*/

// Flatten upto depth n
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), [])
}

// Alternate way to write above solution
function flatten(arr){
    var newArr = []
        for(var i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
                newArr = newArr.concat(flatten(arr[i]))
          } else {
                newArr.push(arr[i])
          }
    } 
    return newArr;
  }

console.log(flatten([1,2])) // [1,2]
console.log(flatten([[1]])) // [1]
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]]) )// [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
