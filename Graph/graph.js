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
  }
  
  let g = new Graph();
  g.addVertex("Dallas");
  g.addVertex("Tokyo");
  g.addVertex("Aspen");
  g.addVertex("Los Angeles");
  g.addVertex("Hong Kong");
  g.addEdge("Dallas", "Tokyo");
  g.addEdge("Dallas", "Aspen");
  g.addEdge("Hong Kong", "Tokyo");
  g.addEdge("Hong Kong", "Dallas");
  g.addEdge("Los Angeles", "Hong Kong");
  g.addEdge("Los Angeles", "Aspen");
  console.log(g);