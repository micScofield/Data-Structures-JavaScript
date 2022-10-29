// Rotate a singly linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // 1,2,3,4,5 -- rotate by 2
    // 3,4,5,1,2
    rotate(num) {
        if (num > this.length) return this
        if (num < (-this.length)) return this

        if (num > 0) {
            let currentHead
            let nextHead
            for (let i = 0; i < num; i++) {
                currentHead = this.head
                nextHead = currentHead.next
                this.tail.next = currentHead
                this.tail = currentHead
                this.head = nextHead
            }
        } 
        // else {
        //     let currentTail
        //     let nextTail
        //     for (let i = num; i < 0; i++) {
        //         // remove tail and add to head
        //         currentTail = this.tail
        //         currentTail.next = this.head
        //         this.head = currentTail
        //     }
        // }

        this.tail.next = null
        return this
    }

    print() {
        let arr = []
        let cur = this.head
        while (cur) {
            arr.push(cur.val)
            cur = cur.next
        }
        console.log(arr)
    }
}

const test = new SinglyLinkedList()

test.push(1)
test.push(2)
test.push(3)
test.push(4)
test.push(5)
test.rotate(-1)
test.print()