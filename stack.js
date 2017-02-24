/*
* @Author: hwaphon
* @Date:   2017-02-21 21:01:01
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-21 21:05:29
*/

'use strict';

function Stack() {
	
	var items = [];

	this.push = function(value) {
		items.push(value);
	};

	this.pop = function() {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length - 1];
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		return items.toString();
	};
}
