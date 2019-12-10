const { logBit } = require('./utils.js');

// start inclusive, end exclusive
function clearBits(bit, start, end) {
  let allOnes = ~0;
  let left = allOnes << (start + 1);
  let right = (1 << end) - 1;
  let mask = left | right;

  return bit & mask;
}

console.log(clearBits(255, 8, 7)); // 127

module.exports = clearBits;
