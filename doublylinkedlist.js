/*
* @Author: hwaphon
* @Date:   2017-02-22 14:28:53
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-02-22 16:17:51
*/

'use strict';

function DoublyLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.pre = null;
		this.next = null;
	};

	var length = 0,
		head = null,
		tail = null;


	this.insert = function(position, element) {
		var node = new Node(element),
			current = head,
			previous = null,
			index = 0;

		if (position >= 0 && position <= length) {
			if (position === 0) {
				if (!head) {
					head = node;
					tail = node;
				} else {
					node.next = current;
					current.pre = node;
					head = node;
				}
			} else if (position === length) {
				current = tail;
				node.pre = current;
				current.next = node;
				tail = node;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = node;
				current.pre = node;
				node.pre = previous;
				node.next = current;
			}

			length++;
			return true;
		} else {
			return false;
		}
	};

	this.append = function(element) {
		return this.insert(length, element);
	}

	this.removeAt = function(position) {
		var index = 0,
			current = head,
			previous;

		if (position > -1 && position < length) {
			if (position === 0) {
				head = current.next;

				if (length === 1) {
					tail = null;
				} else {
					head.pre = null;
				}
			} else if (position === length -1) {
				current = tail;
				tail = current.pre;
				tail.next = null;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.pre = previous;
			}

			length--;
			return current.element;
		} else {
			return null;
		}
	};

	this.toString = function() {
		var current = head,
			resultString = "";

		while(current) {
			resultString += current.element + " ";
			current = current.next;
		}

		return resultString;
	}

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

	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	this.getHead = function() {
		return head.element;
	};

	this.getTail = function() {
		return tail.element;
	};
}