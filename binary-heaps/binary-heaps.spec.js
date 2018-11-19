const chai = require('chai');
const expect = chai.expect;
const MaxBinaryHeap = require('./binary-heaps');

describe('Test MaxBinaryHeap', function () {
    describe('Test Insert', function () {

        it('Inserts and bubbles up values', function () {
            let heap = new MaxBinaryHeap();
            heap.insert(10);
            heap.insert(20);
            heap.insert(30);

            expect(heap.values).to.deep.equal([30, 10, 20]);
        });

        it('Inserts and bubble up values', function () {
            let heap = new MaxBinaryHeap();
            heap.insert(41);
            heap.insert(39);
            heap.insert(33);
            heap.insert(18);
            heap.insert(27);
            heap.insert(12);
            heap.insert(55);

            expect(heap.values).to.deep.equal([55, 39, 41, 18, 27, 12, 33]);

            heap.insert(1);

            expect(heap.values).to.deep.equal([55, 39, 41, 18, 27, 12, 33, 1]);
        })
    })

    describe('Test extractMax', function () {
        it('Extracts the maximum value and rebalances the heap', function () {
            let heap = new MaxBinaryHeap();
            heap.insert(26);
            heap.insert(25);
            heap.insert(2);
            heap.insert(7);
            heap.insert(19);

            expect(heap.values).to.deep.equal([26, 25, 2, 7, 19]);
            let extractMax = heap.extractMax();
            expect(extractMax).to.equal(26);
            expect(heap.values).to.deep.equal([25, 19, 2, 7]);
        })

        it('Extracts the maximum value and rebalances the heap', function () {
            let heap = new MaxBinaryHeap();
            heap.insert(41);
            heap.insert(39);
            heap.insert(33);
            heap.insert(18);
            heap.insert(27);
            heap.insert(12);
            heap.insert(55);

            expect(heap.values).to.deep.equal([55, 39, 41, 18, 27, 12, 33]);
            let extractMax = heap.extractMax();
            expect(extractMax).to.equal(55);
            expect(heap.values).to.deep.equal([41, 39, 33, 18, 27, 12]);
            
            extractMax = heap.extractMax();
            expect(extractMax).to.equal(41);
            expect(heap.values).to.deep.equal([39, 27, 33, 18, 12]);

            extractMax = heap.extractMax();
            expect(extractMax).to.equal(39);
            expect(heap.values).to.deep.equal([ 33, 27, 12, 18 ]);

            extractMax = heap.extractMax();
            expect(extractMax).to.equal(33);
            expect(heap.values).to.deep.equal([ 27, 18, 12 ]);

            extractMax = heap.extractMax();
            expect(extractMax).to.equal(27);
            expect(heap.values).to.deep.equal([ 18, 12 ]);

            extractMax = heap.extractMax();
            expect(extractMax).to.equal(18);
            expect(heap.values).to.deep.equal([ 12 ]);

            extractMax = heap.extractMax();
            expect(extractMax).to.equal(12);
            expect(heap.values).to.deep.equal([]);
        })
    })
})