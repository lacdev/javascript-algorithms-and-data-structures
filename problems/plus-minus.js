/* 

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000


Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe arr[n].

Big O Notation:
O(n) time where n is the length of the input array.
O(n) space where n is the hashmap we created to keep track of each value.


*/

function plusMinus(arr) {
  const values = {
    positiveValues: 0,
    negativeValues: 0,
    neutralValues: 0,
  }

  const length = arr.length

  for (const value of arr) {
    if (value > 0) {
      values['positiveValues'] += 1
    } else if (value < 0) {
      values['negativeValues'] += 1
    } else {
      values['neutralValues'] += 1
    }
  }

  console.log(
    (values['positiveValues'] / length).toFixed(6) +
      '\n' +
      (values['negativeValues'] / length).toFixed(6) +
      '\n' +
      (values['neutralValues'] / length).toFixed(6) +
      '\n'
  )
}
