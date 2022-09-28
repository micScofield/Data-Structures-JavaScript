// Receives 2 queues and returns combined queue. It should contain alternating content of the two queues. Don't access queues directly, instead use methods implemented in ./queue.js
const { Queue } = require('./queue')

function weave(queue1, queue2) {
    const queue3 = new Queue()
    while (queue1.peek() || queue2.peek()) {
        if (queue1.peek()) {
            queue3.enqueue(queue1.dequeue())
        }
        if (queue2.peek()) {
            queue3.enqueue(queue2.dequeue())
        }
    }
    return queue3
}

const queue1 = new Queue([4,3,2,1])
const queue2 = new Queue(['B', 'A'])

console.log(weave(queue1, queue2)) // should print [1,'A',2,'B',3,'C]