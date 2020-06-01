// start_time: 11:59

// P (Problem)
// Input: 
// 2 numbers: 
// The main number
// The number that represents the number that should be rotated.

// Output: 
// Number

// Requirements: 
// Rotate a single digits in the main number to the end of the main number.
// The second argument represents the number from the end of the main number (inclusive) that should be rotated to the end of the main number.
// Rules: 
// Numbers are positive integers

// Mental model: 

// E (Example/Test Cases)
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// D (Data Structure)
// Number: Both arguments are numbers. The return value of the function is also a number.
// String: convert the number to a string
// Array: Split the string into an array

// A (Algorithm)
// function parameter names: number, place
// set place to the negative value of itself
// convert number to string, the to an array
// remove a number at index 'place' from array using splice assign it to the variable, rotatedNumber
// push rotatedNumber onto the array
// convert array to string using join('') and convert the string to a number and return it

// C (Code)
function rotateRightmostDigits(number, place) {
  let array = String(number).split('');
  // array.push(array.splice(-place, 1));
  return Number(array.concat(array.splice(place * -1, 1)).join(''));
  // return Number(array.join(''));   
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// end_time: 12:15
// total_time: 16 minutes