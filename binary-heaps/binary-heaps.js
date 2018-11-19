class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /**
     * @public
     */
    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        this.bubbleUp(index);
    }

    /**
     * @private
     * @param {number} childIndex 
     */
    bubbleUp(childIndex) {
        let child = this.values[childIndex];
        let parentIndex = Math.floor((childIndex - 1) / 2);
        let parent = this.values[parentIndex];

        if (child > parent) {
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
    extractMax() {
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

        if (parent < leftChild && rightChild < leftChild) {
            this.swap(parentIndex, leftChildIndex);
            return this.sinkDown(leftChildIndex);
        } else if (parent < rightChild && leftChild < rightChild) {
            this.swap(parentIndex, rightChildIndex);
            return this.sinkDown(rightChildIndex);
        }

        return parentIndex;
    }
}

module.exports = MaxBinaryHeap;