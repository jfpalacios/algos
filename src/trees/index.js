class Node {
	value = null;
	left = null;
	right = null;
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}

	get height2() {
		return this._height2(this);
	}

	_height2(node) {
		if (!node) return -1;
		return (
			1 + Math.max(this._height2(node.left), this._height2(node.right))
		);
	}

	get height() {
		return this._height(this);
	}

	_height(node) {
		if (!node.left && !node.right) {
			// is leaf node
			return 0;
		} else if (!node.left) {
			return 1 + this._height(node.right);
		} else if (!node.right) {
			return 1 + this._height(node.left);
		} else {
			return (
				1 + Math.max(this._height(node.left), this._height(node.right))
			);
		}
	}

	get size() {
		return this._size(this);
	}
	_size(t) {
		if (!t) return 0;
		return 1 + this._size(t.left) + this._size(t.right);
	}

	get sizeIter() {
		let stack = [];
		let size = 0;
		stack.add(this);
		while (stack.length) {
			let next = s.pop();
			if (next) {
				size++;
				stack.push(next.left);
				stack.push(next.right);
			}
		}

		return size;
	}

	insert(value) {
		this._insert(this, value);
	}

	_insert(node, value) {
		if (!node) {
			return new Node(value);
		}
		if (value < node.value) {
			node.left = this._insert(node.left, value);
		} else {
			node.right = this._insert(node.right, value);
		}

		return node;
	}

	static createFromArray(arr) {
		let rootNode = new Node();
		arr.forEach(rootNode.insert.bind(rootNode));
		return rootNode.right || rootNode.left;
	}

	locate(value) {
		for (
			let node = this;
			node;
			node = value < node.value ? node.left : node.right
		) {
			if (node.value == value) return node;
		}

		return null;
	}

	locate2(value) {
		return this._locate2(this, value);
	}
	_locate2(node, value) {
		if (!node) return null;
		if (node.value == value) return node;
		if (value < node.value) return _locate2(node.left, value);

		return _locate2(node.right, value);
	}
	remove(value) {
		this._remove(this, value);
		return this;
	}
	_remove(node, value) {
		if (!node) return null;
		if (node.value == value) {
			if (!node.left) return node.right;
			if (!node.right) return node.left;
			node.left = this._lift(node.left, node);
			return node;
		} else {
			if (value < node.value) {
				node.left = this._remove(node.left, value);
			} else {
				node.right = this._remove(node.right, value);
			}
			return node;
		}
	}

	_lift(node, toRemove) {
		if (!node.right) {
			toRemove.value = node.value;
			return node.left;
		}

		node.right = this._lift(node.right, toRemove);
		return node;
	}

	print() {
		this._print(this, 0);
	}
	_print(node, spaces) {
		if (!node) return;
		spaces += 2;
		this._print(node.right, spaces);

		let msg = Array.from(new Array(spaces - 2), () => " ").join("");
		console.log(msg + node.value);
		this._print(node.left, spaces);
	}

	preorder(node, acc = []) {
		if (!node) return;
		acc.push(node.value);
		this.preorder(node.left, acc);
		this.preorder(node.right, acc);
		return acc;
	}
	inorder(node, acc = []) {
		if (!node) return;
		this.inorder(node.left, acc);
		acc.push(node.value);
		this.inorder(node.right, acc);
		return acc;
	}
	postorder(node = [], acc = []) {
		if (!node) return;
		this.postorder(node.left, acc);
		this.postorder(node.right, acc);
		acc.push(node.value);
		return acc;
	}
	reverseInorder(node) {
		if (!node) return;
		this.reverseInorder(node.right);
		console.log(node.value);
		this.reverseInorder(node.left);
	}
	minDepth(node) {
		if (!node.left && !node.right) return 0;
		if (!node.left) return 1 + this.minDepth(node.right);
		if (!node.right) return 1 + this.minDepth(node.left);

		return Math.min(this.minDepth(node.left), this.minDepth(node.right));
	}
	bfs() {
		let queue = [this];
		while (queue.length) {
			let next = queue.pop();
			if (next) {
				console.log(next.value);
				queue.unshift(next.left);
				queue.unshift(next.right);
			}
		}
	}
	printLevel(node, level, currentLevel = 0) {
		if (!node || currentLevel > level) return;
		if (currentLevel == level) {
			console.log(node.value);
			return;
		}

		this.printLevel(node.left, level, currentLevel + 1);
		this.printLevel(node.right, level, currentLevel + 1);
	}

	printLevelIter(level) {}

	maxPathSum() {
		let max = Number.MIN_SAFE_INTEGER;
		maxPathDown(this);
		function maxPathDown(node) {
			if (!node) return 0;
			let left = Math.max(0, maxPathDown(node.left));
			let right = Math.max(0, maxPathDown(node.right));
			max = Math.max(max, left + right + node.value);
			return Math.max(left, right) + node.value;
		}

		return max;
	}
}

module.exports = {
	Node
};
