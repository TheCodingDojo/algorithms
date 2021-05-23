# Graph

- [Graph Search Algorithms in 100 Seconds - And Beyond With JS](https://www.youtube.com/watch?v=cWNEl4HE2OE)
- A non-linear data structures that contains nodes and edges.
- A node (vertex) is a single unique value.
- An edge represents a connection / relationship between two nodes (a pointer).

## Directed Graph

- On instagram, every user is a node, every follow creates a new edge connecting two nodes together.
- This is a directed graph because the follower follows the followee and not the other way around.

## Undirected Graph

- On facebook, a friendship goes both ways.
- Also used in recommendation algorithms such as connecting recommended netflix movies to the ones you've watched.
- Used to represent geographic data - on google maps you can think of every intersection as a node and every road and it's distance as the edge connecting those nodes.

## Weighted Graph

- Nodes have additional data about the relationship, like the distance between two airport nodes.
- A node could also point to itself (cycle). This could represent an airplane that takes off from and comes back to land at the same airport.

## Representing a Graph in Code

### Adjacency Matrix (2d Array)

- One row and one column are created for every node.
- When two nodes have an edge / connection, add a `1` where they intersect.
- Easy to add or lookup a specific edge.
- This requires quadratic O(n^2) space for overall storage and quadratic time to insert a new node into the graph.

### Adjacency List

- Start with a collection of nodes.
- Each node has it's own list of it's neighbors / adjacents (edges / connections).
- This makes it faster to iterate over a nodes edges and is more memory efficient, especially with many nodes and few edges.

## Traversing a Graph

### Depth First Search (DFS - Recursive)

1. Start with any node.
2. Visit first child.
3. While there is a first child, keep traversing to it.
4. Once you've gone all the way down, backtrack to previous node and go to the 2nd child repeatedly.

### Breadth First Search (BFS)

1. From starting node, add all of it's children to a queue.
2. Visit each node in the queue.
3. While visiting each node in the queue, add all of it's children to the queue.
