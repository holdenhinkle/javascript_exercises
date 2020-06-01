// start_time: 9:16am

// P (Problem)
// Input:
// string (the string to encrypt)
// number (the shift value which is referred to as the key)

// Output:
// string

// Requirements: 
// encrypt the input string according the  Caesar Cipher specs:

// Rules: 
// iterate through each letter in the input string, and replace it with a letter 'key' values to the right of it.
// If the key is greater than 26 (the number of letters in the alphabet) wrap around to the beginning of the alphabet to continue counting to the right.
// letter case matters (return a letter of the same case)
// all non-letter characters do not need to be replaced.
// Mental model: 

// E (Example/Test Cases)
// // simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// D (Data Structure)
// Input is a string (to be encrypted) and a number (the key or shift-value)
// Output is a new string
// How to represent lowercase vs uppercase letters:
//   Have an array of lowercase letters, with index + 1 representing the letter place in the alphabet
//   Create a boolean flag called isLowerCase set to true and set it to false for each uppercase letter as each letter is iterated through
//   Test each characters using regex /a-z/i (to see if char is a letter)
//   If true, test to see if letter is lowercase /a-z/

// Input string will be converted to an array
// a new string will be built using a results array
// The results array will be joing by empty spaces and returned

// Input: string, number
// Function:
// results array
// split string into array
// iterate through array with forEach using paramaters char and idx
// set boolean flag isLowerCase to false
// regex for testing if letter
// regex for testing if lowercase
// return value is results array joined by empty string

// A (Algorithm)
// create array of lowercase letters called letters, make it a constant
// create empty results array
// split input string into an array (split on empty string)
// iterate through string using forEach((char, idx))
// if /a-z/i.test(char) (if the char is a letter):
//   create variable isLowerCase and set it to true
//   if /A-Z/.test(char) then set isLowerCase to false
//   encryptedLetter = call encryptLetter with arguments letter, shift
//   results.push(isLowerCase ? encryptedLetter : encryptedLetter.toUpperCase())
// else push char to results array (if the char is not a letter), then return

// return results.join('');

// Functions:
// encryptLetter(letter, shift)
// variable letterIdx = get the letter index using letters.indexOf(letter)
// new variable shiftedValue = letterIdx + shift
// if (shiftedValue < 26) return letters(letterIdx + shift)
//  => example (no shift wrap around): 
//   (a, 3)
//   letterIdx = 0
//   shift is 3
//   shiftedValue = 0 + 3 === 3
//   return letters(shiftedValue) === a b c **d** === return 'd'
// return letters(shiftedValue - 26 - 1)
// => example (shift wrap around): 
// (u, 10)
// letterIdx = 20
// shift is 10
// shiftedValue = 20 + 10 === 30
// return letters(shiftedValue - 26 - 1) === 30 - 26  == 4 == 'e'
// letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];

// u == 20

// C (Code)
// function caesarEncrypt(string, shift) {
//   function encryptLetter(letter, shift) {
//     const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
//     let isLowerCase = /[a-z]/.test(letter);
//     let letterIndex = LETTERS.indexOf(letter.toLowerCase());
//     shift = letterIndex + shift;

//     if (shift < 26) {
//       letter = LETTERS[shift];
//     } else {
//       letter = LETTERS[shift - 26];
//     }

//     return isLowerCase ? letter : letter.toUpperCase();
//   }

//   let results = [];

//   string.split('').forEach(char => {
//     if (/[a-z]/i.test(char)) {
//       results.push(encryptLetter(char, shift));
//     } else {
//       results.push(char);
//     }
//   });
  
//   return results.join('');
// }

// function caesarEncrypt(string, shift) {
//   function encryptLetter(letter, shift) {
//     const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//     let isLowerCase = /[a-z]/.test(letter);
//     shift = ALPHABET.indexOf(letter.toLowerCase()) + shift;

//     return isLowerCase ? ALPHABET[shift % 26] : ALPHABET[shift % 26].toUpperCase();
//   }

//   return string.split('').map(char => {
//     if (/[a-z]/i.test(char)) return encryptLetter(char, shift);
//     return char;
//   }).join('');
// }

function caesarEncrypt(string, shift) {
  function encryptedLetter(letter) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let isLowerCase = /[a-z]/.test(letter);
    shift = ALPHABET.indexOf(letter.toLowerCase()) + shift; // shift is available through lexical scope. i'm not crazy about not being able to explicitly pass shift into the function.

    return isLowerCase ? ALPHABET[shift % 26] : ALPHABET[shift % 26].toUpperCase();
  }

  return string.replace(/[a-z]/gi, encryptedLetter);
}

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// // stop_time: 10:34
// 1.25 hours
// stuck on stupid regex thing for over 30 mins. Duh!
