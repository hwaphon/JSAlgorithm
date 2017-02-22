/*
* @Author: hwaphon
* @Date:   2017-02-22 10:45:53
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-22 14:31:27
*/

'use strict';

function LinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	};

	var length = 0,
		head = null;

	this.append = function(element) {
		 var node = new Node(element),
		 	 current;

		 if (head === null) {
		 	head = node;
		 } else {
		 	current = head;

		 	while(current.next) {
		 		current = current.next;
		 	}
		 	current.next = node;
		 }

		 length++;
	};

	this.insert = function(position, element) {
		var node = new Node(element),
			current = head,
			previous,
			index = 0;

		if (position >= 0 && position <= length) {
			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
				
			}

			length++;
			return true;
		} else {
			return false;
		}
	};

	this.removeAt = function(position) {
		var current = head,
			previous,
			index = 0;

		if (position > -1 && position < length) {
			if (position === 0) {
				head = head.next;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	};

	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.toString = function() {
		var current = head,
			resultString = "";

		while(current) {
			resultString += current.element + " ";
			current = current.next;
		}

		return resultString;
	};

	this.size = function() {
		return length;
	};

	this.indexOf = function(element) {
		var current = head,
			index = 0;

		while(current) {
			if (current.element === element) {
				return index;
			}
			index++;
			current = current.next;
		}

		return -1;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.getHead = function() {
		return head;
	};

}