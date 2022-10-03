const { LinkedList, Node } = require('./linked-list');

const list1 = new LinkedList();
list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(3);
list1.insertLast(3);
list1.insertLast(4);

console.log(removeDuplicates(list1.head)); // return list [1,2,3,4]

function removeDuplicates(head) {
    let temp = head

    while (temp && temp.next !== null) {
        if (temp.val === temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head
}