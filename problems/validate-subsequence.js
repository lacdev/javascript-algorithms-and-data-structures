/* 

We want to traverse our array to check if the given subsequence is contained within it in the same order.

We keep track of each subsequence index found in the array with the variable seqIdx.

If a subsequence index is found, we sum + 1 to the seqIdx variable and we keep looping the array 
while comparing the next value in it with the new seqIdx index because we need the subsequence in order.

We return true if the subsequence is contained within the array and false if it isn't. 
We break the loop early if we find our valid subsequence before traversing the entire array.

Big O Notation: 

O(n) time | O(1) space where n is the length of the array.

*/

function isValidSubsequence(array, sequence) {
  let sequenceIndex = 0
  for (let index = 0; index < array.length; index++) {
    if (sequenceIndex === sequence.length) break
    if (sequence[sequenceIndex] === array[index]) sequenceIndex += 1
  }
  return sequenceIndex === sequence.length
}
