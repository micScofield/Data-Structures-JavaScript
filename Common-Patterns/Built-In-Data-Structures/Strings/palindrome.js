console.log(((str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length -1 -i]
    })
})('abba'))