// start_time: 12:24

// P (Problem)
// Input: 
// Number

// Output: 
// Number

// Requirements: 
// Given a number greater than 9, rotate each left-most digit to the end of the number (to the far right), moving 1 place to the right, until all numbers have been rotated;

// Rules: 
// Given a number greater than 9, rotate each left-most digit to the end of the number (to the far right), moving 1 place to the right, until all numbers have been rotated;
// number must be greater than 9
// if a number is rotated such that the first number becomes a zero, the zero is dropped
// Use the function rotateRightmostDigits from the previous exercise.

// Mental model: 

// E (Example/Test Cases)
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// D (Data Structure)
// Number: The input and output are numbers
// String: The number is converted to a 
// Array: The string is converted to an array, then back to a String, then a Number

// A (Algorithm)
// iterate through for loop, from length of number down to 2, using parameter i
// 1 2 3 4 5
// length 5
// call rotateRightmostDigits with the number and i and reassign number to the retrun value
// return number;

// C (Code)
function maxRotation(number) {
  function rotateRightmostDigits(number, place) {
    let array = String(number).split('');
    return Number(array.concat(array.splice(place * -1, 1)).join(''));
  }

  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// end_time: 12:44
// total_time: 20 minutes