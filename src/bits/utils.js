function toBinary(bit, msg) {
  return `${(bit >>> 0).toString(2)} ${msg || ''}`;
}

module.exports = {
  toBinary
};
