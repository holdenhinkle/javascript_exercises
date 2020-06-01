// start_time: 4:23

// P (Problem)
// Input: 
// Number

// Output: 
// Number

// Requirements: 
// Write a function that takes a year as an argument, and 
// returns the number of 'Friday the 13ths' in that year. 

// Rules: 
// You may assume that the year is greater than 1752 (when 
// the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain 
// in use for the foreseeable future.

// Mental model: 


// E (Example/Test Cases)
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// D (Data Structure)
// Number: 
// Input, which represents a year
// Output, which represents the number of friday the 13ths in that year

// A (Algorithm)
// create count variable, set it to 0
// iterate from 0 up to 11 (January to December), param i
// create new date: (year, i, 13)
// if date.getDay() === 5 , counter += 1

// C (Code)
// function fridayThe13ths(year) {
//   let counter = 0;

//   for (let i = 0; i < 12; i += 1) {
//     let date = new Date(year, i, 13);
//     if (date.getDay() === 5) counter += 1;
//   }

//   return counter;
// }

// function fridayThe13ths(year) {
//   // return [...Array(12)].map((_, idx) => idx).reduce((counter, month) => new Date(year, month, 13).getDay() === 5 ? counter + 1: counter + 0, 0);
// }

const fridayThe13ths = (year) => (
  [...Array(12)].reduce((counter, _, month) => new Date(year, month, 13).getDay() === 5 ? counter + 1: counter + 0, 0)
);

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// end_time: 4:35
// total_time: 12 minutes