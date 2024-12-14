/**
 * File: CircularLinkedList.js
 * Author: Gayoung Kim
 * Created: 2024-12-14
 * Description: This file contains the implementation of a circular linked list.
 */

/**
 * Represents a circular linked list.
 */
class CircularLinkedList {
  head = null;
  tail = null;
  length = 0;

    /**
   * Adds a new value to the circular linked list.
   * @param {*} value - The value to add to the list.
   * @returns {CircularLinkedList} The updated list for method chaining.
   */
  add(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      this.tail.next = this.head;
    } else {
      this.tail.next = new Node(value, this.head);
      this.tail = this.tail.next;
    }
    this.length++;
    return this; // for method chaining
  }

    /**
   * Searches for a value in the circular linked list (internal helper).
   * @param {*} value - The value to search for.
   * @returns {Object|null} An object containing the previous and current node if found, otherwise null.
   */
  #search(value) {
    let prev;
    let current = this.head;
    for(var i = 0; i < this.length; i++){
        if(current?.value === value){
            return {prev, current}
        }
        prev = current;
        current = current?.next;
        
    }
    return null;
  }

   /**
   * Searches for a value in the circular linked list.
   * @param {*} value - The value to search for.
   * @returns {Node|null} The node containing the value if found, otherwise null.
   */
  search(value){
    return this.#search(value)[1];
  }

    /**
   * Removes a value from the circular linked list.
   * @param {*} value - The value to remove.
   * @returns {number|undefined} The new length of the list, or undefined if the value was not found.
   */
  remove(value) {
    let result = this.#search(value);
    if(!result){
        return undefined;
    }
    let {prev, current} = result;
    //first node
    if(!prev){
        if(current.next === current){
            // only one node in the list
            this.tail = null;
            this.head = null;
        }else{ 
            //list has more than one node
            this.head = current.next;
            this.tail.next = this.head;

        }
    }
    // last node
    else if(this.tail === current){
        this.tail = prev;
        this.tail.next = this.head;
    }else{
        prev.next = current.next;
    }
    this.length --;
    return this.length; 
  }

    /**
   * Prints the values of the circular linked list.
   * If the list is empty, it outputs "The list is empty."
   */
  print(){
    if(this.length === 0){
        console.log("The list is empty.");
        return; 
    }
    let values = [];
    let current = this.head;
    for(var i = 0; i< this.length; i++){
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

/**
 * Represents a node in the circular linked list.
 */
class Node {
      /**
   * Creates a new Node.
   * @param {*} value - The value of the node.
   * @param {Node|null} [next=null] - The next node in the list.
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Test cases
const cll = new CircularLinkedList();
cll.add(1).add(2).add(3).add(4);
cll.print(); // 1 -> 2 -> 3 -> 4

cll.remove(1);
cll.print(); // 2 -> 3 -> 4

cll.remove(4);
cll.print(); // 2 -> 3

cll.remove(2);
cll.print(); // 3

cll.remove(3);
cll.print(); // The list is empty.

console.log(cll.remove(5)); // undefined