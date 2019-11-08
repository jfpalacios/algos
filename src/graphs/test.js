const { Graph } = require("./");

describe("Graphs", () => {
  describe("Traversal", () => {
    let graph = new Graph();
    graph.addEdge("A", "D");
    graph.addEdge("D", "F");
    graph.addEdge("F", "C");
    graph.addEdge("A", "B");
    graph.addEdge("A", "G");
    graph.addEdge("B", "E");
    graph.addEdge("B", "F");
    graph.addEdge("E", "G");

    it("DFS works correctly: A-> C before G", () => {
      let results = graph.DFS("A");
      expect(results.indexOf("C")).to.be.lessThan(results.indexOf("G"));
      expect(results.length).to.equal(7);
    });

    it("BFS works correctly: A-> B before C", () => {
      let results = graph.BFS("A");
      expect(results.indexOf("B")).to.be.lessThan(results.indexOf("C"));
      expect(results.length).to.equal(7);
    });

    it("BFS and DFS return all nodes in undirected graph", () => {
      let results = graph.BFS("A");
      let results2 = graph.BFS("A");
      expect(results.length).to.equal(7);
      expect(results2.length).to.equal(7);
      expect(results.sort()).to.deep.equal(results2.sort());
    });
  });
});