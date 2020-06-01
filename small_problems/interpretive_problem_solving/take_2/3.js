// PEDAC

// PROBLEM
// Input
// String

// Output
// Boolean

// Requirements
// Given the following two-letter blocks: B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// Return true if a word can be composed with the blocks. Return false otherwise.

// Mental Model


// Rules
// Blocks can only be used once
// Input is always comprised of letters
// Input will never be empty
// Letters are case-insensitive

// EXAMPLES / TESTS
// Given examples:
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// Edge cases:
// Two of a letter
// isBlockWord('APPLE');      // true
// isBlockWord('NaN');      // true

// DATA STRUCTURES
// String: input
// Boolean: output
// Object: properties are blocks, values are the number of times the blocks have been used. Initial value is 0.

// ALGORITHM
// create object of blocks:
//   properties are blocks: GT, RE, etc. and values are number, set to 0

// iterate through input string (split string into letters) using for loop (so you can return out of out)
//   produce an array of block keys (for block in blocks)
//   creater matches variable set to the return on performing a match on the word and the block letters:
//   continue if matches is null
//   increment the value of the blcok property by the length of the matches variable
//   return false if block value is > 1

// return true

// CODE

function isBlockWord(word) {
  let blocks = { BO: 0, XK: 0, DQ: 0, CP: 0, NA: 0, GT: 0, RE: 0, FS: 0, JW: 0, HU: 0, VI: 0, LY: 0, ZM: 0, }   

  properties = Object.keys(blocks);

  for (let i = 0; i < properties.length; i += 1) {
    let matches = word.match(new RegExp(`[${properties[i]}]`, 'ig'));
    if (matches === null) continue;
    blocks[properties[i]] += matches.length;
    if (blocks[properties[i]] > 1) return false;
  }

  return true
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('NaN'));      // false
