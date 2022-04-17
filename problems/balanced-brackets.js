/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

We are going to use a Stack to solve this problem. We want to keep track of every pair of matching bracket. 
For every opening brack we want to find it's corresponding closing bracket.

We need track of the last opening bracket that we saw.



Big O Notation:

O(n) time where n is the length of the string.
O(n) space where n is also the lenght of the string. 

*/

function isBalancedBracket(string) {
  const openingBrackets = '([{'
  const closingBrackets = ')]}'
  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const stack = []

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char)
    }

    if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false
      }

      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}
