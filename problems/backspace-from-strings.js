/* 

Given 2 strings S and T, return if they are equal when both
are typed into an empty text editor. 

# means a backspace character press.

Example 1:

Input S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac"

Example 2: 

Input: S = "a##c", T = "#a#c"
Output: True
Explanation: Both S and T become "c"

We are going to solve this problem using a stack, there are better ways to solve this
but this is what I come with on the spot.

We are going to create a function to eliminate the hashes first called process backspace.
We are going to traverse the given string and if it's not a # we are going to push it 
to the stack, else we are going to pop the last item in the stack. 
Finally, we are going to join the stack and return the string.

Lastly we are going to create a new function called to compare both given strings
and return true it both strings are the same using the previous function that we created.

Big O Notation:

O(n) where n is the length of our strings
O(n) space where n are the functions and stacks we are going to use
to keep track of each character.

*/

function processBackspace(string) {
  const stack = []

  for (const char of string) {
    if (char === '#') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        continue
      }
    } else {
      stack.push(char)
    }
  }

  return stack.join('')
}

function areStringsEqual(s, t) {
  return processBackspace(s) === processBackspace(t)
}
