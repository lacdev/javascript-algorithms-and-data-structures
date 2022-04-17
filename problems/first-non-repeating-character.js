/* 

Given a string s consisting of small English letters, 
find and return the first instance of a non-repeating 
character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
solution(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
solution(s) = '_'.

There are no characters in this string that do not repeat.

We are going to iterate our string and use a Map to store each occurence, since Map remembers item insertion in order
it is ideal to solve this problem in linear time.

If the character already exist in the Map, we add +1 to it, otherwise we add it to our Map.

Finally we iterate our string again and check each character, if the current character exists in our Map and it's 
occurence is equal to 1 that means is our first non duplicate value, since Map remembers insertion in order.

If no map value with 1 is found that means there were non duplicate characters and we return "_" or -1.

Big O Notation:

O(n) time where n is the length of our string.
O(1) space since there are a finite number of characters that can exist in our Map.

*/

function firstNonRepeatingCharacter(string) {
  const hash = new Map()

  for (const char of string) {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1)
    } else {
      hash.set(char, 1)
    }
  }

  for (const char of string) {
    if (hash.get(char) === 1) {
      return char
    }
  }

  return '_'
}
