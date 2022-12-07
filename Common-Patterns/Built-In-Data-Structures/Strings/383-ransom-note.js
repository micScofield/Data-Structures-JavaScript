/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

const canConstruct = function(ransomNote, magazine) {
    // with 2 maps
    /*
    if (ransomNote.length > magazine.length) return false

    if (ransomNote.length === magazine.length) {
        if (ransomNote === magazine) return true
    }

    let freq1 = {}
    let freq2 = {}

    for (let i in ransomNote) {
        freq1[ransomNote[i]] = ++freq1[ransomNote[i]] || 1
    }

    for (let i in magazine) {
        freq2[magazine[i]] = ++freq2[magazine[i]] || 1
    }

    console.log({freq1, freq2})

    for (let i in freq1) {
        if (!(i in freq2)) return false
        if (freq1[i] > freq2[i]) return false
    }
    return true 
    */

    // with 1 map
    if (ransomNote.length > magazine.length) return false

    if (ransomNote.length === magazine.length) {
        if (ransomNote === magazine) return true
    }

    let freq1 = {}

    for (let i in magazine) {
        freq1[magazine[i]] = ++freq1[magazine[i]] || 1
    }

    for (let i of ransomNote) {
        if (!(i in freq1)) return false
        if (freq1[i] < 1) return false
        freq1[i]--
    }
    return true
};

console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'baa')) // true
console.log(canConstruct('aab', 'baa')) // true