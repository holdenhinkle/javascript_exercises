// start - 8:37am

// P (Problem)
// Input:
// Number

// Output:
// String
// Requirements: 
// Take the input number n and output a 4-pointed diamond that is n x n

// Rules: 
// N is always an odd, integer

// Mental model: 

// E (Example/Test Cases)
// diamond(1);
// diamond(3);
// diamond(9);

// D (Data Structure)
// Number (input)
// Array of lines
// String (output)

// A (Algorithm)
// First half:
// Two lines:
// Count down from half, to > 0
//   *   == spaces == half, stars == number - half * 2 == 5 - 2 * 2
//  ***  == spaces == half, stars == number - half * 2 == 5 - 1 * 2

// Middle:
// *****

// Second half
//  ***
//   *

// half - Math.floor(input size / 2)

// array, called lines
// iterate through for loop from half to > 0 with variable numberOfSpaces, -= 1
// push string to lines array (' '.repeat(numberOfSpaces) + '*'.repeat(size - (numberOfSpaces * 2)) + '\n')

// lines = lines.concat(slice(lines).reverse());
// => This will give us the lines going forward (the top half of the diamond) to background (the bottom half of the diamon), without the middle line.

// splice in the middle line of stars, at position half, == '*'.repeat(size) + '\n'

// Then return lines.join('');
  
// C (Code)
function diamond(size) {
  let half = Math.floor(size / 2);
  let lines = [];
  for (let numberOfSpaces = half; numberOfSpaces > 0; numberOfSpaces -= 1) {
    lines.push(' '.repeat(numberOfSpaces) + '*'.repeat(size - (numberOfSpaces * 2)) + '\n');
  }
  lines = lines.concat(lines.slice().reverse());
  lines.splice(half, 0, ('*'.repeat(size) + '\n'));
  return lines.join('');
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));

// end_time: 9:10
// 33 mins