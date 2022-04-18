/* 

A heap is a tree-based data structure which is an almost complete tree that satisfies the heap property.

A complete tree is a tree in which every level, except possibly the last, is completely filled 
and all nodes are as far left as possible.

A heap is essentially used to get the highest priority element at any point in time. There are two types 
of heaps, based on the heap property — MinHeap and MaxHeap.

MinHeap: The parent node is always less than the child nodes.

MaxHeap: The parent node is always greater than or equal to the child nodes.

          MinHeap                            MaxHeap
             10                                57
           /    \                           /      \
          23     36                       38       45  
        /    \   /   \                  /    \    /   \
       32   38  45   57               32      23  10    36

In MinHeap, the root node 10 is smaller than its two child nodes 23 and 36 while 23 and 36 are smaller 
than their respective child nodes.

In MaxHeap, the root node 57 is greater than its two child nodes 38 and 45 while 38 and 45 are greater 
than their respective child nodes.


Here’s the time complexity of various operations performed on a heap with n elements:

Access the min/max value: O(1)
Inserting an element: O(log n)
Removing an element: O(log n)


We represent heaps as sort of trees but they’re not stored as trees in the memory. 

Let’s try to convert the heap representation in an array and see how it turns out:


[10,23,36,32,38,45,57]

[57,38,45,32,23,10,36]

If you carefully observe, the minimum and the maximum elements are placed at the 0th index in 
their respective arrays. We can access these elements in constant O(1) time.

If a parent is at 0th index, its two child nodes are at 1st and the 2nd position in the array. 
Here’s the relationship between the parent and the child nodes in a binary heap:

Index of Parent Node   Index of Child Nodes
        0                 1        2
        1                 3        4
        2                 5        6
        i             2 * i + 1    2 * 1 + 2

Formula:

Parent Node at: 

array[i]

Left Child Node at:

2 * array[i] + 1

Right Child Node at:

2 * array[i] + 2

 
From the above image, we can deduce that the child nodes of any element at index i are placed at 
indexes 2*i + 1 and 2*i + 2. Also, we can go reverse and find out the parent node of any element at i 
using the formula i/2. Please note: this is applicable only for Binary Heaps.

Heaps can be implemented using Arrays or LinkedList but the common way of implementing them is by using Arrays.

*/
