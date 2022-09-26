pyramid(3) // '  #  ' \n ' ### ' \n '#####'
// Approach 1: Iterative
function pyramid(n) {
    let center = Math.floor((n*2-1)/2)
    for (let i=0; i<n; i++) {
        let str = ''
        for (let j=0; j<(n*2-1); j++) {
            if (j>= center-i && j <= center+i) str += '#' // finds range of indexes in the column to put #
            else str += '_'
        }
        console.log(str)
    }
}

// Approach 2: Recursion
function pyramid(level, row=0, str='') {
    if (row === level) return

    if ((level*2-1) === str.length) {
        console.log(str)
        return pyramid(level, row+1)
    }

    let center = Math.floor((level*2-1)/2)

    if (center - row <= str.length && center + row >= str.length) str += '#'
    else str += '_'

    pyramid(level, row, str)
}