/*
 * @Author: hwaphon
 * @Date:   2017-02-24 10:53:45
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-24 14:25:09
 */

'use strict';

function ArrayList() {
	var array = [];

	this.insert = function(value) {
		array.push(value);
	};

	this.toString = function() {
		return array.join(' ');
	};

	var swap = function(i, j) {
		var aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	}

	this.bubleSort = function() {
		var length = array.length;

		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1 - i; j++) {
				if (array[j] > array[j + 1]) {
					swap(j, j + 1);
				}
			}
		}
	};

	this.selectionSort = function() {
		var length = array.length,
			minIndex;

		for (var i = 0; i < length - 1; i++) {
			minIndex = i;

			for (var j = i + 1; j < length; j++) {

				if (array[minIndex] > array[j]) {
					minIndex = j;
				}
			}

			if (minIndex !== i) {
				swap(minIndex, i);
			}
		}
	};

	this.insertionSort = function() {
		var length = array.length,
			j,
			aux;

		for (var i = 1; i < length; i++) {
			j = i;
			aux = array[i];

			while (j > 0 && array[j - 1] > aux) {
				array[j] = array[j - 1];
				j--;
			}

			array[j] = aux;
		}
	};

	this.shellSort = function() {
		var length = array.length,
			h = 1;

		while (h < Math.floor(length / 3)) {
			h = h * 3;
		}

		while (h >= 1) {

			for (var i = h; i < length; i++) {
				for (var j = i; j >= h; j -= h) {
					if (array[j] < array[j - h]) {
						swap(j, j - h);
					}
				}
			}

			h = h / 3;
		}
	};

	var merge = function(ltr, rtr) {
		var ltLength = ltr.length,
			rtLength = rtr.length,
			li = 0,
			rj = 0,
			result = [];

		while (li < ltLength && rj < rtLength) {
			if (ltr[li] < rtr[rj]) {
				result.push(ltr[li++]);
			} else {
				result.push(rtr[rj++]);
			}
		}

		while (li < ltLength) {
			result.push(ltr[li++]);
		}

		while (rj < rtLength) {
			result.push(rtr[rj++]);
		}

		return result;
	};

	var mergeSortRec = function(arr) {
		var length = arr.length;

		if (length === 1) {
			return arr;
		}

		var mid = Math.floor(length / 2),
			ltr = arr.slice(0, mid),
			rtr = arr.slice(mid, length);

		return merge(mergeSortRec(ltr), mergeSortRec(rtr));
	};

	this.mergeSort = function() {
		array = mergeSortRec(array);
	};

	var swapQuickSort = function(array, i, j) {
		var aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	};

	var parition = function(arr, left, right) {
		var priot = Math.floor((left + right) / 2),
			i = left,
			j = right;

		while (i <= j) {
			while (arr[i] < arr[priot]) {
				i++;
			}

			while (arr[j] > arr[priot]) {
				j--;
			}

			if (i <= j) {
				swapQuickSort(arr, i, j);
				i++;
				j--;
			}
		}

		return i;
	};

	var quick = function(arr, left, right) {
		var length = arr.length;

		if (length > 1) {
			var index = parition(arr, left, right);

			if (left < index - 1) {
				quick(arr, left, index - 1);
			}

			if (index < right) {
				quick(arr, index, right);
			}
		}
	};

	this.quickSort = function() {
		quick(array, 0, array.length - 1);
	};
}