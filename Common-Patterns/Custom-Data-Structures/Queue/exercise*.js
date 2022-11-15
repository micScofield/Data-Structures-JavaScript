class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class Queue {
  #length;

  constructor() {
    this.head = null;
    this.tail = null;
    this.#length = 0;
  }

  enqueue(value) {
    let node = new Node(value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      this.#length++;
      return;
    }

    let oldTail = this.tail;
    oldTail.next = node;
    this.tail = node;
    this.#length++;
    return node;
  }

  dequeue() {
    if (!this.head && !this.tail) {
      return;
    }
    const dequeued = this.head;
    this.head = this.head.next;
    this.#length--;
    return dequeued.data;
  }

  peek() {
    return this.head;
  }

  get length() {
    return this.#length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.peek();
queue.length;

/*
Question 1:
Receives 2 queues (head only) and returns combined queue. It should contain alternating content of the two queues. Don't access queues directly, instead use methods implemented in Queue class
*/

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

const queue2 = new Queue();
queue2.enqueue('A');

// Weave with queue heads
function weave(q1, q2) {
  const newQueue = new Queue();

  if (!q1) return q2;
  if (!q2) return q1;
  if (!q1 && !q2) return;

  let q1Pointer = q1;
  let q2Pointer = q2;

  while (q1Pointer && q2Pointer) {
    newQueue.enqueue(q1Pointer.data);
    q1Pointer = q1Pointer.next;
    newQueue.enqueue(q2Pointer.data);
    q2Pointer = q2Pointer.next;
  }

  if (!q1Pointer) {
    while (q2Pointer) {
      newQueue.enqueue(q2Pointer.data);
      q2Pointer = q2Pointer.next;
    }
  }

  if (!q2Pointer) {
    while (q1Pointer) {
      newQueue.enqueue(q1Pointer.data);
      q1Pointer = q1Pointer.next;
    }
  }
  return newQueue;
}

console.log(weave(queue1.head, queue2.head));

// weave with entire queues (modifies passed queues)
function weave2(q1, q2) {
  if (!q1) return q2;
  if (!q2) return q1;
  if (!q1 && !q2) return;

  const newQueue = new Queue();

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) newQueue.enqueue(q1.dequeue());
    if (q2.peek()) newQueue.enqueue(q2.dequeue());
  }
  return newQueue;
}

console.log(weave2(queue1, queue2));
