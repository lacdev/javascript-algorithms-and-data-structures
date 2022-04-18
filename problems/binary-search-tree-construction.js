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



 */

class BinarySearchTree {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }
}

function eliminateHashes(string) {
  const stack = []

  for (const char of string) {
    if (char === '#') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return stack.join('')
}

function areStringsEqual(s1, s2) {
  return eliminateHashes(s1) === eliminateHashes(s2)
}
