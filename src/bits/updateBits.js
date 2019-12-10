function updateBits(bit1, bit2, i, j) {
  // All 1's
  let allOnes = ~0;

  // r inclusive
  let left = allOnes - ((1 << i) - 1);
  // another way
  left = allOnes << (j + 1);

  let right = (1 << i) - 1;

  // All ones except between i and j
  let mask = left | right;

  let maskedN = bit1 & mask;

  let shiftedM = bit2 << i;

  return maskedN | shiftedM;
}

module.exports = updateBits;
