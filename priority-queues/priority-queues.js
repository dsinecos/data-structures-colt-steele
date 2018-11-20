class PriorityQueue {
    constructor() {
        this.values = [];
    }

    /**
     * @public
     */
    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        let index = this.values.length - 1;
        this.bubbleUp(index);
        return node;
    }

    /**
     * @private
     * @param {number} childIndex 
     */
    bubbleUp(childIndex) {
        let child = this.values[childIndex];
        let parentIndex = Math.floor((childIndex - 1) / 2);
        if (parentIndex < 0) {
            parentIndex = 0;
        }
        let parent = this.values[parentIndex];

        if (child.priority > parent.priority) {
            this.swap(parentIndex, childIndex);
            return this.bubbleUp(parentIndex);
        }

        return childIndex;
    }

    /**
     * @private
     * @param {number} parentIndex 
     * @param {number} childIndex 
     */
    swap(parentIndex, childIndex) {
        let child = this.values[childIndex];
        let parent = this.values[parentIndex];

        // Replace child at parentIndex
        // this.values.splice(parentIndex, 1, child);
        this.values[parentIndex] = child;

        // Replace parent at childIndex
        // this.values.splice(childIndex, 1, parent);
        this.values[childIndex] = parent;
    }

    /**
     * @public
     */
    dequeue() {
        let max = this.values.shift();
        if (this.values.length > 1) {
            let replaceValue = this.values.pop();
            this.values.unshift(replaceValue);
            this.sinkDown(0)
        }
        return max;
    }

    /**
     * @private
     * @param {number} parentIndex 
     */
    sinkDown(parentIndex) {
        let parent = this.values[parentIndex];
        let leftChildIndex = 2 * parentIndex + 1;
        let rightChildIndex = 2 * parentIndex + 2;

        // Cover for the edge case when the childIndex is out of bounds of the Array
        let leftChild = leftChildIndex < this.values.length ? this.values[leftChildIndex] : parent;
        let rightChild = rightChildIndex < this.values.length ? this.values[rightChildIndex] : parent;

        if (parent.priority < leftChild.priority && rightChild.priority < leftChild.priority) {
            this.swap(parentIndex, leftChildIndex);
            return this.sinkDown(leftChildIndex);
        } else if (parent.priority < rightChild.priority && leftChild.priority < rightChild.priority) {
            this.swap(parentIndex, rightChildIndex);
            return this.sinkDown(rightChildIndex);
        }

        return parentIndex;
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

module.exports = PriorityQueue;