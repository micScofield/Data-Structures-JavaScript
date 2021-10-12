// We will use a stack for DFS iterative traversal and a queue for BFS traversal
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new QueueNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let queue = new Queue();

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2) {
    // check edge case
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
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

  dfsRecursive(vertex) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList; // so that function doesn't lose adjacency list inside function. We couls use an arrow function though and still use this.adjacencyList.

    (function helper(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      console.log("Pushed ", vertex);

      adjacencyList[vertex].forEach((neighbour) => {
        console.log("looping vertex: ", vertex);
        // see callstack for picturing recursive calls and add a breakpoint at below line of code

        if (!visited[neighbour]) return helper(neighbour);
      });
    })(vertex);

    return result;
  }

  dfsIterative(vertex) {
    let result = [];
    let visited = {};

    stack.push(vertex);
    visited[vertex] = true;

    while (stack.size > 0) {
      let v = stack.pop();

      result.push(v);

      this.adjacencyList[v].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });

      // Approach 2
      // for (let i = this.adjacencyList[v].length-1; i >= 0; i--) {
      //   if (!visited[this.adjacencyList[v][i]]) {
      //     visited[this.adjacencyList[v][i]] = true;
      //     stack.push(this.adjacencyList[v][i])
      //   }
      //   stack.push(this.adjacencyList[v][i])
      // }
    }

    return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph); 
/*
Graph {
  adjacencyList: {
    A: [ 'B', 'C' ],
    B: [ 'A', 'D' ],
    C: [ 'A', 'E' ],
    D: [ 'B', 'E', 'F' ],
    E: [ 'C', 'D', 'F' ],
    F: [ 'D', 'E' ]
  }
}
*/

console.log(graph.dfsRecursive("A")); // ['A', 'B', 'D', 'E', 'C', 'F' ]