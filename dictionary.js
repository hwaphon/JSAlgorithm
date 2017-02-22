/*
* @Author: hwaphon
* @Date:   2017-02-22 21:52:44
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-22 22:28:12
*/

'use strict';

function Dictionary() {
	var items = {};

	this.set = function(key, value) {
		items[key] = value;
	};

	this.get = function(key) {
		return this.has(key) ? items[key] : undefined;
	};

	this.remove = function(key) {
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	this.has = function(key) {
		return key in items;
	};

	this.clear = function() {
		items = {};
	};
	this.size = function() {
		var count = 0;
		for(var prop in items) {
			if (items.hasOwnProperty(prop)) {
				++count;
			}
		}

		return count;
	};
	this.keys = function() {
		var keys = [];

		for(var prop in items) {
			if (items.hasOwnProperty(prop)) {
				keys.push(prop);
			}
		}

		return keys;
	};

	this.values = function() {
		var values = [],
			keys = this.keys();

		for (var i = 0; i < keys.length; i++) {
			values.push(items[keys[i]]);
		}

		return values;
	};

	this.getItems = function() {
		return items;
	}
}