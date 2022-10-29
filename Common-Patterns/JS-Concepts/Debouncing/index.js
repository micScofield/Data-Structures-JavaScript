// debouncing
let count = 0
const getData = () => {
    console.log('Fetching...', ++count)
}

function debounce(fn, d) {
    let timer
    console.log(timer)
    return function() {
        let context = this
        let args = arguments
        console.log({context, args})
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, d)
    }
}

const enhancedGetData = debounce(getData, 300)