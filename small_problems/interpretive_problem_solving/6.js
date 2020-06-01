// time_start: 1:40

// P (Problem)
// Input:
// Number

// Output:
// String

// Requirements: 
// Create an 8 pointed star, based on the input number n
// The star size is n x n.

// Rules: 
// n (input number) is an odd integer
// Smallest star is 7

// Mental model: 

// E (Example/Test Cases)
// star(7);
// // logs
// // *  *  *
// //  * * *
// //   ***
// // *******
// //   ***
// //  * * *
// // *  *  *

// star(9);
// // logs
// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *

// D (Data Structure)
// Number: 
// Input is number

// Array:
// Each line of the star is stored in an array

// String: 
// Each line of the star is a string
// The array is joined into one big string

// A (Algorithm)
// create variable half = Math.floor(n / 2);
// create empty array with length half and map through it using block parameters line and index, saving the results to variable called upperHalf
//   mapping function:
//   create variable outerPaddingSpaces = index
//   create variable innerPaddingSpaces = (n - 3) / 2
//   return ' ' * outerPaddingSpaces + '*' + ' ' * innerPaddingSpaces + '*' + ' ' * innerPaddingSpaces + '\n'
// create lines variable = upperHalf.concat(upperHalf.slice().reverse());
// insert middle line in star lines.splice(half, 0, '*'.repeat(size))
// return lines.join('');

// C (Code)
function star(n) {
  let half = Math.floor(n / 2);
  let upperHalf = [...Array(half)].map((_line, idx) => {
    let outerPaddingSpaces = idx;
    let innerPaddingSpaces = half - idx - 1;
    return ' '.repeat(outerPaddingSpaces) + '*' + ' '.repeat(innerPaddingSpaces) + '*' + ' '.repeat(innerPaddingSpaces) + '*' + '\n';
  });
  let lines = upperHalf.concat(upperHalf.slice().reverse());
  lines.splice(half, 0, '*'.repeat(n) + '\n');
  return lines.join('');
}

console.log(star(7));
// // logs
// // *  *  *
// //  * * *
// //   ***
// // *******
// //   ***
// //  * * *
// // *  *  *

console.log(star(9));
// // logs
// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *

console.log(star(15));

// time_end: 2:04
// total_time: 24 mins