/*
* @Author: hwaphon
* @Date:   2017-02-21 21:44:12
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-21 21:50:22
*/

'use strict';

function Queue() {
	var items = [];

	this.enqueue = function(value) {
		items.push(value);
	};

	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	}

	this.size = function() {
		return items.length;
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	};
}