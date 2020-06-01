// start_time: 12:36

// P (Problem)
// Input:
// Two strings: input string to be encrypted and the cipher keyword

// Output:
// String

// Requirements: 
// Iterate over the input string, while iterating over the cipher string, where each letter character in the input string corepsonds to the next char in the cipher string

// Rules: 
// Non-letter characters are not changed
// cipher string can be longer than input string to be encrypted
// Each letter of the cipher string represents the shift value. The shift value of a letter is the index of that letter in an array of alpabetic chracters, with 'a' being 0 and 'z' index being 25.

// Mental model: 

// E (Example/Test Cases)
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A')); // Pineapples don't go on pizzas!
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa')); // Pineapples don't go on pizzas!
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab')); // Riogaqrlfu dpp't hq oo riabat!!
// console.log(vigenereCipher('Dog', 'Rabbit')); // Uoh

// D (Data Structure)
// String: Inputs are strings
// Array: convert input string (to be encrypted) to array and map it, replacing each letter with it's encrypted version
// Number: Have a counter that starts to 0 and increments by 1, up to (exclusive of) the length of the keyword
 
// A (Algorithm)
// Use the caesarEncrypt from the previous example.

// create variable keywordIndex and set it to 0
// return the following:
//   split string into an array and map over it, with block parameter char
//     map function:
//       if (char is not a letter) return the char
//       encryptedLetter = encryptLetter(string, ALPHABET.indexOf(keyword[keywordIndex])
//       if (keywordIndex + 1 === keyword.length)
//         reset keywordIndex to 0, else keywordIndex += 1
//       return encryptedLetter
//   join retrun of mapping function with empty string('')


// C (Code)
function vigenereCipher(string, keyword) {
  function encryptLetter(letter, shift) {
    let isLowerCase = /[a-z]/.test(letter);
    shift = ALPHABET.indexOf(letter.toLowerCase()) + shift;
    return isLowerCase ? ALPHABET[shift % 26] : ALPHABET[shift % 26].toUpperCase();
  }

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let keywordIndex = 0;

  return string.split('').map(char => {
    if (/[^a-z]/i.test(char)) return char;
    
    let encryptedLetter = encryptLetter(char, ALPHABET.indexOf(keyword[keywordIndex].toLowerCase()));
    keywordIndex + 1 === keyword.length ? keywordIndex = 0 : keywordIndex += 1;
    return encryptedLetter;
  }).join('');
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A')); // Pineapples don't go on pizzas!
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa')); // Pineapples don't go on pizzas!
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab')); // Riogaqrlfu dpp't hq oo riabat!!
console.log(vigenereCipher('Dog', 'Rabbit')); // Uoh

// end_time: 12:52pm
// start_time: 1:00pm
// end_time: 1:31pm
// total_time: 47 minutes