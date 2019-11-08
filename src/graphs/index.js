const { LinkedList, Node } = require("./../linked_lists");

class Graph {
  //adj list
  graph = {};
  matrix = null;
  matrixN = null;

  //The degree or valency of a vertex is
  //the number of edges that connect to it.

  addEdge(u, v) {
    // for undirected graph
    let graph = this.graph;
    if (!graph[u]) {
      graph[u] = [];
    }
    if (!graph[v]) {
      graph[v] = [];
    }

    if (!graph[u].includes(v)) graph[u].push(v);
    if (!graph[v].includes(u)) graph[u].push(u);
  }

  addMatrix(matrix) {
    this.matrixN = matrix.length;
    this.matrix = matrix;
  }

  dijkstra(root) {
    let distances = Array.from(
      new Array(this.matrixN),
      () => Number.MAX_SAFE_INTEGER
    );

    // Set so minDistance chooses this node
    distances[root] = 0;

    let processed = Array.from(distances, () => false);

    for (var i = 0; i < this.matrixN; i++) {
      let u = this.minDistanceIndex(distances, processed);
      processed[u] = true;

      for (var j = 0; j < this.matrixN; j++) {
        if (
          this.matrix[u][j] > 0 &&
          !processed[j] &&
          distances[j] > distances[u] + this.matrix[u][j]
        ) {
          distances[j] = distances[u] + this.matrix[u][j];
        }
      }
    }

    return distances;
  }

  minDistanceIndex(distances, processed) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex;
    for (var i = 0; i < this.matrixN; i++) {
      if (distances[i] < min && !processed[i]) {
        min = distances[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  BFS(v) {
    let results = [v];
    let visited = this._createVisitedArray();
    let queue = new LinkedList(new Node(v));
    visited[v] = true;

    while (queue.length) {
      v = queue.removeFirst();
      for (let e of this.graph[v.data]) {
        if (!visited[e]) {
          results.push(e);
          queue.add(e);
          visited[e] = true;
        }
      }
    }

    return results;
  }

  DFS(v) {
    let visited = this._createVisitedArray();
    let acc = [];
    this._DFS(v, visited, acc);
    return acc;
  }

  _DFS(v, visited, acc) {
    visited[v] = true;
    acc.push(v);

    for (let e of this.graph[v]) {
      if (!visited[e]) this._DFS(e, visited, acc);
    }
  }

  _createVisitedArray() {
    return Array.from(new Array(Object.keys(this.graph).length), () => false);
  }
}

module.exports = {
  Graph
};
