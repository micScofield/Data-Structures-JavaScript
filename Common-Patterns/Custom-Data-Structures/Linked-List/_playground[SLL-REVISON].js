class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next === null) {
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  insertFirst(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let oldHead = this.head;
    node.next = oldHead;
    this.head = node;
  }

  getAt(index) {
    let counter = 0;
    let current = this.head;

    while (counter <= index && current) {
      if (counter === index) {
        return current;
      }
      current = current.next;
      counter++;
    }

    return new Error('No element at given index');
  }

  pop() {
    let current = this.head;

    if (current.next === null) {
      this.head = null;
      return;
    }

    while (current) {
      if (current.next.next === null) {
        current.next = null;
        return;
      }
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let newHead = this.head.next;
    this.head = newHead;
  }

  findTail() {
    let current = this.head;

    while (current) {
      if (current.next === null) return current;
      current = current.next;
    }
  }

  reverse() {
    if (!this.head) return;

    if (!this.head.next) return this.head;

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;

      current = next;
    }
    this.head = prev;
  }

  rotate(num) {
    // todo: edge cases here

    let current = this.head;
    let newHead;

    for (let i = 0; i < num; i++) {
      newHead = current.next;
      this.head = newHead;
      this.insert(current.data);
      current = newHead;
    }
  }

  removeDuplicates() {
    let current = this.head;
    let prev;

    while (current) {
      if (current.data === current.next?.data) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
      } else {
        prev = current;
      }
      current = current.next;
    }
  }

  removeAt(index) {
    // edge cases here

    let prev = this.getAt(index - 1);
    prev.next = prev.next.next;
    return true;
  }

  removeDuplicatesInUnsortedList() {
    let current = this.head;
    let map = new Map();
    let counter = 0;

    while (current) {
      if (map.has(current.data)) {
        this.removeAt(map.get(current.data));
      } else {
        map.set(current.data, counter);
        counter++;
      }
      current = current.next;
    }
  }

  findMidpoint() {
    let current = this.head;

    let fast = current;

    while (current) {
      if (fast.next === null || fast.next.next === null) {
        return current;
      }
      current = current.next;
      fast = fast.next.next;
    }
  }

  isCircular() {
    let current = this.head;

    let fast = current;
    let counter = 0;

    while (current) {
      if (fast.next === null || fast.next.next === null) {
        return false;
      }
      if (counter !== 0 && current === fast) return true;
      counter++;
      current = current.next;
      fast = fast.next.next;
    }
  }

  findNodeSpacesFromTail(spaces) {
    let current = this.head;
    let lead = this.head;

    for (let i = 0; i < spaces; i++) {
      lead = lead.next;
    }

    while (lead) {
      if (lead.next === null) {
        return current;
      }
      current = current.next;
      lead = lead.next;
    }
  }
}

function mergeTwoSortedLists(head1, head2) {
  
}

// const list = new LinkedList()
// list.insert(1)
// list.insert(2)
// list.insertFirst(0)
// list.reverse()
// list.traverse() // 2,1,0
// list.rotate(2)
// list.traverse() // 0,2,1

// const list2 = new LinkedList()
// list2.insert(1)
// list2.insert(1)
// list2.insert(1)
// list2.insert(1)
// list2.insert(2)
// list2.removeDuplicates()
// list2.traverse()

// const list3 = new LinkedList()
// list3.insert(1)
// list3.insert(0)
// list3.insert(0)
// list3.insert(2)
// list3.insert(0)
// list3.insert(3)
// list3.removeDuplicatesInUnsortedList() // 1203
// list3.traverse()
// // console.log(list3.findMidpoint())
// console.log(list3.findNodeSpacesFromTail(1)) // current list = [1,2,0,3] should return 0

// const list4 = new LinkedList()
// let node = new Node(2)
// list4.head = new Node(1)
// list4.head.next = node
// list4.head.next.next = new Node(3)
// list4.head.next.next.next = node

// console.log(list4.isCircular())

// For merge exercise
const list5 = new LinkedList();
list5.insert(1);
list5.insert(2);
list5.insert(4);

const list6 = new LinkedList();
list6.insert(1);
list6.insert(3);
list6.insert(4);

console.log(mergeTwoSortedLists(list5.head, list6.head)); // [1,1,2,3,4,4]
