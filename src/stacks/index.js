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
}

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

class EfficientStackNode {
  previous = 0;
  data = 0;
  constructor(data, previous) {
    this.data = data;
    this.previous = previous;
  }
}

class DoubleStackEfficient {
  push(stackNum, value) {}
  pop(stackNum) {}
}

module.exports = {
  Stack,
  StackMin,
  DoubleStack
};
