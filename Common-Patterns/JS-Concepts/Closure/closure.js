var a = 1

function f1() {
    var a = 10 // if I use let here, ie. block scoped variable, this won't modify outside a's value and log on line15 will say 100 instead of 10
    return function() {
        console.log(a)
    }
}
console.log(a) // 1
a = 100
console.log(a) // 100
let toBeCalledLater = f1()

toBeCalledLater() // 10
console.log(a) // 10


// Counter function
const counter = () => {
    let count = 1
    return () => count++
}
let getId = counter()