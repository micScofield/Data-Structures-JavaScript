class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = this.head;
    while (current) {
      if (current.next === null) {
        prev.next = null;
        this.tail = prev;
        this.length -= 1;

        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }

        return current;
      }
      prev = current;
      current = current.next;
    }
    // quick note: If we were using doubly linked list, we would directly have access to tail's previous node, and popping would be O(1) instead of O(n).
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null; // not required as if it was only 1 node in the list, this.head would be null anyway
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    let node = this.get(index);

    if (!node) return false;

    node.val = value;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    let node = new Node(val);

    let insertAfter = this.get(index - 1);

    let temp = insertAfter.next;
    insertAfter.next = node;
    node.next = temp;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let nextNode;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prev;
      prev = node;
      node = nextNode;
    }

    this.print(); // for test purpose

    return this;
  }

  // below method is just for testing purposes.
  print() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr);
  }
}

let a = new SinglyLinkedList();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
// console.log(a.pop())
// console.log(a.shift())
// a.unshift(0)
// console.log(a.get(2))
// a.set(2, 4)
// console.log(a.insert(4,5))
// a.remove(0)
console.log(a);
a.reverse();
