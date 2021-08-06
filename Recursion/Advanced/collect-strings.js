function collectStrings(obj) {
    let res = []

    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            res.push(obj[i])
        } else if(Object.prototype.toString.call(obj[i]) === '[object Object]') {
            res = res.concat(collectStrings(obj[i]))
        }
    }

    return res
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])