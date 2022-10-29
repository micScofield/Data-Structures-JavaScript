const { LinkedList, Node } = require('./linked-list');

const list1 = new LinkedList();
list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(4);

const list2 = new LinkedList();
list2.insertLast(1);
list2.insertLast(3);
list2.insertLast(4);

// [1,1,2,3,4,4]

console.log(merge(list1, list2)); // return head of merged list

function merge(list1, list2) {
  const merged = new LinkedList();

  // edge cases
  if (list1.length === 0 && list2.length === 0) return [];
  if (list1.length === 0 && list2.length === 1) return list2[0];
  if (list1.length === 1 && list2.length === 0) return list1[0];

  let head1 = list1.head;
  let head2 = list2.head;
  let count = 1;

  while (head1 || head2) {
    if (!head1) {
      while (head2) {
        merged.insertLast(head2);
        head2 = head2.next;
      }
      continue;
    }

    if (!head2) {
      while (head1) {
        merged.insertLast(head1);
        head1 = head1.next;
      }
      continue;
    }

    if (head1.data <= head2.data) {
      merged.insertLast(head1);
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      merged.insertLast(head2);
      head2 = head2.next;
    }
    count++;
  }
  return merged.head;
}