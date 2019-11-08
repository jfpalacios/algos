const { rotate90, setZeroes, binarySearch } = require("./index.js");

describe("Arrays", function() {
  it("rotate90 rotates nxn array 90 degrees", function() {
    let rotation = rotate90([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]);
    expect(rotation).to.deep.equal([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]);
  });

  it("setZeroes properly sets zeroes for rows/columns", function() {
    let result = setZeroes([
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 0]
    ]);
    expect(result).to.deep.equal([
      [1, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0]
    ]);
  });

  it("binary search", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(arr, 5)).to.equal(4);
    expect(binarySearch(arr, 10)).to.equal(9);
    expect(binarySearch(arr, 0)).to.be.null;
  });
});
