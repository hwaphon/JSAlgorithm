/*
 * @Author: hwaphon
 * @Date:   2017-02-23 15:56:39
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-23 16:43:51
 */

'use strict';

function HashTable() {
	var table = [],
		base = 370;

	var loseloseHashCode = function(key) {
		var hash = 0;

		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % base;
	};

	var djb2HashCode = function(key) {
		var hash = 5381;

		for (var i = 0; i < key.length; i++) {
			hash = hash * 33 + key.charCodeAt(i);
		}

		return hash % 1013;
	};

	var ValuePair = function(key, value) {
		this.key = key;
		this.value = value;

		this.toString = function() {
			return '[' + this.key + ' - ' + this.value + ']';
		};
	};

	this.put = function(key, value) {
		var position = loseloseHashCode(key);

		if (table[position] == undefined) {
			table[position] = new ValuePair(key, value);
		} else {
			var index = ++position;

			while (table[index] !== undefined) {
				index++;
			}

			table[index] = new ValuePair(key, value);
		}

		return true;
	};

	this.get = function(key) {
		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {
			if (table[position].key === key) {
				return table[position].value;
			} else {
				var index = ++position;

				while (table[index] === undefined ||
					table[index].key !== key) {
					index++;
					if (index >= base) {
						break;
					}
				}

				if (table[index].key === key) {
					return table[index].value;
				}
			}
		}

		return undefined;
	};
}