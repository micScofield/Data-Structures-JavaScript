function longestSubstr(str) {
    if (str.length === 0) return 0

    // store looped chars inside an string
    let s = ''

    let longest = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        // check if character already exists in the array
        if (s.includes(char)) {
            console.log(char, 'exists')       

            const index2 = s.indexOf(char)
            s = s.slice(+index2+1)

            console.log('sliced string', s)
            console.log('longest substring yet: ', longest)
        }

        s += char
        console.log('Current String', s)

        // set longest based on current array's length
        longest = Math.max(longest, s.length)
    }

    return longest
}

console.log(longestSubstr('thisishowwedoit')) // should return 6