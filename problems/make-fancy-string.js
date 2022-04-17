/* 

A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.


Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".


Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab".

I resolved this problem using a stack and a variable to keep track of the limit for each character.

My logic behind this is to create a stack, a comparingChar variable and a limitLeft Variable.

We traverse our string and in each iteration we check if the current character is equal to the comparing character, if it is, we then check if we still have limit left, if we do, we push the character to the stack and substract -1 to our left limits. 

If the character already exists in the comparing Character and no limits are left, we continue and do nothing since we don't need that character.

Else 

If the current character is not equal to the comparing character, we push it to the stack since it's new, we make this character the new comparing character and we substract -1 to our limits left. 

There are probably better ways to solve this problem but this is what I come with while doing it live. 

Big O Notation: 

O(n) where n is the length of the string
O(n) where n is the stack that we are creating to keep count of the characters.

*/

function makeFancyString(s) {
  const stack = []
  let comparingChar = ''
  let limitLeft = 2

  for (const char of s) {
    if (char === comparingChar) {
      if (limitLeft > 0) {
        stack.push(char)
        limitLeft -= 1
      } else {
        continue
      }
    } else {
      limitLeft = 2
      stack.push(char)
      comparingChar = char
      limitLeft -= 1
    }
  }

  return stack.join('')
}
