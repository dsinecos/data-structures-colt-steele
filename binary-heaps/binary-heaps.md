### Index
- [Binary Heaps](#binary-heaps)
    - [Use cases](#use-cases)
    - [Representing Heaps](#representing-heaps)
- [Common methods](#common-methods)
    - [`insert`](#insert)
    - [`remove` or `extractMax`](#remove-or-extractmax)

## Binary Heaps

- Heaps are another category of Trees

- Binary heap
    - Each node can have at-most two child nodes
    - A binary heap is as compact as possible. All the children of each node are as full as they can be and the left children are filled out first

- There are two types of Binary Heaps
    - **Max Binary Heaps** - Where the parent nodes are always larger than the child nodes
    - **Min Binary Heaps** - Where the parent nodes are always smaller than the child nodes

- There is no order (greater than or smaller than) among the sibling nodes in a binary heap

### Use cases

- To implement Priority Queues
- In graph traversal operations

### Representing Heaps

- Using classes 
    - Node Class
    - Tree Class

- Using Arrays
    - For any index of an array `n`
        - Left child is stored at `2n+1`
        - Right child is stored at `2n+2`
    - To get the parent node for an element at `n`
        - `Math.floor((n-1)/2)`

## Common methods

### `insert`

- Add to the end of the array
- Bubble up
    - Compare to the value of the parent node
    - Swap if inserted values is greater than parent

### `remove` or `extractMax`

- Remove the root of the heap
- Replace the root with the last element of the heap (last element in the array)
- Sink down the replaced value
    - Compare to the left and the right child nodes
    - Swap with the higher child node
    - Cover for the edge case where a node does not have a valid left or right child node as it falls outside the bounds of the length of the array
- Cover for the edge case when there is only 1 element left inside the Binary Heap




