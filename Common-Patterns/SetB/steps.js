// Approach 1
function printSteps(n) {
    for (let i=0; i<n; i++) {
        let str = ''
        for (let j=0; j<n; j++) {
            if (j <= i) {
                str += '#'
            } else str += '_'
        }
        console.log(str)
    }
}

printSteps(4) // '# ' \n '##'

// Approach 2. Recursion
function printSteps(n, row=0, str='') {
    if (n === row) return;

    // when we are done with a row
    if (n === str.length) {
        console.log(str)
        return printSteps(n, row+1)
    }

    // when in same row, build the string
    if (str.length <= row) str += '#'
    else str += '_'

    printSteps(n, row, str)
}