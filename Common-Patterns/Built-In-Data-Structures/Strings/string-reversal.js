function reverse(str) {
    let returnStr = ''
    for (let i=str.length-1; i>=0; i--) {
        returnStr += str[i]
    }
    return returnStr
}

function reverse(str) {
    return str.split('').reduce((acc, character) => {
        return character + acc
    }, '')
}