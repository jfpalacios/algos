function isPowerOfTwo(num) {
  // A number that is a power of 2 only has 1 bit on, so all
  // bits to right will be one for (n - 1)
  // AND should produce 0
  return (num & (num - 1)) == 0;
}

module.exports = isPowerOfTwo;
