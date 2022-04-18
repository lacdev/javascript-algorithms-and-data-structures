/* 

Binary Search Trees 

BST Property

The root node  (the node at the top) satisfy the BST property:

If and only if:

The root node value is strictly greater than all the values at it's left.

And it's value it's less than or equal to all the values to the nodes at it's right.

         10
       /    \
      5      15
     / \     / \
    2   5   13  22
   /          \
  1            14

The diagram above shows a valid binary search tree.

The BST class will have 3 basic methods:

Insertion
Searching
Deletion

Big O Notation:

Average case:

Time
Insertion, searching, deletion
O(log(n)) time where n is the number of nodes in our BST.

Space
O(log(n)) 

Worst case:

O(n) time when the tree is not balanced at all.
O(n) where n is the length or depth of the branch of the tree.

All of this occurs when the algorithms is implemented recursively.

And then space becomes O(1) if the algorithms are implemented iteratively.

*/

class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space

  insert(value) {}

  contains(value) {}

  remove(value, parentNode = null) {}
}
