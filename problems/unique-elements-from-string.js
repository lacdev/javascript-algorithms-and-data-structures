/* 

Given a string, print the unique elements from it in order of appearance. 

Input: "aaabbccdddeefhgjjjiii"
Output: "abcdefhgji"

Big O Notation:

O(n) time where n is the length of the string
O(n) space where n is the set that we are creating to add our values.

*/

function printUniqueElements(string) {
  const set = new Set()

  for (const char of string) {
    if (set.has(char)) {
      continue
    } else {
      set.add(char)
    }
  }

  /* 
  we can return a string by creating an array from the set 
  and joining it like: 

  return Array.from(set).join("")

  */

  return set
}
