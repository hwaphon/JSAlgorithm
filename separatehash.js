/*
 * @Author: hwaphon
 * @Date:   2017-02-23 14:35:20
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-23 15:28:31
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
	};

	var ValuePair = function(key, value) {
		this.value = value;
		this.key = key;

		this.toString = function() {
			return '[' + this.key + ' - ' + this.value + ']';
		};
	};

	this.put = function(key, value) {

		var element = new ValuePair(key, value),
			position = loseloseHashCode(key);

		if (table[position] == undefined) {
			table[position] = new LinkedList();
		}

		table[position].append(element);
	};

	this.get = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			var current = table[position].getHead();

			while (current) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
		}

		return undefined;
	};

	this.remove = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			var current = table[position].getHead();

			while (current) {
				if (current.element.key === key) {
					table[position].remove(current.element);

					if (table[position].isEmpty()) {
						table[position] = undefined;
					}

					return true;
				}

				current = current.next;
			}
		}

		return false;
	};
}