function binaryToDecimal(str) {
  // quick js solution : parseInt(binary, 2);
  let sum = 0;
  for (let i in str) {
    let val = parseInt(str[i]);
    sum += val * Math.pow(2, str.length - i - 1);
  }

  return sum;
}

module.exports = binaryToDecimal;
