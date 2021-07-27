// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// s consists of lower case chars

function isValidPalindrome(s) {
    const innerHelper = (left=0, right=s.length-1, check=true) => {
        while (left < right) {
            if (s[left] === s[right]) {
                left++
                right--
            } else if (check) {
                return innerHelper(+left+1, right, false) || innerHelper(left, +right-1, false)
            } else return false
        }
        return true
    }

    return innerHelper()
}

console.log(isValidPalindrome("abc")) // false
console.log(isValidPalindrome("aba")) // true
console.log(isValidPalindrome("abca")) // true
console.log(isValidPalindrome("deeee")) // true
console.log(isValidPalindrome("eeuccee")) // true
console.log(isValidPalindrome("ebcbbececabbacecbbcbe")) // true
console.log(isValidPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")) // true