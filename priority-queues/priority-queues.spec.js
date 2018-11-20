const chai = require('chai');
const expect = chai.expect;
const PriorityQueue = require('./priority-queues');

describe('Test Priority queue', function () {
    describe('Test Enqueue', function () {
        it('Enqueues and bubbles up values', function () {
            const ER = new PriorityQueue();
            ER.enqueue("common cold", 1);
            ER.enqueue("gunshot wound", 5);
            ER.enqueue("high fever", 2);

            expect(ER.values[0]).to.deep.equal({
                value: "gunshot wound",
                priority: 5
            });
            expect(ER.values[1]).to.deep.equal({
                value: "common cold",
                priority: 1
            });
            expect(ER.values[2]).to.deep.equal({
                value: "high fever",
                priority: 2
            });
        })
    })

    describe('Test Enqueue', function () {
        it('Dequeues and sinks down values', function () {
            const ER = new PriorityQueue();
            ER.enqueue("common cold", 1);
            ER.enqueue("gunshot wound", 5);
            ER.enqueue("high fever", 2);

            expect(ER.dequeue()).to.deep.equal({
                value: "gunshot wound",
                priority: 5
            });
            expect(ER.dequeue()).to.deep.equal({
                value: "high fever",
                priority: 2
            });
            expect(ER.dequeue()).to.deep.equal({
                value: "common cold",
                priority: 1
            });
        })
    })
})