// PEDAC

// PROBLEM
// Input:
// Number

// Output:
// String

// Requirements:
// Given an input number n, output a four-pointed n x n diamond.

// Rules:
// n is an odd integer supplied as an argument
// the argument will always be an odd integer
// the argument will always be positive

// Mental Model:

// EXAMPLES / TESTS
// diamond(1);
// // logs
// *

// diamond(3);
// // logs
//  *
// ***
//  *
//  * 

//  diamond(9);
//  // logs
//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

// DATA STRUCTURES
// Number: input, half of the diamond, the number of spaces per row, the number of stars per row
// String: output, which represents the diamond
// Array: Use array to hold the string value for each row in the diamon

// ALGORITHM
// spaces per row, starting with the first:
// n = 9
// half = Math.floor(n / 2) = 4
// spaces = half
// stars = n - (2 * spaces)

// create an array called upperRows = []

// loop from half down to 1 (inclusive), using parameter numSpaces
// create -numStars variable = n - (2 * spaces)
// upperRows.push(' '.repeat(numSpaces) + '*'.repeat(numStars)) + '\n'

// create allRows = upperRows.concat(upperRows.slice().reverse());

// allRows.splice(half, '*'.repeat(n) + '\n')

// return allRows.join(' ')

// CODE

function diamond(n) {
  let upperRows = [];

  for (let numSpaces = Math.floor(n / 2); numSpaces > 0; numSpaces -= 1) {
    upperRows.push(' '.repeat(numSpaces) + '*'.repeat(n - 2 * numSpaces));
  }

  let middleRow = ['*'.repeat(n)];
  let bottomRow = upperRows.slice().reverse();

  return upperRows.concat(middleRow.concat(bottomRow)).join('\n');
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));
