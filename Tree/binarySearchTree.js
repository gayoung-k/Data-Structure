/**
 * Binary Search Tree class.
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
    this._length = 0;
  }

    /**
   * Returns the current number of nodes in the tree.
   * @returns {number} The number of nodes in the tree.
   */
  get length(){
    return this._length;
  }

    /**
   * Helper method to recursively insert a value into the tree.
   * @param {Node} node - The current node.
   * @param {number} value - The value to be inserted.
   * @throws {Error} If the value already exists in the tree.
   * @returns {Node} The node where the value was inserted.
   */
  #insert(node, value) {
    if (node.value === value) {
      throw new Error(`Value ${value} already exists in the tree.`);
    }
    if (node.value > value) {
      if (!node.left) {
        node.left = new Node(value);
        this._length++;
        return node.left;
      }
      return this.#insert(node.left, value);
    } else {
      if (!node.right) {
        node.right = new Node(value);
        this._length++;
        return node.right;
      }
      return this.#insert(node.right, value);
    }
  }

    /**
   * Inserts a value into the binary search tree.
   * @param {number} value - The value to be inserted.
   * @returns {Node} The node where the value was inserted.
   */
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      this._length++;
      return this.root;
    } else {
      return this.#insert(this.root, value);
    }
  }

    /**
   * Helper method to search for a value in the tree.
   * @param {Node} node - The current node.
   * @param {number} value - The value to search for.
   * @returns {Node|null} The node with the specified value, or null if not found.
   */
  #search(node, value) {
    if (node.value === value) {
      return node;
    } else if (node.value > value) {
      if (!node.left) return null;
      return this.#search(node.left, value);
    } else {
      if (!node.right) return null;
      return this.#search(node.right, value);
    }
  }

    /**
   * Searches for a value in the binary search tree.
   * @param {number} value - The value to search for.
   * @returns {Node|null} The node with the specified value, or null if not found.
   */
  search(value) {
    if (!this.root) return null;
    return this.#search(this.root, value);
  }


    /**
   * Helper method to recursively remove a node from the tree.
   * @param {Node} node - The current node.
   * @param {number} value - The value of the node to be removed.
   * @returns {Node|null} The new node that replaces the removed node, or null if the node was deleted.
   */
  #remove(node, value) {
    // If there's no node to be removed, return null
    if (!node) return null;

    // If the value is found, remove it
    if (node.value === value) {
      this._length--;
       // If the node has no children (leaf node), return null
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        // If the node only has a right child, replace it with the right child
        return node.right;
      } else if (!node.right) {
        // If the node only has a left child, replace it with the left child
        return node.left;
      } else {
         // If the node has two children, replace it with the largest node from the left subtree
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        node.value = exchange.value;
        node.left = this.#remove(node.left, exchange.value);
        return node;
      }
    } else {
      // If the value is smaller, search in the left subtree
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }

    /**
   * Removes a value from the binary search tree.
   * @param {number} value - The value to be removed.
   * @returns {number} The current number of nodes in the tree.
   */
  remove(value) {
    this.root = this.#remove(this.root, value);
    return this.length;
  }
}

/**
 * Node class to represent individual nodes in the binary search tree.
 */
class Node {
    /**
   * Creates a new node.
   * @param {number} value - The value of the node.
   * @param {Node|null} left - The left child node.
   * @param {Node|null} right - The right child node.
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Test the BinarySearchTree class
// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(1);
// bst.insert(17);
// bst.insert(12);
// bst.insert(19);

// console.log(bst.search(3));
// console.log(bst.search(9));

// console.log(bst.remove(7));
// console.log(bst.remove(10));
