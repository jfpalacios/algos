class MaxHeap {
  constructor(heap = []) {
    this.heap = heap;

    for(let i = Math.floor(heap.length / 2); i >= 0; i--) {
      this.heapifyTopDown(this.heap, this.heap.length, i);
    }
  }

  parent(i) {
    return Math.floor(i - 1 / 2);
  }

  insertNode(value) {
    this.heap.push(value);
    this.heapifyBottomUp(this.heap, this.heap.length, this.heap.length - 1);
  }

  heapifyBottomUp(heap, n, i) {
    let parent = this.parent(i)

    if (heap[parent] > 0 && heap[i] > heap[parent]) {
      [heap[i], heap[parent]] = [heap[parent], heap[i]];
      this.heapifyBottomUp(heap, n, parent);
    }
  }

  heapifyTopDown(heap, n, i) {
    let largest = i;
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;
    
    if (left < n && heap[largest] < heap[left]) {
      largest = left;
    }

    if (right < n && heap[largest] < heap[right]) {
      largest = right;
    }

    if (largest != i) {
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      this.heapifyTopDown(heap, n, largest);
    }
  }
}

module.exports = {
  MaxHeap
}
