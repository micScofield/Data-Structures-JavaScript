function stringifyNumbers(obj) {
    let newObj = {}
    for (let i in obj) {
        if (typeof(obj[i]) === 'number') {
            // obj[i] = obj[i].toString()
            newObj[i] = obj[i].toString()
        } else if (Object.prototype.toString.call(obj[i]) === '[object Object]') {
            newObj[i] = stringifyNumbers(obj[i])
        } else {
            newObj[i] = obj[i]
        }
    }
    return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
/*
{
  num: '1',
  test: [],
  data: { val: '4', info: { isRight: true, random: '66' } }
}
*/