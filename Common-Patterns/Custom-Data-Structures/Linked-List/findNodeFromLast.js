const { LinkedList, Node } = require('./linked-list')

const l = new LinkedList()
l.insertLast('A')
l.insertLast('B')
l.insertLast('C')
l.insertLast('D')
l.insertLast('E')
l.insertLast('F')

console.log(findSpacesFromLast(l, 2)) // should return C as there 3 spaces away from the tail node

function findSpacesFromLast(list, n) {
    let slow = list.head
    let fast = list.head

    // taking fast pointer ahead by n spaces. Now when fast reaches the tail, we can return slow
    function fastForward(node, n) {
        while(node && n!==0) {
            node = node.next
            n--
        }
        return node
    }

    let fastsNewPosition = fastForward(fast, n)

    while(fastsNewPosition) {
        if (fastsNewPosition.next === null) return slow

        slow = slow.next
        fastsNewPosition = fastsNewPosition.next
    }
}