/*
* @Author: hwaphon
* @Date:   2017-02-22 22:39:08
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-23 09:34:15
*/

'use strict';

function HashTable() {

	var table = [];
	var loseloseHashCode = function(key) {
		var hash = 0;

		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % 37;
	}

	this.put = function(key, value) {
		var position = loseloseHashCode(key);

		console.log(position + " - " + value);
		table[position] = value;
	};

	this.get = function(key) {
		var position = loseloseHashCode(key);
		return table[position];
	};
	this.remove = function(key) {
		table[loseloseHashCode(key)] = undefined;
	};

}