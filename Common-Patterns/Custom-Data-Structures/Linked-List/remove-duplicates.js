const { LinkedList, Node } = require('./linked-list');

const list1 = new LinkedList();
list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(2);
list1.insertLast(3);

console.log(removeDuplicates2(list1.head)); // return list [1,2,3]

function removeDuplicates2(head) {
    let current = head
    let prev

    while (current) {
      if (current.data === current.next?.data) {
        if (prev) {
          prev.next = current.next
        } else {
          head = current.next
        }
      } else {
        prev = current
      }
      current = current.next
    }
    return head
  }
