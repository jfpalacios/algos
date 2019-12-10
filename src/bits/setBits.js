// start inclusive, end exclusive
function setBits(bit, start, end) {
  let onesFromStart = (1 << (start + 1)) - 1;
  let zeroesFromEnd = ~0 << end;
  let mask = onesFromStart & zeroesFromEnd;

  return bit | mask;
}

module.exports = setBits;
