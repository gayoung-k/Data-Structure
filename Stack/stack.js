/**
 * Class representing a Stack data structure.
 */
class Stack {
  arr = [];

  /**
   * Pushes a value onto the stack.
   * @param {any} value - The value to be added to the stack.
   * @returns {number} The new length of the stack.
   */
  push(value) {
    return this.arr.push(value);
  }

    /**
   * Removes and returns the top value from the stack.
   * @returns {any} The value removed from the stack, or `undefined` if the stack is empty.
   */
  pop() {
    return this.arr.pop();
  }

    /**
   * Returns the top value of the stack without removing it.
   * @returns {any} The top value of the stack, or `undefined` if the stack is empty.
   */
  top() {
    return this.arr.at(-1);
  }

    /**
   * Gets the current number of elements in the stack.
   * @returns {number} The number of elements in the stack.
   */
  get length() {
    return this.arr.length;
  }
}

// Example usage
const stack = new Stack();
stack.push(4);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(1);
console.log(stack.pop()); // 1
console.log(stack.pop()); // 5
console.log(stack.pop()); // 3
console.log(stack.top()); // 2
console.log(stack.length); // 2
