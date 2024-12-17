/**
 * Class representing a Queue data structure.
 */
export class Queue {
  arr = [];

  /**
   * Adds a value to the end of the queue.
   * @param {any} value - The value to be added to the queue.
   * @returns {number} The new length of the queue.
   */
  enqueue(value) {
    return this.arr.push(value);
  }

  /**
   * Removes and returns the value at the front of the queue.
   * @returns {any} The value removed from the queue, or `undefined` if the queue is empty.
   */
  dequeue() {
    return this.arr.shift();
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns {any} The value at the front of the queue, or `undefined` if the queue is empty.
   */
  peek() {
    return this.arr.at(0);
  }
  /**
   * Gets the current number of elements in the queue.
   * @returns {number} The number of elements in the queue.
   */
  get length() {
    return this.arr.length;
  }
}

// Example usage
// const queue = new Queue();
// queue.enqueue(4);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(1);
// console.log(queue.dequeue()); // 4
// console.log(queue.dequeue()); // 2
// console.log(queue.dequeue()); // 3
// console.log(queue.peek()); // 5
// console.log(queue.length); // 2
