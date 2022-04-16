/* 

We are asked to return the mininum non constructible change
from a coins array.

We need to return the first value that can't be created from a
given coins input array.

We are going to sort the array in place (if possible)

We are going to traverse the array and create a variable to keep
track of the sum of the previous coins.

if we ever reach a point where the current coin in the array is greater
than the item in our variable + 1 that means it can't be created.

For example:

coins = [1,1,4] 

The result would be 3, the iterations would be like:

i = 1
currentChangeCreated = 0
i > currentChangeCreated + 1 = false
currentChangeCreated += 1

i = 1
currentChangeCreated = 1
i > currentChangeCreated + 1 = false
currenChangeCreated += 1

1 = 4
currentChangeCreated = 2
i > currentChangeCreated + 1 = true
because 4 is greater than the current value + 1

Then we return 3 since we can't create 3 from [1,1]

Big O Notation:

O(n log n) time

If we sort the input array in place we would get: 

O(1) space constant time

If we need to create or copy the input array:

O(n) space where n is the lenght on the input array.

*/

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b)

  let currentChangeCreated = 0

  for (let index = 0; coins.length; index++) {
    if (coins[index] > currentChangeCreated + 1) {
      return currentChangeCreated + 1
    }
    currentChangeCreated += coins[index]
  }

  return currentChangeCreated + 1
}
