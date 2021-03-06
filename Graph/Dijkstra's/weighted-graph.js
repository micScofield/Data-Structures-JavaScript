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

  findShortestPath(start, finish) {
    if (!this.adjacencyList[start] || !this.adjacencyList[finish])
      return undefined;

    // Step 1. Setup a distances object, a priority queue and a previous object
    let distances = {};
    let pq = new PriorityQueue();
    let previous = {};

    for (let i in this.adjacencyList) {
      if (i === start) {
        distances[start] = 0;
        pq.enqueue(i, 0);
      } else {
        distances[i] = Infinity;
        pq.enqueue(i, Infinity);
      }

      previous[i] = null;
    }

    console.log("queue: ", pq);
    console.log("distances: ", distances);
    console.log("previous", previous);

    // Step 2
    let path = []; // to return at the end
    let smallest;

    while (pq.values.length > 0) {
      console.log(previous);
      smallest = pq.dequeue().extractedMax.value; // pq.dequeue gives us { extractedMax, heap: this.values } where extractedMax: { value: <Vertex>, priority: <Number> }

      if (smallest === finish) {
        // push nodes to path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          // find neighbouring node
          let neighbourNode = this.adjacencyList[smallest][neighbour]; // eg: { node: "A", weight: 5 }

          // calculate new distance to neighbouring node from start node. If this distance is lesser, we update the distances object with updated value and previous and pq as well.
          let candidate = distances[smallest] + neighbourNode.weight;

          if (candidate < distances[neighbourNode.node]) {
            //updating new smallest distance to neighbour
            distances[neighbourNode.node] = candidate;

            //updating previous - How we got to neighbour
            previous[neighbourNode.node] = smallest;

            //enqueue in priority queue with new priority
            pq.enqueue(neighbourNode.node, candidate);
          }
        }
      }
    }
    console.log("Out of the loop, current smallest: ", smallest); // When we create path, we go backwards and set smallest to start node i.e. "A"
    console.log("queue: ", pq);
    console.log("distances: ", distances);
    console.log("previous", previous);

    return {
      path: path.concat(smallest).reverse(),
      totalDistance: distances[finish],
    };
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g);

console.log(g.findShortestPath("A", "E")); // { path: [ 'A', 'C', 'D', 'F', 'E' ], totalDistance: 6 }