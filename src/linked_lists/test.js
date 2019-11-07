const { Node, LinkedList } = require("./");
const LL = LinkedList;

describe("LinkedLists", () => {
  describe("Insert Node Into Sorted Set", () => {
    let list = LL.createRandom(10);
    it("Inserts in center", () => {
      let node = new Node(5);
      list = LL.insertIntoSorted(list, node);
      expect(list.indexOf(node)).to.equal(5);
    });
    it("Inserts node at head", () => {
      let node = new Node(-1);
      list = LL.insertIntoSorted(list, node);
      expect(list.head).to.equal(node);
    });
    it("Inserts at end", () => {
      let node = new Node(100);
      list = LL.insertIntoSorted(list, node);
      expect(list.indexOf(node)).to.equal(list.length - 1);
    });
  });

  describe("Sorted Numbers", () => {
    let list = LL.createRandom(10);
    it("delete node at position", () => {
      expect(LL.deleteNodeData(list, 5)).to.equal(5);
    });
    it("delete head node", () => {
      expect(LL.deleteNodeData(list, 0)).to.equal(0);
    });
    it("delete non existent node", () => {
      expect(LL.deleteNodeData(list, 57)).to.equal(-1);
    });
  });

  describe("String comparisons", () => {
    it("lexicographic comparison", () => {
      let l1 = LL.createString("function");
      let l2 = LL.createString("funcshin");
      expect(LL.compareStrings(l1, l2)).to.equal(1);
    });

    it("lexicographic comparison swapped", () => {
      let l1 = LL.createString("function");
      let l2 = LL.createString("funcshin");
      expect(LL.compareStrings(l2, l1)).to.equal(-1);
    });

    it("equal strings", () => {
      let l1 = LL.createString("list");
      let l2 = LL.createString("list");
      expect(LL.compareStrings(l1, l2)).to.equal(0);
    });
    it("shorter string", () => {
      let l1 = LL.createString("lis");
      let l2 = LL.createString("list");
      expect(LL.compareStrings(l1, l2)).to.equal(-1);
    });
    it("longer string", () => {
      let l1 = LL.createString("list");
      let l2 = LL.createString("lis");
      expect(LL.compareStrings(l1, l2)).to.equal(1);
    });
  });

  describe("Add numbers", () => {
    it("equal size no remainders", () => {
      let l1 = LL.createNumber(300, { leastFirst: true });
      let l2 = LL.createNumber(400, { leastFirst: true });
      let num = LL.addTwoNumbers(l1, l2).getNumber();

      expect(num).to.equal(700);
    });
    it("equal size remainder", () => {
      let l1 = LL.createNumber(360, { leastFirst: true });
      let l2 = LL.createNumber(460, { leastFirst: true });
      let num = LL.addTwoNumbers(l1, l2).getNumber();

      expect(num).to.equal(820);
    });
    it("unequal sizes", () => {
      let l1 = LL.createNumber(1234, { leastFirst: true });
      let l2 = LL.createNumber(9, { leastFirst: true });
      let num = LL.addTwoNumbers(l1, l2).getNumber();

      expect(num).to.equal(1243);
    });
    it("One empty node", () => {
      let l1 = new LL();
      let l2 = LL.createNumber(9, { leastFirst: true });
      let num = LL.addTwoNumbers(l1, l2).getNumber();

      expect(num).to.equal(9);
    });
  });
});
