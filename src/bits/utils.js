function logBit(bit, msg) {
  console.log(`${(bit >>> 0).toString(2)} ${msg || ''}`);
}

module.exports = {
  logBit
};
