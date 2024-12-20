/**
 * MaxHeap
 * A maximum heap implementation where the largest value is always at the root.
 **/
class MaxHeap {
  arr = [];

  /**
   * Moves an element up in the heap to restore heap property.
   * @param {number} index - Index of the element to heapify up.
   * @private
   */
  #heapifyUp(index) {
    if (index === 0) return;
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.arr[index] > this.arr[parentIndex]) {
      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];
      this.#heapifyUp(parentIndex);
    }
  }

  /**
   * Inserts a new value into the heap and restores heap property.
   * @param {number} value - Value to insert.
   * @returns {number} - The new length of the heap.
   */
  insert(value) {
    let index = this.arr.push(value);
    this.#heapifyUp(index - 1);
    return this.length;
  }

  /**
   * Moves an element down in the heap to restore heap property.
   * @param {number} index - Index of the element to heapify down.
   * @private
   */
  #heapifyDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    const leftChild = this.arr[leftIndex];
    const rightChild = this.arr[rightIndex];

    if (leftChild === undefined && rightChild === undefined) return;
    let childIndex;
    if (rightChild === undefined || (leftChild !== undefined && leftChild > rightChild)) {
      childIndex = leftIndex;
    } else {
      childIndex = rightIndex;
    }

    if (this.arr[index] >= this.arr[childIndex]) return;
    [this.arr[index], this.arr[childIndex]] = [this.arr[childIndex], this.arr[index]];
    this.#heapifyDown(childIndex);
  }

  /**
   * Removes and returns the root of the heap.
   * @returns {number|null} - The removed root value, or null if the heap is empty.
   */
  remove() {
    if (this.arr.length === 0) return null;
    const root = this.arr[0];
    if (this.arr.length === 1) {
      this.arr.pop();
    } else {
      this.arr[0] = this.arr.pop();
      this.#heapifyDown(0);
    }
    return root;
  }

  /**
   * Searches for a value in the heap.
   * @param {number} value - Value to search for.
   * @returns {number} - Index of the value, or -1 if not found.
   */
  search(value) {
    return this.arr.indexOf(value);
  }

  /**
   * Updates a value in the heap with a new value and restores heap property.
   * @param {number} value - The value to update.
   * @param {number} newValue - The new value to replace the old value.
   * @returns {boolean} - True if the update was successful, false otherwise.
   */
  update(value, newValue) {
    const index = this.search(value);
    if (index === -1) return false;

    this.arr[index] = newValue;
    if (newValue > this.arr[index / 2 - 1]) {
      this.#heapifyUp(index);
    } else {
      this.#heapifyDown(index);
    }
    return true;
  }

  /**
   * Removes a specific value from the heap and restores heap property.
   * @param {number} value - The value to remove.
   * @returns {boolean} - True if the value was removed, false otherwise.
   */
  removeValue(value) {
    const index = this.search(value);
    if (index === -1) return false;

    if (index === this.arr.length - 1) {
      this.arr.pop();
    } else {
      this.arr[index] = this.arr.pop();
      this.#heapifyDown(index);
    }
    return true;
  }

  /**
   * Gets the current length of the heap.
   * @returns {number} - The number of elements in the heap.
   */
  get length() {
    return this.arr.length;
  }
}

// Example Usage
const heap = new MaxHeap();
heap.insert(5); // Insert 5
heap.insert(7); // Insert 7
heap.insert(3); // Insert 3
heap.insert(12); // Insert 12
heap.insert(4); // Insert 4

console.log(heap.arr); // [12, 7, 3, 5, 4]
heap.remove(); // Remove root (12)
console.log(heap.arr); // [7, 5, 3, 4]

heap.update(5, 10); // Update value 5 to 10
console.log(heap.arr); // [10, 7, 3, 4]

heap.removeValue(7); // Remove value 7
console.log(heap.arr); // [10, 4, 3]
