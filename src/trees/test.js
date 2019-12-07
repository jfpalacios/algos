const { Node } = require('./index.js');
const { MaxHeap } = require('./heap');

describe('BST', function() {
  it('returns proper height', function() {
    let tree = Node.createFromArray([10, 5, 6, 3, 7, 1]);
    expect(tree.height).to.equal(3);
  });

  it('preorder returns a copy', function() {
    // Preorder does not guarantee order of insert, only end result
    let tree = Node.createFromArray([10, 5, 6, 3, 7, 1]);
    let arr = tree.preorder(tree);

    let nextTree = Node.createFromArray(arr);
    let arr2 = tree.preorder(tree);

    expect(arr).to.deep.equal(arr2);
  });

  it('can detect proper BST', () => {
    let pre = [43, 15, 8, 30, 20, 35, 60, 50, 82, 72];
    expect(Node.canRepresentBST(pre)).to.be.true;
    expect(Node.canRepresentBST([40, 30, 35, 20, 80, 100])).to.be.false;
  });

  it('isFullTree', () => {
    let pre = [43, 15, 8, 30, 20, 35, 60, 50, 82, 72];
    expect(Node.createFromArray(pre).isFullTree()).to.be.false;

    let pre2 = [43, 15, 8, 30, 20, 35, 60, 50, 82];
    expect(Node.createFromArray(pre2).isFullTree()).to.be.true;
  });

  it('Presents BFS', () => {
    let tree = [43, 15, 8, 30, 20, 35, 60, 50, 82, 70];
    let results = Node.createFromArray(tree).bfs();
    expect(results).to.deep.equal([43, 15, 60, 8, 30, 50, 82, 20, 35, 70]);
  });

  it('minDepth & maxDepth', () => {
    let pre2 = [50, 40, 60, 70, 80];
    let tree = Node.createFromArray(pre2);

    expect(tree.minDepth(tree)).to.equal(2);
    expect(tree.maxDepth(tree)).to.equal(4);
  });

  it('isBalancedTree', () => {
    let pre = [50, 40, 60, 70, 80];
    let tree = Node.createFromArray(pre);

    expect(tree.isBalancedTree()).to.be.false;

    let pre2 = [50, 40, 45, 30, 20, 60, 55, 70];
    let tree2 = Node.createFromArray(pre2);
    tree2.print();
    expect(tree2.isBalancedTree()).to.be.true;
  });
});
