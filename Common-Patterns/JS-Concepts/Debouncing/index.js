// debouncing
let count = 0
const getData = () => {
    console.log('Fetching...', ++count)
}

function debounce(fn, d) {
    let timer
    return function(...params) {
        let context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, params)
        }, d)
    }
}

const enhancedGetData = debounce(getData, 300)