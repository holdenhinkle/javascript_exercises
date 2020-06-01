// start 3:31
// P (Problem)
// Input:
// String

// Output:
// Boolean

// Requirements: 
// Given a number of blocks with two letters each, see if the given word can be spelled with the blocks.
// Blocks can only be used once.
// Letters are case insensitive.

// Rules: 
// Mental model: 

// E (Example/Test Cases)
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// D (Data Structure)
// Word is given as a String.
// Blocks are stored in an Array.
// Word is split into an Array and transformed to uppercase characters
// Boolean for return value.

// A (Algorithm)
// create array called blocks
// split String, letters to uppcase, iterate through it using forEach, letter is the block parameter name
//   iterate through blocks array
//     check each block using forEach and index to see if it has the letter
//     if block includes letter, delete block from blocks array
//     else return false
// return true

// C (Code)
// function isBlockWord(word) {
//   let blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
//   let letters = word.split('').map(letter => letter.toUpperCase());

//   for (let letterIdx = 0; letterIdx < letters.length; letterIdx += 1) {
//     let blockExists = false;

//     for (let blockIdx = 0; blockIdx < blocks.length; blockIdx += 1) {
//       if (blocks[blockIdx].includes(letters[letterIdx])) {
//         blocks.splice(blockIdx, 1);
//         blockExists = true;
//         break;
//       }
//     }

//     if (blockExists === false) return false;
//   }

//   return true;
// }

// function isBlockWord(word) {
//   let blocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];
//   for (let blockIdx = 0; blockIdx < blocks.length; blockIdx += 1) {
//     if (word.includes(blocks[blockIdx][0]) && word.includes(blocks[blockIdx][1])) return false;
//   }
//   return true;
// }

function isBlockWord(word) {
  let blocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];
  for (let blockIdx = 0; blockIdx < blocks.length; blockIdx += 1) {
    let matches = word.match(new RegExp(`[${blocks[blockIdx][0] + blocks[blockIdx][1]}]`, 'ig'));
    if (Array.isArray(matches) && matches.length > 1) return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// New Tests
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box')); // false

// stop 3:35
// start 3:39
// stop?
