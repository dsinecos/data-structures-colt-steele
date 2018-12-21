const expect = require('chai').expect;
const Graph = require('./graphs');

describe('Test Undirected Unweighted Graphs ', function () {

    it('Add a vertex', function () {
        const graph = new Graph();
        graph.addVertex('Test');
        expect(graph.adjacencyList['Test']).to.deep.equal([]);
    });

    it('Add an edge', function () {
        const graph = new Graph();
        graph.addVertex('Delhi');
        graph.addVertex('Mumbai');
        graph.addVertex('Noida');
        graph.addEdge('Delhi', 'Mumbai');
        expect(graph.adjacencyList['Delhi']).to.deep.equal(['Mumbai']);
        expect(graph.adjacencyList['Mumbai']).to.deep.equal(['Delhi']);
    })

    it('Remove an edge', function () {
        const graph = new Graph();
        graph.addVertex('Delhi');
        graph.addVertex('Mumbai');
        graph.addVertex('Noida');
        graph.addEdge('Delhi', 'Mumbai');
        expect(graph.adjacencyList['Delhi']).to.deep.equal(['Mumbai']);
        expect(graph.adjacencyList['Mumbai']).to.deep.equal(['Delhi']);

        graph.removeEdge('Delhi', 'Mumbai');
        expect(graph.adjacencyList['Delhi']).to.deep.equal([]);
        expect(graph.adjacencyList['Mumbai']).to.deep.equal([]);
    })

    it('Remove a vertex', function () {
        const graph = new Graph();
        graph.adjacencyList = {
            "Tokyo": ["Dallas", "Hong Kong"],
            "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
            "Aspen": ["Dallas"],
            "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
            "Los Angeles": ["Hong Kong", "Dallas"]
        }

        graph.removeVertex('Hong Kong');

        expect(graph.adjacencyList).to.deep.equal({
            "Tokyo": ["Dallas"],
            "Dallas": ["Tokyo", "Aspen", "Los Angeles"],
            "Aspen": ["Dallas"],
            "Los Angeles": ["Dallas"]
        });
    })
});