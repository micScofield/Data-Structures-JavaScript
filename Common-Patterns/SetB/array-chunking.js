// Approach 1
function chunk(arr, chunkSize) {
    let chunkedArr = [], lastEl
    for (let i=0; i<arr.length; i++) {
        // lastEl = chunkedArr.pop() // this won't give us the reference to the element so step 11 won't manipulate this chunkedArr. Hence using different approach to fetch last element.
        lastEl = chunkedArr[chunkedArr.length - 1]

        if(!lastEl || lastEl.length === chunkSize) {
            chunkedArr.push([arr[i]])
        } else {
            lastEl.push(arr[i])
        }
    }
    return chunkedArr
}

console.log(chunk([1,2,3,4,5], 4))

// Approach 2: Using SLICE
function chunk(arr, chunkSize) {
    let chunkedArr = []
    let index = 0

    while (index < arr.length) {
        chunkedArr.push(arr.slice(index, index+chunkSize))
        index += chunkSize
    }
    return chunkedArr
}