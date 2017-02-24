/*
 * @Author: hwaphon
 * @Date:   2017-02-24 08:17:53
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-24 09:48:33
 */

'use strict';

function Graph() {
	var vertices = [];
	var adjList = new Dictionary();

	this.addVertex = function(v) {
		vertices.push(v);
		adjList.set(v, []);
	};

	this.addEdge = function(v, w) {
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	};

	this.toString = function() {
		var s = '';

		for (var i = 0; i < vertices.length; i++) {
			var v = vertices[i];

			s += v + '->';
			var neighbours = adjList.get(v);
			for (var j = 0; j < neighbours.length; j++) {
				s += neighbours[j] + ' ';
			}

			s += '\n';
		}

		console.log(s);
	};

	var initializeStatus = function() {
		var status = [];

		for (var i = 0; i < vertices.length; i++) {
			status[vertices[i]] = 'visit';
		}

		return status;
	};

	this.bfs = function(v, callback) {
		var status = initializeStatus(),
			queue = new Queue();

		queue.enqueue(v);
		while (!queue.isEmpty()) {
			var w = queue.dequeue(),
				neighbours = adjList.get(w);
			status[w] = 'visiting';

			for (var i = 0; i < neighbours.length; i++) {
				if (status[neighbours[i]] === 'visit') {
					status[neighbours[i]] = 'visiting';
					queue.enqueue(neighbours[i]);
				}
			}

			status[w] = 'visited';
			if (callback) {
				callback(w);
			}

		}
	};

	var dfsVisit = function(u, status, callback) {
		status[u] = 'visited';
		if (callback) {
			callback(u);
		}

		var neighbours = adjList.get(u);
		for (var i = 0; i < neighbours.length; i++) {
			if(status[neighbours[i]] === 'visit') {
				dfsVisit(neighbours[i], status, callback);
			}
		}
	};

	this.dfs = function(callback) {
		var status = initializeStatus();

		for (var i = 0; i < vertices.length; i++) {
			if(status[vertices[i]] === 'visit') {
				dfsVisit(vertices[i], status, callback);
			}
		}
	};

}