/*

We need to return the first duplicate in our array.

Given an array a that contains only numbers in the range from 1 to a.length, 
find the first duplicate number for which the second occurrence has the minimal index. 

In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence 
has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the 
second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be solution(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

There are different ways to approach this problem but we are going to use a Set to solve this problem.

We are going to traverse our array, for each value in it, we are going to check if the value already exists in our Set
if it does we are going to immediately return it since it would be the first duplicate. Otherwise we add it to the Set.

If no duplicates are found, we return -1

Big O Notation:

O(n) time where n is the length of the array
O(n) space where n is the values set that we are creating.

*/

function firstDuplicateValue(array) {
  const values = new Set()

  for (const value of array) {
    if (values.has(value)) {
      return value
    } else {
      values.add(value)
    }
  }

  return -1
}
