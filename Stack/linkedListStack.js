/**
 * A Stack implementation using a linked list.
 */
class Stack {
  constructor() {
    this.top = null;
    this._length = 0;
  }

  /**
   * Removes and returns the top value of the stack.
   * @returns {any | null} The value of the removed top node, or null if the stack is empty.
   */
  pop() {
    if (!this.top) return null;
    const node = this.top;
    this.top = this.top.next;
    this._length--;
    return node.value;
  }

  /**
   * Adds a new value to the top of the stack.
   * @param {any} value - The value to add to the stack.
   * @returns {number} The new length of the stack.
   */
  push(value) {
    this.top = new Stack.Node(value, this.top);
    this._length++;
    return this._length;
  }

  /**
   * Returns the top value of the stack without removing it.
   * @returns {any | null} The value of the top node, or null if the stack is empty.
   */
  peek() {
    return this.top?.value;
  }

  /**
   * Gets the current length of the stack.
   * @returns {number} The number of elements in the stack.
   */
  get length() {
    return this._length;
  }
}
/**
 * A Node in the Stack.
 * @private
 */
Stack.Node = class {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

// Example usage
const lls = new Stack();
lls.push(4);
lls.push(3);
lls.push(5);
lls.push(1);
lls.push(2);

console.log(lls.pop()); //2
console.log(lls.pop()); //1
console.log(lls.peek()); //5
console.log(lls.pop()); //5

console.log(lls.length); // 2

console.log(lls.pop()); //3
console.log(lls.pop()); //4
console.log(lls.pop()); //null
