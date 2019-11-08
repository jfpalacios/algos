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

  describe("Linked list as stack", () => {
    it("adds to front", () => {
      let ll = new LL();
      ll.add("A");
      ll.add("B");
      expect(ll.head.data).to.equal("B");
      expect(ll.head.next.data).to.equal("A");
    });

    it("removes from front", () => {
      let ll = new LL();
      ll.add("A");
      ll.add("B");
      ll.add("C");
      expect(ll.head.data).to.equal("C");
      ll.removeFirst();
      expect(ll.head.data).to.equal("B");
      ll.removeFirst();
      expect(ll.head.data).to.equal("A");
    });

    it("detects empty", () => {
      let ll = new LL();
      expect(ll.length).to.equal(0);
      expect(ll.isEmpty()).to.equal(true);
      ll.add("A");
      expect(ll.isEmpty()).to.equal(false);
      ll.removeFirst();
      expect(ll.isEmpty()).to.equal(true);
    });
  });

  describe("Algos", () => {
    it("Nth to last iterative", () => {
      let ll = LL.createNumber(123456789);
      expect(Node.nthToLast2(ll.head, 0).data).to.equal(9);
      expect(Node.nthToLast2(ll.head, 1).data).to.equal(8);
      expect(Node.nthToLast2(ll.head, 2).data).to.equal(7);
      expect(Node.nthToLast2(ll.head, 3).data).to.equal(6);
      expect(Node.nthToLast2(ll.head, 8).data).to.equal(1);
    });

    it("Nth to last recusrive", () => {
      let ll = LL.createNumber(123456789);
      expect(Node.nthToLast(ll.head, 0).data).to.equal(9);
      expect(Node.nthToLast(ll.head, 1).data).to.equal(8);
      expect(Node.nthToLast(ll.head, 2).data).to.equal(7);
      expect(Node.nthToLast(ll.head, 3).data).to.equal(6);
      expect(Node.nthToLast2(ll.head, 8).data).to.equal(1);
    });

    it("Detect and remove Loop", () => {
      let ll = LL.createNumber(123456789);
      expect(Node.detectLoop(ll.head)).to.be.false;

      // create loop
      let last = Node.nthToLast(ll.head, 0);
      last.next = Node.nthToLast(ll.head, 4); // 9 -> 5
      expect(!!Node.detectLoop(ll.head)).to.be.true;

      // remove loop
      let fixedList = Node.removeLoop(ll.head);
      expect(Node.detectLoop(fixedList)).to.be.false;
      expect(Node.nthToLast(fixedList, 0).next).to.be.null;
    });
  });
});
