const { LinkedList, Node } = require('./linked-list')

const l = new LinkedList()
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

l.head = a
l.length++

a.next = b
l.length++

b.next = c
l.length++

c.next = a

console.log(isCircular(l)) // should return true as there is a loop present (c.next = b)

// if(!l.getlast()) console.log('Is circular')

function isCircular(list) {
    let slow = list.head
    let fast = list.head

    while(fast) {
        if (fast.next === null || fast.next.next === null) return false

        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true
    }
}