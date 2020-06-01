// start_time: 9:01

// P (Problem)
// Input: 
// String

// Output: 
// String

// Requirements: 
// Replace all word-numbers (numbers that are spelled out) with regular numbers.

// Rules: 
// Numbers to convert: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
// Words are always lowercase.

// Mental model: 
// Have a lookup table for the following words: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
// Iterate through each word in the sentence using a mapping function. Look up the word in the numbers lookup table. If it exists, return the value, otherwise return the word.

// E (Example/Test Cases)
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// wordToDigit('My phone number is nine one seven six zero eight eight six two three.');
// // "My phone number is 9 1 7 6 0 8 8 6 2 3."

// wordToDigit('My social security number begins with two three four.');
// // "My social security number begins with 2 3 4."

// D (Data Structure)
// String:
// Input and output (and of course the object keys and values)

// Object:
// Use object to implement a basic lookup table with number-words as keys and the actual numbers as values

// Array:
// Split the input string into an array of words.

// A (Algorithm)
// create object called 'numberWords':
// { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', }

// return the following:
// split sentence into array, split on ' '
// map array, using word as block parameter
//   mapping function:
//     return numberWord[word] || word (if the word exists in the numberWord object return it, otherwise return the word)
//       the variable word will be word.match(/^[a-z]+/)[0]
// join words with a space ' '

// C (Code)
// function wordToDigit(string) {
//   const numberWords = { one: '1', two: '2', three: '3', four: '4', five: '5',
//                         six: '6', seven: '7', eight: '8', nine: '9', };

//   return string.split(' ').map(word => {
//     let endsWithPeriod = numberWords[word.match(/^[a-z]+/)] && word.slice(-1) === '.';
//     word = numberWords[word.match(/^[a-z]+/)] || word;
//     return endsWithPeriod ? word + '.' : word;
//   }).join(' ');
// }


// function wordToDigit(string) {
//   const numberWords = { one: '1', two: '2', three: '3', four: '4', five: '5',
//                         six: '6', seven: '7', eight: '8', nine: '9', };

//   return string.split(/ |\./).map(element => {
//     return numberWords[element.match(/[a-z]+/)] || element;
//   }).map(element => element === '' ? '.' : element).join(' ').replace(/( \.)/g, '.');
// }

function wordToDigit(string) {
  const numberWords = { zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', };

  return string.split(' ').map(word => {
    if (numberWords[word.match(/[a-z]+/)]) {
      return word.replace(/[a-z]+/, numberWords[word.match(/[a-z]+/)]);
    } else return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('My phone number is nine one seven six zero eight eight six two three.'));
// "My phone number is 9 1 7 6 0 8 8 6 2 3."

console.log(wordToDigit('My social security number begins with two three four.'));
// "My social security number begins with 2 3 4."

console.log(wordToDigit('The weight is done.'));
// "The w8 is d1."

console.log(wordToDigit('one with oneness and no-one is as easy as one, two, three.'));
// "1 with oneness and no-one is as easy as one, two, three."

// end_time: 9:33
// total_time: 32 mins