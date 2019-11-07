class Node {
  data = null;
  next = null;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  static print(node, count = 0) {
    if (!node) {
      return;
    }
    console.log(`(Node ${count}) Data: ${node.data}`);
    this.print(node.next, count + 1);
  }

  print() {
    Node.print(this);
  }

  last() {
    let node = this;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  get length() {
    return this._length(this);
  }
  _length(node) {
    if (!node) {
      return 0;
    }

    return 1 + this._length(node.next);
  }

  static removeLoop(node) {
    let looped = Node.detectLoop(node);
    if (!looped) return node;

    let ptr1 = looped;
    let ptr2 = node
    while(ptr1 != ptr2) {
      ptr1 = ptr1.next
      ptr2 = ptr2.next
    }

    ptr1.next = null
    return node;
  }

  static detectLoop(node) {
    let slow = node;
    let fast = node;
    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        break;
      }
    }

    if (slow == fast) {
      return slow;
    }

    return false
  }

  static insertRear(node, value) {
    if (!node) {
      return new Node(value);
    }

    node.next = this.insertRear(node.next, value);
    return node;
  }

  static insertOrdered(node, value) {
    if (!node || value < node.data) {
      return new Node(value, node);
    }

    node.next = this.insertOrdered(node.next, value);
    return node;
  }

  static removeFirst(node, value) {
    if (node) {
      if (value == node.data) {
        node = node.next;
      } else {
        node.next = this.removeFirst(node.next, value);
      }
    }

    return node;
  }

  static removeAll(node, value) {
    if (!node) {
      return;
    }

    if (value == node.data) {
      return this.removeAll(node.next, value);
    } else {
      node.next = this.removeAll(node.next, value);
      return node;
    }
  }

  static reverseIterative(node) {
    let current = node;
    let next = null;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  static reverseRecursive(node) {
    if (!node || !node.next) {
      return node;
    }

    let reversed = this.reverseRecursive(node.next);

    node.next.next = node;
    node.next = null;
    return reversed;
  }

  static reverseRecursive2(node, prev) {
    if (!node) {
      return prev;
    }
    let next = node.next;
    node.next = prev;
    return this.reverseRecursive2(next, node);
  }

  static randomOnePass(node) {
    let result = node;
    for (var i = 1; node; i++) {
      if (this.randomInt(0, i) == 0) {
        result = node;
      }
      node = node.next;
    }

    return result;
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static removeDuplicates(head) {
    let prev = head;
    let current = head.next;
    while (current) {
      let runner = head;
      while (runner != current) {
        if (runner.data == current.data) {
          prev.next = current.next;
          current = current.next;
          break;
        }

        runner = runner.next;
      }

      if (runner == current) {
        prev = current;
        current = current.next;
      }
    }

    return head;
  }

  static removeDuplicates2(head) {
    let visited = {};
    let prev = null;
    let current = head;
    while (current) {
      if (visited[current.data]) {
        prev.next = current.next;
      } else {
        visited[current.data] = true;
        prev = current;
      }

      current = current.next;
    }

    return head;
  }

  static nthToLast(head, n) {
    let runner1 = head;
    let runner2 = head;

    for (var i = 0; i <= n; i++) {
      if (!runner1) return null;
      runner1 = runner1.next;
    }

    while (runner1) {
      runner1 = runner1.next;
      runner2 = runner2.next;
    }

    return runner2;
  }

  static nthToLast2(head, n) {
    return Node._nthToLast(head, n)[1];
  }

  static _nthToLast(node, n) {
    if (!node.next) {
      return n == 0 ? [0, node] : [0, null];
    }

    let [level, n1] = Node._nthToLast(node.next, n);
    if (++level == n) return [level, node];

    return [level, n1];
  }

  static removeNode(node) {
    if (!node.next) return -1;
    node.data = node.next.data;
    node.next = node.next.next;
    return true;
  }
}

class LinkedList {
  head = null;
  constructor(node) {
    this.head = node;
  }

  add(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  isEmpty() {
    return !this.head;
  }

  removeFirst() {
    if (!this.head) return null;
    let node = this.head;
    this.head = this.head.next;
    return node;
  }

  static createRandom(n, step = 1) {
    let list = new LinkedList();
    for (var i = 0; i < n; i++) {
      list.pushData(i * step);
    }

    return list;
  }

  static createString(str) {
    let list = new LinkedList();
    let head = new Node(0);
    let current = head;
    str.split("").forEach(c => {
      let node = new Node(c);
      current.next = node;
      current = node;
    });
    list.head = head.next;
    return list;
  }

  static createNumber(number, { leastFirst = false } = {}) {
    let list = new LinkedList();
    let chars = number.toString().split("");
    if (leastFirst) chars = chars.reverse();

    chars.forEach(digit => {
      list.pushData(parseInt(digit));
    });

    return list;
  }

  pushData(data) {
    let nextNode = new Node(data);

    if (!this.head) {
      this.head = nextNode;
      return this.head;
    }

    let node = this.head;
    while (node) {
      if (node.next) {
        node = node.next;
      } else {
        node.next = nextNode;
        break;
      }
    }

    return node;
  }

  indexOf(node) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (node == current) return count;
      current = current.next;
      count++;
    }

    return -1;
  }

  getNumber(reversed) {
    let node = this.head;
    let result = [];
    while (node) {
      result.push(node.data);
      node = node.next;
    }

    if (!reversed) {
      result = result.reverse();
    }

    return parseInt(result.join(""));
  }

  get length() {
    return this.recursiveLength(this.head);
  }

  recursiveLength(node) {
    if (!node) {
      return 0;
    }

    return 1 + this.recursiveLength(node.next);
  }

  get sum() {
    this.recursiveSum(this.head);
  }

  recursiveSum(node) {
    if (!node) {
      return 0;
    }

    return node.data + this.recursiveSum(node.next);
  }

  print() {
    let node = this.head;
    let count = 0;
    while (node) {
      console.log(`(Node ${count}) data: ${node.data}`);
      node = node.next;
      count++;
    }
    console.log("\r");

    return;
  }

  get recursivePrint() {}

  _recursivePrint(node, reverse) {
    if (node) {
      return;
    }
    if (reverse) {
      this._recursivePrint(node.next);
      console.log(`(Node) data: ${node.data}`);
    } else {
      console.log(`(Node) data: ${node.data}`);
      this._recursivePrint(node.next);
    }
  }

  // recursive -> iterative+stack
  reversePrintIterative() {
    let node = this.head;
    let stack = [];
    for (; node; node = node.next) {
      stack.push(node);
    }
    while (stack.length) {
      let node = stack.pop();
      console.log(`(Node) data: ${node.data}`);
    }
  }

  static copyFromNode(node) {
    if (!node) {
      return null;
    }

    return new Node(node.data, this.copyFromNode(node.next));
  }

  static mergeSort(node) {
    if (node.next == null) {
      return node;
    }

    let oldHead = node;
    let length = Math.floor(node.length / 2);
    for (; length - 1 > 0; length--) {
      oldHead = oldHead.next;
    }
    let newHead = oldHead.next;
    oldHead.next = null;
    oldHead = node;

    let t1 = LinkedList.mergeSort(oldHead);
    let t2 = LinkedList.mergeSort(newHead);

    return LinkedList._merge(t1, t2);
  }

  static _merge(l1, l2) {
    let node = new Node();
    let head = node;

    while (l1 && l2) {
      node.next = new Node();
      node = node.next;
      if (l1.data > l2.data) {
        node.data = l2.data;
        l2 = l2.next;
      } else {
        node.data = l1.data;
        l1 = l1.next;
      }
    }

    if (l1) {
      node.next = l1;
    } else {
      node.next = l2;
    }

    return head.next;
  }

  static addTwoNumbers(list1, list2) {
    let l1 = list1.head;
    let l2 = list2.head;

    if (l1 == null) {
      return list2;
    }

    if (l2 == null) {
      return list1;
    }

    let remainder = 0;
    let current = new Node(0);
    const rootNode = current;
    while (l1 || l2 || remainder) {
      let value1 = 0,
        value2 = 0;
      if (l1) {
        value1 = l1.data;
        l1 = l1.next;
      }

      if (l2) {
        value2 = l2.data;
        l2 = l2.next;
      }

      let sum = value1 + value2 + remainder;
      remainder = sum >= 10 ? 1 : 0;
      let val = sum % 10;
      current.next = new Node(val);
      current = current.next;
    }

    return new LinkedList(rootNode.next);
  }

  static compareStrings(list1, list2) {
    let l1 = list1.head;
    let l2 = list2.head;

    while (l1 && l2 && l1.data == l2.data) {
      l1 = l1.next;
      l2 = l2.next;
    }

    // char mismatch
    if (l1 && l2) {
      return l1.data.charCodeAt(0) > l2.data.charCodeAt(0) ? 1 : -1;
    }

    if (l1 && !l2) return 1;
    if (l2 && !l1) return -1;

    // Both lists reached end
    return 0;
  }

  static addTwoNumbersRecursive(list1, list2) {
    // prep
    let l1 = list1.head;
    let l2 = list2.head;
    let current = new Node(0);
    function add(l1, l2, current, carry) {
      if (!l1 && !l2 && !carry) {
        return current;
      }

      let v1 = 0,
        v2 = 0;
      if (l1) {
        v1 = l1.data;
        l1 = l1.next;
      }

      if (l2) {
        v2 = l2.data;
        l2 = l2.next;
      }

      const sum = v1 + v2 + carry;
      carry = sum >= 10 ? 1 : 0;
      const value = sum % 10;
      current.next = new Node(value);
      current = current.next;

      return add(l1, l2, current, carry);
    }

    add(l1, l2, current);
  }

  static insertIntoSorted(list, node) {
    if (list.length == 0) {
      list.head = node;
      return list;
    }

    if (list.head.data > node.data) {
      node.next = list.head;
      list.head = node;
      return list;
    }

    let current = list.head;
    while (current.next && current.next.data < node.data) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return list;
  }

  static deleteNodeData(list, data) {
    if (data == list.head.data) {
      const toDelete = list.head.data;
      list.head = list.head.next;

      return toDelete;
    }

    let current = list.head;
    while (current.next && current.next.data != data) {
      current = current.next;
    }

    if (current.next == null) {
      return -1;
    }

    let toDelete = current.next.data;
    current.next = current.next.next;

    return toDelete;
  }
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};
