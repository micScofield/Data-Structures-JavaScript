const { LinkedList } = require('./linked-list')

const l = new LinkedList()
// l.insertFirst(1)
// l.insertFirst(2)
// l.insertFirst(3)
// l.insertFirst(4)
// l.insertFirst(5)
// l.insertFirst(6)

l.insertLast(1)
l.insertLast(2)
l.insertLast(3)
l.insertLast(4)
l.insertLast(5)
l.insertLast(6)

console.log(midpoint(l)) // should return 3

function midpoint(list) {
    let slow = list.head
    let fast = list.head
    while (fast) {
        if (fast.next === null || fast.next.next === null ) return slow
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}