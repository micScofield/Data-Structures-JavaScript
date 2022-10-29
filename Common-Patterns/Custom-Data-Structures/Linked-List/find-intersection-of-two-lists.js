function ListNode(val) {
  this.val = val;
  this.next = null;
}

let node1 = new ListNode(8);
let node2 = new ListNode(4);
let node3 = new ListNode(5);

let list1 = new ListNode(4);
list1.next = new ListNode(1);
list1.next.next = node1;
list1.next.next.next = node2;
list1.next.next.next.next = node3;
let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(1);
list2.next.next.next = node1;
list2.next.next.next.next = node2;
list2.next.next.next.next.next = node3;

console.log(getIntersectionNode(list1, list2)); // [4,1,8,4,5] [5,6,1,8,4,5]

function bad_getIntersectionNode(headA, headB) {
  let node1 = headA;
  let node2 = headB;

  let list1 = [];

  while (node1) {
    if (node1) list1.push(node1);
    node1 = node1.next;
  }

  while (node2) {
    if (list1.find((node) => node === node2)) {
      return node2;
    }
    node2 = node2.next;
  }

  return null;
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let curA = headA;
  let curB = headB;

  // our end check. this works because we switch track to sync up
  while (curA !== curB) {
    console.log(curA.val, curB.val)
    if (curA.next) {
      curA = curA.next;
    } else {
      if (!curB.next) {
        // if curB also reaches null next, we've ended up at the end without any match found. break out of the loop and return null now.
        curA = null;
        curB = null;
        break;
      }
      // switch tracks to even out uneven length
      curA = headB;
    }

    if (curB.next) {
      curB = curB.next;
    } else {
      // switch tracks to even out uneven length
      curB = headA;
    }
  }
  return curA;
}
