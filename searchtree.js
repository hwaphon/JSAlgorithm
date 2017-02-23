/*
 * @Author: hwaphon
 * @Date:   2017-02-23 18:46:26
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-02-23 20:05:12
 */

'use strict';

function BinarySearchTree() {

	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var insertNode = function(node, newNode) {
		if (node.key <= newNode.key) {
			if (node.right == null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		} else {
			if (node.left == null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		}
	};

	var root = null;

	this.insert = function(key) {
		var node = new Node(key);

		if (root == null) {
			root = node;
		} else {
			insertNode(root, node);
		}
	};

	var removeNode = function(node, key) {
		if (node === null) {
			return null;
		}

		if (key < node.key) {
			node.left = removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			} else if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			} else {
				var rightMin = minNode(node.right);
				node.key = rightMin;
				node.right = removeNode(node.right, node.key);
				return node;
			}
		}
	};

	this.remove = function(key) {
		root = removeNode(root, key);
	};

	var searchNode = function(node, key) {
		if (node === null) {
			return false;
		}

		if (key < node.key) {
			return searchNode(node.left, key);
		} else if (key > node.key) {
			return searchNode(node.right, key);
		} else {
			return true;
		}

	};

	this.search = function(key) {
		if (root === null) {
			return false;
		} else {
			return searchNode(root, key);
		}
	};

	var minNode = function(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left;
			}

			return node.key;
		}

		return null;
	};

	this.min = function() {
		return minNode(root);
	};

	var maxNode = function(node) {
		if (node) {
			while (node && node.right) {
				node = node.right;
			}

			return node.key;
		}

		return null;
	};

	this.max = function() {
		return maxNode(root);
	};

	var inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};

	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	};

	var preOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};

	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	};

	var postOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};
	this.postOrderTraverse = function(callback) {
		postOrderTraverseNode(root, callback);
	};
}