// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(str){
    const len = str.length
    if (len === 1) return true
    if (len === 2) return str[0] === str[1]

    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))

    return false
}

console.log(isPalindrome('tacocat'))


// without recursion

// function isPalindrome(str){
//     const len = str.length
//     if (len === 1) return true

//     let s = ''
//     for (let i = len-1; i >= 0; i--) {
//         s += str[i]
//     }
//     return str === s
// }

// console.log(isPalindrome('tacocat'))