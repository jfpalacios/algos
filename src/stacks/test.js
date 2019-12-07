const { Stack, StackMin, DoubleStack, QueueWithStacks } = require('./index.js');

describe('Stacks', function() {
  describe('Stack Min', function() {
    it('Functions as a stack', function() {
      let stackMin = new StackMin();
      stackMin.push(10);
      stackMin.push(20);
      stackMin.push(5);
      stackMin.push(3);
      expect(stackMin.pop()).to.equal(3);
      expect(stackMin.pop()).to.equal(5);
      expect(stackMin.pop()).to.equal(20);
      expect(stackMin.pop()).to.equal(10);
      expect(stackMin.pop()).to.be.null;
      stackMin.push(10);
      stackMin.push(20);
      expect(stackMin.pop()).to.equal(20);
    });

    it('Tracks min value', function() {
      let stackMin = new StackMin();
      stackMin.push(10);
      stackMin.push(3);
      stackMin.push(20);
      stackMin.push(5);
      expect(stackMin.min()).to.equal(3);
      stackMin.pop();
      expect(stackMin.min()).to.equal(3);
      stackMin.pop();
      stackMin.pop();
      expect(stackMin.min()).to.equal(10);
      stackMin.pop();
      expect(stackMin.min()).to.equal(Number.MAX_SAFE_INTEGER);
    });
  });

  describe('DoubleStack', function() {
    it('Functions as a stack', function() {
      let doubleStack = new DoubleStack();
      doubleStack.push(0, 5);
      doubleStack.push(0, 10);
      doubleStack.push(0, 15);
      doubleStack.push(1, 20);
      doubleStack.push(1, 30);
      doubleStack.push(1, 40);
      expect(doubleStack.pop(0)).to.equal(15);
      expect(doubleStack.pop(0)).to.equal(10);
      expect(doubleStack.pop(0)).to.equal(5);
      expect(doubleStack.pop(0)).to.be.null;
      expect(doubleStack.pop(1)).to.equal(40);
      expect(doubleStack.pop(1)).to.equal(30);
      expect(doubleStack.pop(1)).to.equal(20);
      expect(doubleStack.pop(1)).to.be.null;
    });
  });

  describe('QueueWithStacks', () => {
    it('Works as a standard queue', () => {
      let q = new QueueWithStacks();
      q.enqueue(10);
      q.enqueue(15);
      q.enqueue(20);
      expect(q.size()).to.equal(3);
      expect(q.dequeue()).to.equal(10);
      expect(q.dequeue()).to.equal(15);
      expect(q.dequeue()).to.equal(20);
      expect(q.dequeue()).to.be.null;
    });
  });

  describe('StackSort', () => {
    it('Sorts stacks ascending', () => {
      let stack = new Stack();
      [10, 15, 90, 0, -30].forEach(num => stack.push(num));
      let sorted = Stack.sort(stack);
      expect(sorted.pop()).to.equal(-30);
      expect(sorted.pop()).to.equal(0);
      expect(sorted.pop()).to.equal(10);
      expect(sorted.pop()).to.equal(15);
      expect(sorted.pop()).to.equal(90);
    });
  });
});
