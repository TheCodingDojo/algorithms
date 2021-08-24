/* 
This graph represents flights between airport nodes.
For simplicity, this graph will have no cycles: A node cannot point back to
itself.
*/

/* 
Terms:
Node: Vertex / Point, Neighbor / Edge.
Edge: connection between two nodes.
O(V + E) means Vertices + Edges and can also be written as O(n) since it's
linear. However, since a node can be both a vertex and multiple edges since it
can be connected to many nodes, the same node can be visited multiple times.
Even though we have logic to avoid re-processing an already visited node, the
soonest we can stop re-processing it is as soon as we see it again and realize
we are re-visiting it.
*/

/**
 * @typedef {any} NodeData The value stored in the nodes and used for the key
 *    in Map objects.
 * @typedef {number} Weight The cost to travel to a vertex.
 * @typedef {Map<NodeData, Vertex>} Vertices
 * @typedef {Map<Vertex, Weight>} Edges The neighbors of a vertex.
 */

const routes = [
  ["PHX", "LAX", 369.32],
  ["PHX", "JFK", 2148.78],
  ["JFK", "LYC", 3862],
  ["JFK", "OKC", 1345],
  ["JFK", "HEL", 4117],
  ["JFK", "LOS", 6593],
  ["MEX", "LAX", 1553],
  ["MEX", "BKK", 11505],
  ["MEX", "LIM", 1638],
  ["MEX", "EZE", 5876],
  ["LIM", "BKK", 12241],
  ["HERP", "DERP", 60],
];

/**
 * Represents a Node (vertex / point) in a Graph and stores it's connections to
 * other Vertices (edges).
 */
class Vertex {
  /**
   * Constructs a new vertex with the given data.
   * @param {NodeData} data
   * @returns {Vertex} This new vertex.
   */
  constructor(data) {
    this.data = data;
    /**
     * @type {Edges}
     */
    this.edges = new Map();
  }

  /**
   * Adds an edge connecting this vertex to the given vertex.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Vertex} vertex
   * @param {Weight} weight The cost to travel between.
   * @returns {number} The new amount of adjacent vertices.
   */
  addEdge(vertex, weight) {
    this.edges.set(vertex, weight);
    return this.edges.size;
  }

  /**
   * Removes the edge connecting this vertex to the given vertex.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Vertex} vertex
   * @returns {Vertex} The removed vertex.
   */
  removeEdge(vertex) {
    this.edges.delete(vertex);
    return vertex;
  }

  /**
   * Gets this vertex's list of connected vertices.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Edges}
   */
  getEdges() {
    return this.edges;
  }

  /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number}
   */
  totalEdges() {
    return this.edges.size;
  }

  /**
   * Determines if this vertex is connected to the given vertex.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Vertex} vertex
   * @returns {boolean}
   */
  isEdge(vertex) {
    return this.edges.has(vertex);
  }
}

class Graph {
  constructor(edgeDirection = Graph.UNDIRECTED) {
    /**
     * @type {Vertices}
     */
    this.vertices = new Map();
    this.edgeDirection = edgeDirection;
  }

  /**
   * Adds a new vertex to this graph.
   * - Time: O(1).
   * - Space: O(1).
   * @param {NodeData} data
   * @returns {Vertex} The added vertex or already existing vertex.
   */
  addVertex(data) {
    if (this.vertices.has(data)) {
      return this.vertices.get(data);
    }

    const vertex = new Vertex(data);
    this.vertices.set(data, vertex);
    return vertex;
  }

  /**
   * Removes the vertex with the matching data.
   * - Time: O(V + E) linear.
   * - Space: O(1) constant.
   * @param {NodeData} data
   * @returns {boolean} Whether the vertex was removed or not.
   */
  removeVertex(data) {
    const current = this.vertices.get(data);

    if (!current) {
      return false;
    }

    for (const vertex of this.vertices.values()) {
      vertex.removeEdge(current);
    }

    return this.vertices.delete(data);
  }

