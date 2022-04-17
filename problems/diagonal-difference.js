/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9 

Is a 2d array problem we are given an array of arrays.

We create 2 pointers, one for the left side of the square and one for the right side.
In each iteration we sum the value of the current index.

We return the absolute difference by using the Math.abs function.

Big O Notation:

O(n) time where n is the length of the input array.
O(n) where n are the variables that we create to calculate the difference and keep track of them.

*/

function diagonalDifference(arr) {
  let leftSum = 0
  let rightSum = 0

  for (let index = 0; index < arr.length; index++) {
    const leftValue = arr[index][index]
    const rightValue = arr[index][arr.length - 1 - index]

    leftSum += leftValue
    rightSum += rightValue
  }

  const result = leftSum - rightSum

  return Math.abs(result)
}
