function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    const freq1 = {}
    for (let i of arr1) {
        freq1[i] = ++freq1[i] || 1
    }

    const freq2 = {}
    for (let i of arr2) {
        freq2[i] = ++freq2[i] || 1
    }

    for (let i in freq1) {
        // every squared value must be present in arr2
        if (!(i**2 in freq2)) {
            return false
        }

        // count of valye in freq1 must be equal to its squared value's count
        if (freq1[i] !== freq2[i**2]) {
            return false
        }
    }

    return true
}

console.log(same([2,4,6,2], [4,16,4,36])) // should return true