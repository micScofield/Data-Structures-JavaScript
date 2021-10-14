class Node {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(val, priority) {
      // edge cases
      if (typeof priority !== "number")
        throw new Error("Priority must be a valid number");
      if (priority < 0) throw new Error("Priority can't be a negative number");
  
      let node = new Node(val, priority);
  
      this.values.push(node);
  
      let index = this.values.length - 1;
      let parentIndex;
  
      while (index > 0) {
        parentIndex = Math.floor((index - 1) / 2);
  
        if (this.values[parentIndex].priority > this.values[index].priority) {
          let temp = this.values[parentIndex];
          this.values[parentIndex] = this.values[index];
          this.values[index] = temp;
  
          index = parentIndex;
        } else break;
      }
  
      return this;
    }
  }