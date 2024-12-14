/**
 * File: doublyLinkedList.js
 * Author: Gayoung Kim
 * Created: 2024-12-14
 * Description: This file contains the implementation of a doubly linked list.
 */

/**
 * Represents a doubly linked list.
 */
class DoublyLinkedList {
  length = 0;
  head = null;
  tail = null;

    /**
   * Adds a value to the end of the list.
   * @param {*} value - The value to add to the list.
   * @returns {DoublyLinkedList} The current list instance for method chaining.
   */
  add(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail = new Node(value, this.tail);
      this.tail.prev.next = this.tail;
    }
    this.length++;
    return this; 
  }

    /**
   * Searches for a node by its index in the list.
   * @param {number} index - The index of the node to retrieve (0-based).
   * @returns {Node|undefined} The node at the given index, or `undefined` if the index is invalid.
   */
  search(index) {
    let current = this.head;
    for (var i = 0; i < index; i++) {
      current = current?.next;
    }
    return current;
  }

    /**
   * Removes a node from the list by its index.
   * @param {number} index - The index of the node to remove (0-based).
   * @returns {*|null} The value of the removed node, or `null` if the index is invalid.
   */
  remove(index) {
    let node = this.search(index);
    //Early Return
    if (!node) {
      return undefined;
    }

    //first node
    if (!node.prev) {
      this.head = node.next;
      if (this.head) {
        // list also has another nodes
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (!node.next) {
      //last node
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
    return this.length;
  }
}

/**
 * Represents a node in the doubly linked list.
 */
class Node {
    /**
   * Creates a new node.
   * @param {*} value - The value stored in the node.
   * @param {Node|null} [prev=null] - The previous node in the list.
   * @param {Node|null} [next=null] - The next node in the list.
   */
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.add(1).add(2).add(3);

console.log(dll.search(1)?.value); // 2
console.log(dll.remove(1)); // 2
console.log(dll.remove(10)); // undefined
console.log(dll.length); // 2