  /**
   * Adds an edge to connect the two vertices with the given data.
   * Vertices will be created if the data does not exist.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {NodeData} source
   * @param {NodeData} destination
   * @param {number} weight The cost to travel between the vertices.
   * @returns {Array<Vertex, Vertex>} The source and destination respectively.
   */
  addEdge(source, destination, weight) {
    const src = this.addVertex(source);
    const dest = this.addVertex(destination);

    src.addEdge(dest, weight);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      dest.addEdge(src, weight);
    }
    return [src, dest];
  }

  /**
   * Adds many edges.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {Array<Array<string, string, number>>} connections A 2d array where the
   *    where the nested array contains the two NodeData to be connected.
   */
  addEdges(connections) {
    connections.forEach(([source, destination, weight]) =>
      this.addEdge(source, destination, weight)
    );
    return this;
  }

  /**
   * Gets the BFS path from the start to the destination or end of reachable
   * path if destination is not provided.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {NodeData} start
   * @param {NodeData} [destination]
   * @param {Map<NodeData, Weight>} visited This is a param so this method can also be
   *    used as a helper method to reach every node.
   * @returns {[[NodeData, Weight]]} The path to the destination. Empty if
   *    destination not found or full path if destination is null.
   */
  pathBFS(start, destination = null, visited = new Map()) {
    const startVert = this.vertices.get(start);

    if (!startVert) {
      return [];
    }

    /**
     * @type {Map<NodeData, Weight>}
     */
    const queue = new Map();
    queue.set(startVert.data, 0);

    while (queue.size) {
      /**
       * @type {[NodeData, Weight]}
       */
      const [currData, currWeight] = queue.entries().next().value;

      visited.set(currData, currWeight);

      if (currData === destination) {
        break;
      }

      queue.delete(currData); // dequeue O(1).
      const currVert = this.vertices.get(currData);

      for (const [edge, edgeWeight] of currVert.getEdges().entries()) {
        if (!visited.has(edge.data)) {
          queue.set(edge.data, edgeWeight); // enqueue O(1).
        }
      }
    }

    if (destination === null || visited.has(destination)) {
      return [...visited.entries()];
    }

    return [];
  }

  /**
   * Gets the DFS path from the start to the destination or end of reachable
   * path if destination is not provided.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {NodeData} start
   * @param {NodeData} [destination]
   * @param {Map<NodeData, Weight>} visited This is a param so this method can also be
   *    used as a helper method to reach every node.
   * @returns {[[NodeData, Weight]]} The path to the destination. Empty if
   *    destination not found or full path if destination is null.
   */
  pathDFSIterative(start, destination = null, visited = new Map()) {
    const startVert = this.vertices.get(start);

    if (!startVert) {
      return [];
    }

    visited.set(startVert.data, 0);

    if (start === destination) {
      [...visited.entries()];
    }

    const iteratorsStack = [startVert.getEdges().entries()];

    while (iteratorsStack.length) {
      const currIter = iteratorsStack.pop();
      const nxt = currIter.next();

      if (!nxt.done) {
        const [edge, weight] = nxt.value;

        // Without using iterators, we would have to do something like:
        // stack.push(...[...currVert.getEdges().keys()].reverse());
        iteratorsStack.push(currIter);

        if (!visited.has(edge.data)) {
          iteratorsStack.push(edge.getEdges().entries());

          visited.set(edge.data, weight);
        }

        if (edge.data === destination) {
          break;
        }
      }
    }

    if (destination === null || visited.has(destination)) {
      return [...visited.entries()];
    }

    return [];
  }

  /**
   * Gets the BFS path from the start to the destination or end of reachable
   * path from if destination is not provided.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {NodeData} start
   * @param {NodeData} [destination]
   * @param {Vertex} currVert
   * @param {Weight} currWeight
   * @returns {[[NodeData, Weight]]} The path to the destination. Empty if
   *    destination not found or full path if destination is null.
   */
  pathDFS(
    start,
    destination = null,
    visited = new Map(),
    currVert = this.vertices.get(start),
    currWeight = 0
  ) {
    if (!currVert) {
      return new Map();
    }

    visited.set(currVert.data, currWeight);

    if (start === destination) {
      return [...visited.entries()];
    }

    for (const [edge, weight] of currVert.getEdges().entries()) {
      if (!visited.has(edge.data)) {
        this.pathDFS(start, destination, visited, edge, weight);

        if (visited.has(destination)) {
          return [...visited.entries()];
        }
      }
    }

    if (destination === null) {
      // Inefficient: conversion happens each recursive call that reaches here.
      // Iterative ver. avoids this.
      return [...visited.entries()];
    }

    return [];
  }

  /**
   * Converts this graph to an array of node data using given traversal order
   * to reach every node rather than only the nodes that are reachable from a
   * start node.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {string} order The traversal order.
   * @returns {Array<NodeData>}
   */
  pathFull(order = "DFS") {
    console.time(order);
    const visited = new Map();
    let ret;

    for (const vertex of this.vertices.values()) {
      if (!visited.has(vertex.data)) {
        switch (order) {
          case "DFS":
            ret = this.pathDFS(vertex.data, null, visited);
            break;
          case "iterativeDFS":
            ret = this.pathDFSIterative(vertex.data, null, visited);
            break;
          case "BFS":
            ret = this.pathBFS(vertex.data, null, visited);
            break;
          default:
            break;
        }
      }
    }
    console.timeEnd(order);
    return ret;
  }

  // TODO
  pathShortest() {}

  print() {
    let str = [...this.vertices.values()]
      .map(
        (vertex) =>
          `${vertex.data} => ${[...vertex.getEdges().entries()]
            .map(([point, weight]) => `${point.data} (${weight})`)
            .join(", ")}`
      )
      .join("\n");

    str = `${"_".repeat(100)}\n${str}\n${"_".repeat(100)}`;
    console.log(str);
    return str;
  }
}

/* 
  A Symbol is not specific to a graph. These props could have just been strings,
  but there are some advantages to using symbols.
  */
Graph.UNDIRECTED = Symbol("directed graph"); // one-way edges
Graph.DIRECTED = Symbol("undirected graph"); // two-way edges

const flightPaths = new Graph().addEdges(routes);
flightPaths.print();

module.exports = {
  Vertex,
  Graph,
};

// https://www.youtube.com/watch?v=pVfj6mxhdMw
