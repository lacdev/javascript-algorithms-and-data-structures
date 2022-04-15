/* 

There are variations of this questions where you need to return
the indexes or the values.

In this case we will be returning the indexes.

We need to loop through our numbers array, do the calculation to 
obtain the neededValue which will be:

target - the current index we are iterating

we check our hashtable if this neededValue exists, if it does
we return an array of two indexes, the index from the neededValue
stored as the value in our hashTable and the current index in our
iteration.

Otherwise we store the neededValue as the key and the current index as the value.

If not matches are found, we return an empty array.

Notes: We use len variable to avoid calculating the length of the array
in each loop iteration.

Big O Notation: 

O(n) time | O(n) space 

where n is the length of the array in time and
n in space is our hashTable.

*/

function twoSum(numbers, target) {
  const hashTable = {}
  const len = numbers.length

  for (let index = 0; index < len; index++) {
    let neededValue = target - numbers[index]
    if (neededValue in hashTable) {
      return [hashTable[neededValue], index]
    } else {
      hashTable[numbers[index]] = index
    }
  }

  return []
}
