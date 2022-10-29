function sortedArrayToBST(arr) {
    class Node {
        constructor(data) {
            this.left = null
            this.right = null
            this.data = data
        }
    }

    if(!arr.length) return null

    let middleIndex = Math.floor(arr.length/2)
    let node = new Node(arr[middleIndex])

    node.left = sortedArrayToBST(arr.slice(0, middleIndex))
    node.right = sortedArrayToBST(arr.slice(middleIndex+1))

    return node
}

let arr = [-10, 0, 3, 5, 9]
console.log(sortedArrayToBST(arr))