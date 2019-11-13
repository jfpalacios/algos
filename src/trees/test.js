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

	it("can detect proper BST", () => {
		let pre = [43 , 15 ,8, 30, 20, 35, 60, 50, 82, 72];
		expect(Node.canRepresentBST(pre)).to.be.true
		// expect(Node.canRepresentBST([40 , 30 , 35 , 20 ,  80 , 100])).to.be.false
	});
});
