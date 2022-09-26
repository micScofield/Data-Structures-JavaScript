console.log(((str) => {
    // return str[0].toUpperCase() + str.substring(1, str.length)
    return str[0].toUpperCase() + str.slice(1)
})('a lazy fox.'))