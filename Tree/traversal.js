import { BinarySearchTree } from "./binarySearchTree.js";
import { Queue } from "../Queue/queue.js";
import { Stack } from "../Stack/stack.js";

/**
 * Performs Breadth-First Search (BFS) on a binary search tree.
 * @param {BinarySearchTree} tree - The binary search tree to traverse.
 * @returns {void} - Logs the values of the tree nodes in BFS order.
 */
const bfs = (tree) => {
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (queue.length > 0) {
    let node = queue.dequeue();
    console.log(node.value);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
};

/**
 * Performs Depth-First Search (DFS) on a binary search tree.
 * @param {BinarySearchTree} tree - The binary search tree to traverse.
 * @returns {void} - Logs the values of the tree nodes in DFS order.
 */
const dfs = (tree) => {
  const stack = new Stack();
  stack.push(tree.root);
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};

/**
 * Performs a pre-order traversal on a binary tree.
 * @param {Object} node - The current node in the binary tree.
 * @param {number} node.value - The value of the current node.
 * @param {Object} [node.left] - The left child node.
 * @param {Object} [node.right] - The right child node.
 * @returns {void} - Logs the values of the tree nodes in pre-order.
 */
const preOrder = (node) => {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
};

/**
 * Performs an in-order traversal on a binary tree.
 * @param {Object} node - The current node in the binary tree.
 * @param {number} node.value - The value of the current node.
 * @param {Object} [node.left] - The left child node.
 * @param {Object} [node.right] - The right child node.
 * @returns {void} - Logs the values of the tree nodes in in-order.
 */
const inOrder = (node) => {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
};

/**
 * Performs a post-order traversal on a binary tree.
 * @param {Object} node - The current node in the binary tree.
 * @param {number} node.value - The value of the current node.
 * @param {Object} [node.left] - The left child node.
 * @param {Object} [node.right] - The right child node.
 * @returns {void} - Logs the values of the tree nodes in post-order.
 */
const postOrder = (node) => {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
};

// Example usage
const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

// bfs(bst); // Output: 4 -> 2 -> 6 -> 1 -> 3 -> 5 -> 7
// dfs(bst); // Output: 4 -> 2 -> 1 -> 3 -> 6 -> 5 -> 7
// preOrder(bst.root); // Output: 4 -> 2 -> 1 -> 3 -> 6 -> 5 -> 7
// inOrder(bst.root);  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
// postOrder(bst.root);   // Output: 1 -> 3 -> 2 -> 5 -> 7 -> 6 -> 4
