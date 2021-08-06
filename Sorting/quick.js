function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function pivotHelper(arr, start=0, end=arr.length-1) {
    // we are choosing start as pivot
    let pivot = arr[start]
    let index = start

    for (let i = start+1; i <= end; i++) {
        if (pivot > arr[i]) {
            index++
            console.log(`Swapping ${arr[i]} with ${arr[index]}`)
            swap(arr, i, index)
            console.log(arr)
        }
    }

    // swap index with start
    console.log(`Swapping ${arr[index]} with ${arr[start]}`)
    swap(arr, index, start)
    console.log(arr)
    return index
}

function quick(arr, left=0, right=arr.length-1) {
    // base case is if !(left < right) we return arr
    if (left < right) {
        const pivotIndex = pivotHelper(arr, left, right)
        quick(arr, left, pivotIndex-1) // left part of pivot index
        quick(arr, pivotIndex+1, right) // right part of pivot index
    
    }
    return arr
}

console.log(quick([6,9,4,2,1,7]))