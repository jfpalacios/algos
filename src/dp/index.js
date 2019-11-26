function longestCommonSubsequence(a, b) {
  let grid = Array.from(Array(a.length + 1), () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] == b[j - 1]) {
        // When the characters are equal, get diagonal (up-left) value + 1
        grid[i][j] = grid[i - 1][j - 1] + 1;
      } else {
        // When unequal, get max of left or above sequence
        grid[i][j] = Math.max(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }

  return grid[a.length][b.length]
}

// O(n^2)
function longestIncreasingSubsequence(arr) {
  let lis = Array.from(Array(arr.length), () => 1);
  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < i; j++) {
      if(arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1
      }
    }
  }

  return Math.max(...lis);
}

console.log(longestIncreasingSubsequence([1, 2, 6, 3, 4]))

