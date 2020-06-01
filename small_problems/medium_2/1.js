// start_time: 1:18pm

// P (Problem)
// Input: 
// String

// Output: 
// Object

// Requirements: 
// Write a function that takes a string, and returns an object containing the following three properties:
// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// Rules: 
// the string will always contain at least one character.

// Mental model: 


// E (Example/Test Cases)
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// D (Data Structure)
// **String:
// Input
// Object properties (this is a given - they're always Strings)
// Array elements

// **Array:
// input String will be split into strings on ''

// **Object:
// Values will be Number, but will be transformed to String before return (numbers need to be in quotes)

// **Regex
// Regex will determine if character is a lowercase letter, uppercase letter

// A (Algorithm)
// create object called 'percentages' with the following properties, each set to a value of 0:
// lowercase
// uppercase
// neither

// split input string on '' into an array of chars
// iterate through chars using forEach, with block parameter char
// using regex, if char is a lowercase letter, increment percentages[lowercase] by 1
// using regex, if char is a uppercase letter, increment percentages[uppercase] by 1
// else increment percentages[uppercase] by one

// iterate through percentages properties
// reasign the value of each property to the following: "\"x.xx\""
// where x.xx is the percent of times the property appeared in the in put string
// percentages[lowercase] = `\"${(string.length * (percentages[lowercase] / 10)).toFixed(2)}\"`

// return percentages
// C (Code)
// function letterPercentages(str) {
//   let percentages = { lowercase: 0, uppercase: 0, neither: 0, };

//   str.split('').forEach(char => {
//     if (/[a-z]/.test(char)) {
//       percentages.lowercase += 1;
//     } else if (/[A-Z]/.test(char)) {
//       percentages.uppercase += 1;
//     } else {
//       percentages.neither += 1;
//     }
//   });

//   Object.keys(percentages).forEach(charCase => {
//     percentages[charCase] = (percentages[charCase] / str.length * 100).toFixed(2);
//   });

//   return percentages;
// }

function letterPercentages(str) {
  return {
    lowercase: ((str.match(/[a-z]/g) || []).length / str.length * 100).toFixed(2),
    uppercase: ((str.match(/[A-Z]/g) || []).length / str.length * 100).toFixed(2),
    neither: ((str.match(/[^a-z]/gi) || []).length / str.length * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// end_time: 1:55
// total_time: 37 minutes