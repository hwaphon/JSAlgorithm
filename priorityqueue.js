/*
 * @Author: hwaphon
 * @Date:   2017-02-21 22:01:39
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-21 22:23:42
 */

'use strict';

function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var element = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(element);
		} else {
			var added = false;

			for (var i = 0; i < items.length; i++) {
				if (element.priority > items[i].priority) {
					items.splice(i, 0, element);
					added = true;
					break;
				}
			}

			if (!added) {
				items.push(element);
			}

		}
	}

	this.isEmpty = function() {
		return items.length === 0;
	}

	this.dequeue = function() {
		return items.shift();
	}

	this.print = function() {
		for (var i = 0; i < items.length; i++) {
			console.log(items[i].element.toString());
		}
	}
}