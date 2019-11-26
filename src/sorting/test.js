const {
  mergeSort,
  insertionSort,
  quicksort,
  bubbleSort,
  heapSort
} = require("./");

describe("Sorting", () => {
  it("mergeSorts", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
    let sorted = mergeSort(list);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("insertionSorts", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
    let sorted = insertionSort(list);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("quickSorts", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
    let sorted = quicksort(list);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("bubbleSorts", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
    let sorted = bubbleSort(list);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("heapSorts", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
    let sorted = heapSort(list);
    expect(sorted).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("All get same results on large array", () => {
    let random = [].random(10);
    let result1 = bubbleSort(random);
    let result2 = quicksort(random);
    let result3 = mergeSort(random);
    let result4 = insertionSort(random);
    expect(result1).to.deep.equal(result2);
    expect(result2).to.deep.equal(result3);
    expect(result3).to.deep.equal(result4);
  });
});
