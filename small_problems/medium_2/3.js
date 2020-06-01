// start_time: 3:26

// P (Problem)
// Input: 
// Number: 3 numbers, representing the three angles of a triangle

// Output: 
// String

// Requirements: 
// Write a function that takes the three angles of a triangle as arguments, 
// and returns one of the following four strings representing the 
// triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// Rules: 
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
// and every angle must be greater than 0. If either of these conditions 
// is not satisfied, the triangle is invalid.

// You may assume that all angles have integer values, so you do not 
// have to worry about floating point errors.

// You may also assume that the arguments are in degrees.

// Mental model: 

// E (Example/Test Cases)
// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

// D (Data Structure)
// Number: angles are represented by Number
// Array: numbers are in Array
// String: function's return value (triangle type or invalid)

// A (Algorithm)
// test for isValid
// if true:
//   if isAcute, return acute
//   if isRight, return right
//   if isObtuse, return obtuse
// return 'invalid'

// Functions:
// isValid:
//   validAngles (return angles are greater than 0)
//   AND
//   ValidSum (return sum of angles is 180)

//   isAcute: filter angle === 90, result is length of 1
    
//   isRight: filter angle < 90, result is length of 3

//   isObtuse: filter angle > 90, result is length of 1

// C (Code)
// function triangle(...angles) {
//   function isValid(angles) {
//     const validAngles = (angles) => angles.filter(angle => angle <= 0).length === 0;
//     const validSum = (angles) => angles.reduce((sum, angle) => sum + angle, 0) === 180;

//     return validAngles(angles) && validSum(angles)
//   }

//   function getTriangleType(angles) {
//     const isRight = (angles) => angles.filter(angle => angle === 90).length === 1;
//     const isAcute = (angles) => angles.filter(angle => angle < 90).length === 3;
//     const isObtuse = (angles) => angles.filter(angle => angle > 90).length === 1;

//     if (isAcute(angles)) {
//       return 'acute';
//     } else if (isRight(angles)) {
//       return 'right';
//     } else if (isObtuse(angles)) {
//       return 'obtuse';
//     }
//   }

//   if (isValid(angles)) {
//     return getTriangleType(angles);
//   } else {
//     return 'invalid';
//   }
// }

// REFACTOR IS IN PROGRESS

// I REALLY LIKE THE FOLLOWING SOLUTION:
// function triangle(a, b, c) {
//   var tri = [a, b, c];
//   if (a + b + c !== 180 || tri.some(n => n <= 0)) return 'invalid';
//   if (tri.some(n => n === 90)) return 'right';
//   if (tri.every(n => n < 90)) return 'acute';
//   return 'obtuse';
// }

function triangle(ang1, ang2, ang3) {
  function isValid(angles) {
    const validAngles = (angles) => angles.filter(angle => angle <= 0).length === 0;
    const validSum = (angles) => angles.reduce((sum, angle) => sum + angle, 0) === 180;

    return validAngles(angles) && validSum(angles)
  }

  function getTriangleType(angles) {
    const isRight = (angles) => angles.some(angle => angle === 90);
    const isAcute = (angles) => angles.every(angle => angle < 90);

    if (isAcute(angles)) {
      return 'acute';
    } else if (isRight(angles)) {
      return 'right';
    } else return 'obtuse';
  }

  if (isValid([ang1, ang2, ang3])) return getTriangleType([ang1, ang2, ang3]);
  return 'invalid';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// end_time: 3:58
// total_time: 32