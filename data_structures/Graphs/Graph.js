/* 
This graph represents flights between airport nodes.

For simplicity, this graph will be:
  Undirected: can travel back and forth between connected nodes
  Unweighted: no additional data about the connection is saved, like the distance.
  No cycles: A node cannot point back to itself.

Given the below data, represent it as a graph.
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
 * @typedef {any} NodeData The value stored in a Node and used as the key in a
 *    Map of nodes.
 */

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

/**
 * Represents a Node (vertex / point) in a Graph and stores it's connections to
 * other Nodes (edges).
 */
class Node {
  /**
   * Constructs a new node with the given data.
   * @param {NodeData} data
   * @returns {Node} This new node.
   */
  constructor(data) {
    this.data = data;
    this.edges = new Map();
  }

  /**
   * Adds an edge connecting this node to the given node.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Node} node
   * @returns {number} The new amount of adjacent nodes.
   */
  addEdge(node) {
    this.edges.set(node.data, node);
    return this.edges.size;
  }

  /**
   * Removes the edge connecting this node to the given node.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Node} node
   * @returns {Node} The removed node.
   */
  removeEdge(node) {
    this.edges.delete(node);
    return node;
  }

  /**
   * Gets this node's list of connected nodes.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Map} The adjacency list.
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
   * Determines if this node is connected to the given node.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Node} node
   * @returns {boolean}
   */
  isNeighbor(node) {
    return this.edges.has(node);
  }
}

class Graph {
  constructor(edgeDirection = Graph.UNDIRECTED) {
    /**
     * @typedef {Map <NodeData, Node>} Nodes
     */
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  /**
   * Adds a new node to this graph.
   * - Time: O(1).
   * - Space: O(1).
   * @param {NodeData} data
   * @returns {Node} The added node or already existing node.
   */
  addVertex(data) {
    if (this.nodes.has(data)) {
      return this.nodes.get(data);
    }
    const vertex = new Node(data);
    this.nodes.set(data, vertex);
    return vertex;
  }

  /**
   * Removes the node with the matching data.
   * - Time: O(V + E) linear.
   * - Space: O(1) constant.
   * @param {NodeData} data
   * @returns {boolean} Whether the node was removed or not.
   */
  removeVertex(data) {
    const current = this.nodes.get(data);

    if (!current) {
      return false;
    }

    for (const node of this.nodes.values()) {
      node.removeEdge(current);
    }

    return this.nodes.delete(data);
  }

  /**
   * Adds an edge to connect the two nodes with the given data.
   * Nodes will be created if the data does not exist.
   * - Time: O(2) -> O(1) constant.
   * - Space: O(2) -> O(1) constant.
   * @param {any} source
   * @param {any} destination
   * @returns {Array<Node, Node>} The source and destination respectively.
   */
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addEdge(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addEdge(sourceNode);
    }
    return [sourceNode, destinationNode];
  }

  /**
   * Adds many edges.
   * - Time: O(V + E) linear.
   * - Space: O(V + E) linear.
   * @param {Array<Array<string, string>>} edges A 2d array where the
   *    where the nested array contains the two NodeData to be connected.
   */
  addEdges(edges) {
    edges.forEach(([source, destination]) => this.addEdge(source, destination));
    return this;
  }

  /**
   * Determines if there is a path from the start to the destination using
   * Breadth First Search.
   * - Time: O(V + E) linear.
   * - Space: O(2V) -> O(V) linear.
   * @param {NodeData} start
   * @param {NodeData} destination
   * @returns {Boolean} Whether or not a path exists between the two given
   *    NodeData.
   */
  hasPathBFS(start, destination) {
    const startNode = this.nodes.get(start);

    if (!startNode) {
      return false;
    }

    const visited = new Set();
    const queue = new Set();
    queue.add(startNode);

    while (queue.size) {
      const currNode = queue.values().next().value;
      queue.delete(currNode); // dequeue O(1).

      for (const edge of currNode.getEdges().values()) {
        if (edge.data === destination) {
          return true;
        }

        if (!visited.has(edge)) {
          queue.add(edge); // enqueue O(1).
          visited.add(edge);
        }
      }
    }
    return false;
  }

  /**
   * Determines if there is a path from the start to the destination using
   * Depth First Search.
   * - Time: O(n) linear. n = this.nodes.size.
   * - Space: O(n) linear.
   * @param {NodeData} start
   * @param {NodeData} destination
   * @returns {Boolean} Whether or not a path exists between the two given
   *    NodeData.
   */
  hasPathDFS(
    start,
    destination,
    currNode = this.nodes.get(start),
    visited = new Set()
  ) {
    if (!currNode) {
      return false;
    }

    console.log(currNode.data);

    if (currNode.data === destination) {
      return true;
    }

    visited.add(currNode);

    for (const edge of currNode.getEdges().values()) {
      if (!visited.has(edge)) {
        if (this.hasPathDFS(start, destination, edge, visited)) {
          return true;
        }
      }
    }
    return false;
  }

  hasPathStackDFS() {}

  print() {
    let str = [...this.nodes.values()]
      .map(
        (node) => `${node.data} => ${[...node.getEdges().keys()].join(", ")}`
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
