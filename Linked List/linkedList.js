/**
 * File: linkedList.js
 * Author: Gayoung Kim
 * Created: 2024-12-12
 * Description: This file contains the implementation of a linked list.
 */


/**
 * Class representing a linked list.
 */
class LinkedList {
  length = 0;
  head = null; // first element of the list

    /**
   * Adds a new node with the given value to the end of the list.
   * @param {*} value - The value to add to the list.
   * @returns {number} The new length of the list.
   */
  add(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length++;
    return this.length;
  }

    /**
   * Searches for a node at the given index.
   * @param {number} index - The index of the node to search for.
   * @returns {*} The value of the node at the given index, or undefined if not found.
   */
  search(index) {
    return this.#search(index)[1]?.value;
  }

    /**
   * Private method to search for a node at the given index.
   * @param {number} index - The index of the node to search for.
   * @returns {Array} An array containing the previous and current nodes.
   * @private
   */
  #search(index) {
    let prev;
    let current = this.head;
    for (var i = 0; i < index; i++) {
      prev = current;
      current = current?.next;
    }
    return [prev, current];
  }

    /**
   * Removes the node at the given index.
   * @param {number} index - The index of the node to remove.
   * @returns {number} The new length of the list.
   */
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      this.head = null;
      this.length--;
      return this.length;
    }
  }
}

/**
 * Class representing a node.
 */
class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(ll.length);
console.log(ll.search(3) + " is the value at index 3");
console.log(ll.search(7)); //null
console.log(ll.remove(0));
console.log(ll.search(0)+" is the value at index 0");
console.log(ll.remove(3));
console.log(ll.remove(0));

