/* 

Given an array of integers, 
where all elements but one occur twice, 
find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer,  
the number of integers in the array.
The second line contains  space-separated 
integers that describe the values in .


We iterate over the numbers array, add each number as a key in
a hashmap. In the next iterations if the key already exists we delete it
since it is not going to be the unique element we are looking for.
Otherwise we keep adding it. Since it's guaranteed that only one element will
be repeated we extract the only key in the hashmap and return it.

Big O Notation:

O(n) time where n is lenght of the input array.
O(n) space where n is our hashmap that we need to manipulate.

*/

// Using a hashmap

function lonelyinteger(array) {
  const hash = {}

  for (let index = 0; index < array.length; index++) {
    const currentElement = array[index]
    if (currentElement in hash) {
      delete hash[currentElement]
    } else {
      hash[currentElement] = 1
    }
  }

  const [uniqueElement] = Object.keys(hash)

  return uniqueElement
}

// Using bit manipulation and the XOR ^ operator
// O(n) time O(1) space

function lonelyinteger(a) {
  let result = 0

  for (let number of a) {
    result ^= number
  }

  return result
}
