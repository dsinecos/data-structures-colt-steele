## Graphs

### What is a Graph?
A graph is a collection of nodes (vertex) and connections (edges) between nodes

### What are the different types of Graphs and what are their use cases?

**Use cases**
- Social networks
- Mapping/ Locations
- Recommendation engines

**Types of Graphs**

- Directed vs Undirected Graph
  
  In an undirected graph there is no direction or polarity to the connections between the nodes. eg. Friends on facebook form nodes of an undirected graph
  
  A directed graph has a polarity to the edge or connection between nodes. eg. Follower/ following relationships in Instagram/ twitter form nodes of a directed graph

- Weighted vs Unweighted Graph
  
  When the edges (connections between nodes) are assigned a value, it represents a weighted graph. eg Maps representing locations as nodes and paths between them as edges. Here the values for the edges can represent the distance between locations

### Storing Graphs

**Using an Adjacency Matrix**

**Using an Adjacency List**

Each index of the array represents a node and the values stored against that index represent the other nodes that it is connected to. An adjacency list could be implemented using both an array or a hash table

**Big O comparison of Graph Operations for Adjacency Matrix and Adjacency List**
V - Number of vertices
E - Number of edges

| Operation | Adjacency List | Adjacency Matrix |
| -- | -- | -- |
| Storage | O(V+E) | O(V^2) |
| Add vertex | O(1) | O(V^2) |
| Add edge | O(1) | O(1) |
| Remove vertex | O(V + E) | O(V^2) |
| Remove edge | O(E) | O(1) |
| Query | O(V+E) | O(1) |

- Comparing Adjacency List and Adjacency Matrix. An adjacency list 
   1. Takes up less space in sparse graphs
   2. Is faster to iterate over all edges
   3. Can be slower compared to Adjacency Matrix when looking up a specific edge

### Implementing a Graph using Adjacency List

**List of Methods**
- Add vertex
- Add edge
- Remove edge

### Graph Traversal

#### Breadth First Search

#### Depth First Search

#### Compare and Contrast Graph Traversal Algorithms


