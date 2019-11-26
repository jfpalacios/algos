// set global for tests
expect = require("chai").expect;

Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    [this[i], this[index]] = [this[index], this[i]]
  }
  
  return this;
};

// Utils
Array.prototype.random = function(n, min = 0, max = 100) {
  return Array.from(new Array(n), () =>
    Math.floor(Math.random() * (max - min) + min)
  );
};

Array.prototype.isEqual = function(arr) {
  if (this.length != arr.length) return false;
  // flattened naive equal to work with multidimensional
  let arr1 = arr.flat(Number.Infinity);
  let arr2 = this.flat(Number.Infinity);

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
};
