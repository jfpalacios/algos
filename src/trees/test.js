const { Node } = require("./");

describe("BST", function() {
	it("returns proper height", function() {
		let tree = Node.createFromArray([10, 5, 6, 3, 7, 1]);
	});

	it("preorder returns a copy", function() {
		// Preorder does not guarantee order of insert, only end result
		let tree = Node.createFromArray([10, 5, 6, 3, 7, 1]);
		let arr = tree.preorder(tree)

		let nextTree = Node.createFromArray(arr);
		let arr2 = tree.preorder(tree)

		expect(arr).to.deep.equal(arr2)
	});
});
