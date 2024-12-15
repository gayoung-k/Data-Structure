/**
 * A Queue implementation using a linked list.
 */
class Queue {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds a new value to the end of the queue.
   * @param {any} value - The value to add to the queue.
   * @returns {number} The new length of the queue.
   */
  enqueue(value) {
    if (!this.head) {
      //first node
      this.head = new Queue.Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Queue.Node(value);
      this.tail = this.tail.next;
    }
    this._length++;
    return this._length;
  }

  /**
   * Removes and returns the value at the front of the queue.
   * @returns {any | null} The value of the removed node, or null if the queue is empty.
   */
  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;
    if (!this.head) this.tail = null;
    this._length--;
    return node.value;
  }

  /**
   * Returns the value at the front of the queue without removing it.
   * @returns {any | null} The value of the front node, or null if the queue is empty.
   */
  peek() {
    return this.head?.value;
  }

  /**
   * Gets the current length of the queue.
   * @returns {number} The number of elements in the queue.
   */
  get length() {
    return this._length;
  }
}

/**
 * Represents a Node in the Queue.
 * @private
 */
Queue.Node = class {
  /**
   * @param {any} value - The value stored in the node.
   * @param {Queue.Node | null} [next=null] - The next node in the queue.
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

// Example usage
llq = new Queue();
llq.enqueue(5);
llq.enqueue(2);
llq.enqueue(1);
llq.enqueue(4);
llq.enqueue(3);

console.log(llq.dequeue()); //5
console.log(llq.dequeue()); //2
console.log(llq.dequeue()); //1
console.log(llq.tail); //3
console.log(llq.head); //4
console.log(llq.length); //2

console.log(llq.peek()); //4
console.log(llq.dequeue()); //4
console.log(llq.dequeue()); //3
console.log(llq.dequeue()); //null
console.log(llq.tail); //null
console.log(llq.tail); //null
