// best O(n)
// Average O(n^2)
// Worst O(n^2)
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let val = arr[i];
    let j = i - 1;
    while (j >= 0 && val < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = val;
  }

  return arr;
}

// Best, Average, Worst O(n log n)
function mergeSort(arr) {
  function ms(arr) {
    if (arr.length == 1) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let s1 = ms(arr.slice(0, mid));
    let s2 = ms(arr.slice(mid));

    return merge(s1, s2);
  }

  function merge(a, b) {
    let result = [];
    let l = 0,
      r = 0;
    while (l < a.length && r < b.length) {
      if (a[l] > b[r]) {
        result.push(b[r]);
        r++;
      } else {
        result.push(a[l]);
        l++;
      }
    }

    return result.concat(a.slice(l), b.slice(r));
  }

  return ms(arr);
}

// Best O(n log n)
// Average O(n log n)
// Worst O(n^2)
//
// Vs MergeSort
// low Space, worst case improves with right pivot
// Merge sort is stable, quicksort is not
function quicksort(arr) {
  function qs(arr, low, high) {
    if (low >= high) return;

    let pi = partition(arr, low, high);
    qs(arr, low, pi - 1);
    qs(arr, pi + 1, high);
  }

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i++;
      }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
  }

  qs(arr, 0, arr.length - 1);
  return arr;
}

function bubbleSort(arr) {
  let cleanPass = false;
  while (!cleanPass) {
    cleanPass = true;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        cleanPass = false;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }

  return arr;
}

function heapSort(arr, logging) {
  function heapify(arr, n, i, logging) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (logging) {
      console.log(arr);
      console.log(`i: (${i}) ${arr[i]}`);
      console.log(`left (${left}) ${arr[left]}`);
      console.log(`right (${right}) ${arr[right]}`);
    }

    if (left < n && arr[largest] < arr[left]) {
      logging && console.log(`Largest Left: ${arr[left]} > ${arr[i]}`);
      largest = left;
    }

    if (right < n && arr[largest] < arr[right]) {
      logging && console.log(`Largest Right: ${arr[right]} > ${arr[i]}`);
      largest = right;
    }

    if (largest != i) {
      logging && console.log("Pre swap", arr);
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      if (logging) {
        console.log("Post swap", arr);
        console.log("RECURSING i", largest);
        console.log("-------");
      }
      heapify(arr, n, largest, logging);
    }

    logging && console.log("-------");
  }

  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  for (var i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }

  return arr;
}

module.exports = {
  mergeSort,
  insertionSort,
  quicksort,
  bubbleSort,
  heapSort
};
