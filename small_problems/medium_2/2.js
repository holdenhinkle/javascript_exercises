// start_time: 2:04

// P (Problem)
// Input: 
// Array of 3 numbers

// Output: 
// String

// Requirements: 
// Given an array of 3 triangle lengths, determine the type of triangle, or if the triangle is invalid

// Rules: 
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// Invalid: sum of two shortest sides is less than legnth of longest side, 

// Mental model: 


// E (Example/Test Cases)
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// D (Data Structure)
// Array: input
// Number: elements of input array
// String: output

// A (Algorithm)
// determine if input is invalid
// sum of two shortest sides is less than legnth of longest side
// or if a side has a long of < 0

// create function sideLessThanZero(n) returns false if a side is < 0, otherwise true
// create function shortestSidesTooShort(n)
//   get largest side
//   filter out largest side, and sum shortest sides
//   return false if sum of two shortest sides is less than legnth of longest side
//   return true

// create array of uniqueLengths set to empty array []
// iterate through input array using for eachEach, with block parameter 'side'
// if (uniqueLengths.includes(side)) return
// otherwise uniqueLengths.push(side)

// functionTypeOfTriangle(uniqueLengths)
// if uniqueLengths === 3, then Scalene
// if uniqueLengths === 2, then Isosceles
// Equilateral

// return functionTypeOfTriangle(uniqueLengths)
// C (Code)
function triangle(...triangle) {
  function invalid(sides) {
    for (let i = 0; i < sides.length; i += 1) {
      if (sides[i] <= 0) return true;
    }

    let sidesCopy = sides.slice();
    let largestSide = Math.max(...sidesCopy);
    sidesCopy.splice(sidesCopy.indexOf(largestSide), 1);
    return sidesCopy[0] + sidesCopy[1] < largestSide
  }

  function typeOfTriangle(uniqueLengths) {
    if (uniqueLengths.length === 1) {
      return 'equilateral';
    } else if (uniqueLengths.length === 2) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  if (invalid(triangle)) return 'invalid';

  let uniqueLengths = [];

  triangle.forEach(side => {
    if (uniqueLengths.includes(side)) return;
    uniqueLengths.push(side);
  });

  return typeOfTriangle(uniqueLengths);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// end_time: 2:30, total 26 mins
// start_time: 3:10
// end_time: 3:18
// total_time: 34 mins