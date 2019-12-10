function countOnes(num) {
  let count = 0;
  while (num > 0) {
    // reduces a single 1 bit
    num = num & (num - 1);
    count++;
  }

  return count;
}

module.exports = countOnes;
