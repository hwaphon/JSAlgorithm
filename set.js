/*
* @Author: hwaphon
* @Date:   2017-02-22 16:45:51
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-22 21:40:58
*/

'use strict';

function Set() {
	var items = {};

	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};
	
	this.remove = function(value) {
		if (this.has(value)) {
			delete items[value];
			return true;
		}

		return false;
	};
	this.clear = function() {
		items = {};
	};
	this.has = function(value) {
		return items.hasOwnProperty(value);
	};

	this.size = function() {
		var count = 0;
		for (var prop in items) {
			if (items.hasOwnProperty(prop)) {
				++count;
			}
		}

		return count;
	};

	this.values = function() {
		var keys = [];
		for(var prop in items) {
			if (items.hasOwnProperty(prop)) {
				keys.push(prop);
			}
		}

		return keys;
	};

	this.union = function(otherSet) {
		var unionSet = new Set();

		var keys = this.values();
		for (var i = 0; i < keys.length; i++) {
			unionSet.add(keys[i]);
		}

		keys = otherSet.values();
		for (var i = 0; i < keys.length; i++) {
			unionSet.add(keys[i]);
		}

		return unionSet;
	};

	this.intersection = function(otherSet) {
		var intersection = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersection.add(values[i]);
			}
		}

		return intersection;
	};

	this.difference = function(otherSet) {
		var difference = new Set();

		var values = this.values();

		for (var i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				difference.add(values[i]);
			}
		}

		return difference;
	};

	this.subset = function(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		} else {
			var values = this.values();
			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
		}

		return true;
	};
}