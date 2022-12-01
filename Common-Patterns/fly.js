const obj = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: {
            data: 6,
            next: null,
          },
        },
      },
    },
  },
};

function printLastThree(obj) {
    let right = obj
    let left = obj
    let result = []

    for (let i=0; i<2; i++) {
        right = right?.next
    }

    if (!right) {
        return `length less than 3`
    }

    right = right.next

    while (right) {
        right = right.next
        left = left.next
    }

    while (left) {
        result.push(left.data)
        left = left.next
    }
    return result
}

console.log(printLastThree(obj)) // [4,5,6]

function printLastThreeRecursive(obj) {
    let result = []

    function getData(obj) {
        const { data, next } = obj
        result.push(data)
        if (next) {
            getData(next)
        }
    }

    getData(obj)
    return result.slice(result.length-3)
}

console.log(printLastThreeRecursive(obj)) // [4,5,6]