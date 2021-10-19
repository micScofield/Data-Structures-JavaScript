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

  dequeue() {
    // Step 1. Remove the root (save it in a variable so that we can return), put last value to root.
    // Step 2. Sink Down / Adjust the heap / Bubble Down

    let extractedMax = this.values[0];

    let lastVal = this.values.pop();

    const sinkDown = () => {
      let index = 0;
      let leftChildIdx, rightChildIdx;
      let swapWith = null;

      //   console.log(this.values);
      // check larger children and swap until there are no more children to swap with

      while (true) {
        leftChildIdx = 2 * index + 1;
        rightChildIdx = 2 * index + 2;

        if (leftChildIdx < this.values.length) {
          if (
            this.values[leftChildIdx].priority < this.values[index].priority
          ) {
            swapWith = leftChildIdx;
          }
        }

        if (rightChildIdx < this.values.length) {
          if (
            (swapWith === null &&
              this.values[rightChildIdx].priority <
                this.values[index].priority) ||
            (swapWith !== null &&
              this.values[rightChildIdx].priority <
                this.values[leftChildIdx].priority)
          ) {
            swapWith = rightChildIdx;
          }
        }

        if (!swapWith) break;

        let temp = this.values[index];
        this.values[index] = this.values[swapWith];
        this.values[swapWith] = temp;

        // console.log(this.values);

        index = swapWith;
        swapWith = null;
      }
    };

    if (this.values.length > 0) {
      this.values[0] = lastVal;
      sinkDown();
    }

    return { extractedMax, heap: this.values };
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2, weight) {
    // check edge case
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;

    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    // check edge case
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return this.adjacencyList;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }
}