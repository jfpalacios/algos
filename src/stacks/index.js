const { Node } = require('../linked_lists');

class Stack {
  top = null;
  pop() {
    if (this.top) {
      let data = this.top.data;
      this.top = this.top.next;
      return data;
    }

    return null;
  }

  push(data) {
    let next = new Node(data);
    next.next = this.top;
    this.top = next;

    return data;
  }

  isEmpty(stack = this) {
    return !stack.top;
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  peek() {
    return this.top && this.top.data;
  }

  static sort(stack) {
    let stack2 = new Stack();
    while (!stack.isEmpty()) {
      let node = stack.pop();

      while (!stack2.isEmpty() && stack2.peek() < node) {
        stack.push(stack2.pop());
      }

      stack2.push(node);
    }

    return stack2;
  }
}

// Inefficient for duplicate min values
class StackMin extends Stack {
  minStack = new Stack();
  push(data) {
    if (data <= this.min()) {
      this.minStack.push(super.push(data));
    } else {
      super.push(data);
    }
  }

  pop() {
    let val = super.pop();
    if (val == this.min()) {
      this.minStack.pop();
    }

    return val;
  }

  min() {
    if (this.minStack.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    }

    return this.minStack.top.data;
  }
}

class DoubleStack {
  stackSize = 50;
  stackTops = [-1, -1];
  storage = [];
  push(stackNum, value) {
    let top = stackNum * this.stackSize + this.stackTops[stackNum];

    this.stackTops[stackNum]++;
    this.storage[top + 1] = value;
  }

  pop(stackNum) {
    if (this.stackTops[stackNum] == -1) {
      return null;
    }

    let top = stackNum * this.stackSize + this.stackTops[stackNum];

    this.stackTops[stackNum]--;
    let value = this.storage[top];
    delete this.storage[top];
    return value;
  }
}

// Lazily build the second stack
class QueueWithStacks {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  size() {
    return this.s1.size() + this.s2.size();
  }

  enqueue(value) {
    this.s1.push(value);
  }

  peek() {
    this._transferIfNeeded();
    return this.s2.peek();
  }

  dequeue() {
    this._transferIfNeeded();
    return this.s2.pop();
  }

  _transferIfNeeded() {
    if (!this.s2.isEmpty()) {
      return this.s2.peek();
    }
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
  }
}

module.exports = {
  Stack,
  StackMin,
  DoubleStack,
  QueueWithStacks
};
