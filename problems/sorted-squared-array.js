/* 

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number 
sorted in non-decreasing order.

We have 2 solutions, one is not optimal. We create a new array from
the input, traverse it and multiply each one of their values by themselves.
Then we sort this array with all the squared numbers and return it.

We have an optimal solution which involves 2 pointers.

We create a new array from the input.
We traverse this new array in reverse, we create 2 pointers,
one for the last element in the array and one for the first one.

In each iteration we compare each element, if the smaller is greater than the larger:
the smaller value becomes the value in the current iteration, otherwise the largerNumber
becomems the value.

We add +1 if the smaller won since we need to compare the next number to it in the next iteration.
We decrease -1 if the larger number (at the end) won.

We return the array and no need to sort since it will be sorted already.


Big O Notation:

Not optimal:

O(n log n) time 
O(n) space where n is the new array that we are using as a new copy

Optimal solution:

O(n) time | O(n) space where n is the length of our input.


*/

// Solution 1 Not optimal

function sortedSquaredArray(nums) {
  const squares = Array.from(nums)

  for (let index = 0; index < squares.length; index++) {
    let value = nums[index]
    squares[index] = value * value
  }

  squares.sort((a, b) => a - b)

  return squares
}

// Solution 2 Optimal with 2 pointers

function sortedSquaresOptimal(nums) {
  const squares = Array.from(nums)

  let smallerIndex = 0
  let largerIndex = nums.length - 1

  for (let index = nums.length - 1; index >= 0; index--) {
    let smallerValue = nums[smallerIndex]
    let largerValue = nums[largerIndex]

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      squares[index] = smallerValue * smallerValue
      smallerIndex += 1
    } else {
      squares[index] = largerValue * largerValue
      largerIndex -= 1
    }
  }

  return squares
}
