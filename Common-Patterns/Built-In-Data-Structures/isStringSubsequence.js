// Multiple Pointers - isSubsequence

function isSubsequence(str1, str2) {
    let i = 0
    for (let j=0; j<str2.length; j++) {
        console.log(j)
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
    }
    return false
}

console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'acb')) // false
console.log(isSubsequence('abc', 'acbc')) // true
console.log(isSubsequence('hello', 'helloworld')) // true
