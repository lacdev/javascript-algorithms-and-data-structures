/* 

Comparison Sorting

Quicksort usually has a running time of , but is there an algorithm that can sort even faster? In general, this is not 
possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements 
to one another. 

A comparison sort algorithm cannot beat  (worst-case) running time, since  represents the minimum number of comparisons 
needed to know where to place each element. For more details, you can see these notes (PDF).

Alternative Sorting
Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index
range covers the entire range of values in your array to sort. Each time a value occurs in the original array,
you increment the counter at that index. At the end, run through your counting array, printing the value of each 
non-zero valued index that number of times.

Example

All of the values are in the range , so create an array of zeros, . The results of each iteration follow:

i	arr[i]	result
0	1	[0, 1, 0, 0]
1	1	[0, 2, 0, 0]
2	3	[0, 2, 0, 1]
3	2	[0, 2, 1, 1]
4	1	[0, 3, 1, 1]

We are going to solve this problem by creating an array of fixed size (in this case 100) filling it with 0, which will
represent the initial counting for each value appearing in our input array.

We are going to traverse our input array and we are going to add += 1 to the index in the count array that corresponds
to the current integer in the iteration. For example:

input[4] = 48 = count[48] += 1 

Big O Notation:

O(n) time where n is the length of our input array.
O(1) space where n is the count array that we are creating of fixed size.

*/

function countingSort(arr) {
  const length = 100
  const count = new Array(length).fill(0)
  for (const number of arr) {
    count[number] += 1
  }
  return count
}
