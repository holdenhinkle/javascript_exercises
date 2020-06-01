// PEDAC

// PROBLEM
// Input: String

// Output: Number

// Requirements: Given an input string, find the longest substring of unqiue concecutive characters, and return the number of characters

// Rules: 
// Input will always be a string
// Input can be empty string
// There will always be a string
// String can contain any type of characters (same with substring)






// abcabcbb

// EXAMPLES / TESTS
// console.log(longestSubstringLength('abcabcbb')); // 3 for abc
// console.log(longestSubstringLength('bbbbb')); // 1 for b
// console.log(longestSubstringLength('pwwkew')); // 3 for wke (p is not part of the string because 2 repeats)
// console.log(longestSubstringLength('')); // 0
// console.log(longestSubstringLength('hello word')); // 4 for 'lo w'

// DATA STRUCTURES
// String: Input is string. Each character of the string is a string, results variable in first for loop called Substring
// Number: Number is the output
// Array: subSTrings array

// ALGORITH
// Convert the input into an array characters
// Iterate through the array length  - 1 times, starting at index 0, then 1, then 2.., calling this leftIndex
//  create results string, set to empty string
//   iterate from left index to length - 1
//   if results does not contain the current letter, append the letter to the end of the rsults string
//   else, break out of this for loop

// Find the longest string in substrings
// create a function called longestSubstringLength which will take the substrings array
// create a variable called longest and set it to 0
// iterate through substrings with block parameter substring
// if the substrin length is greater than 'longest' reassign longest to this length
// return longest

// return the return value of longestSubstringLength

// CODE
function longestSubstringLength(str) {
  function greatestStringLength(substrings) {
    let longest = 0;

    substrings.forEach(string => {
      if (string.length > longest) longest = string.length;
    });

    return longest;
  }

  let chars = str.split('');
  let subStrings = [];

  for (let leftIndex = 0; leftIndex < chars.length - 1; leftIndex += 1) {
    let string = '';

    for (let i = leftIndex; i < chars.length - 1; i += 1) {
      if (string.includes(chars[i])) break;
      string += chars[i];
    }

    subStrings.push(string);
  }

  return greatestStringLength(subStrings);
}

console.log(longestSubstringLength('abcabcbb')); // 3 for abc
console.log(longestSubstringLength('bbbbb')); // 1 for b
console.log(longestSubstringLength('pwwkew')); // 3 for wke (p is not part of the string because 2 repeats)
console.log(longestSubstringLength('')); // 0
console.log(longestSubstringLength('hello word')); // 4 for 'lo w'
