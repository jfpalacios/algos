function setZeroes(matrix) {
  let toSetZero = {
    rows: new Set(),
    columns: new Set()
  };
  let height = matrix.length;
  let width = matrix[0].length;
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (matrix[i][j] == 0) {
        toSetZero.rows.add(i);
        toSetZero.columns.add(j);
      }
    }
  }

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (toSetZero.rows.has(i) || toSetZero.columns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function rotate90(matrix) {
  // n X n
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    let offset = 0;
    for (var i = layer; i < last; i++) {
      // top
      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];

      // left
      matrix[last - offset][first] = matrix[last][last - offset];

      // bottom
      matrix[last][last - offset] = matrix[i][last];

      // right
      matrix[i][last] = top;

      offset++;
    }
  }

  return matrix;
}

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] == num) return mid;
    if (arr[mid] < num) left = mid + 1;
    if (arr[mid] > num) right = mid - 1;
  }

  return null;
}

function binarySearch2(arr, num, left, right) {
  if (left > right) return null;

  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] == num) return mid;
  if (num > arr[mid]) return binarySearch2(arr, num, mid + 1, right);
  if (num < arr[mid]) return binarySearch2(arr, num, left, mid - 1);

  return null;
}

module.exports = {
  setZeroes,
  rotate90,
  binarySearch,
  binarySearch2
};
