function selection(arr) {
    let min = arr[0]
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        // start at i+1 because beginning elems (i) are sorted as we move along
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                index = j
            }
        }
        // Swap min with arr[i]
        if (min !== arr[0]) {
            let temp = arr[i]
            arr[i] = min
            arr[index] = temp
        }

        // We now have smallest value at beginning arr[i]. set min to next array value 
        min = arr[i+1]
    }
    return arr
}

// Storing index of min value instead of value instead
function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        // We now have smallest value at beginning arr[i]. set min to next array value in each iteration, hence setting it to i. Otherwise we would initialize it to 0 outside the loop and increment it inside as in above example
        let min = i

        // we can thus start inner at i+1
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        // Swap min with arr[i]
        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

console.log(selection([19,44,38,5,47,15])) 
console.log(selection([1,19,44,38,5,47,15])) 