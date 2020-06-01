// start time 1:16

// P (Problem)
// Input:
// Number

// Output:
// String

// Requirements:
// Input will always be an odd Number
// Create a diamond with width of input 

// Rules: 
// Mental model: 

// E (Example/Test Cases)
// diamond(1);
// // // logs
// // *

// diamond(3);
// // logs
// //  *
// // ***
// //  *

// // diamond(9);
// // // logs
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// //  *******
// //   *****
// //    ***
// //     *
 

// D (Data Structure)
// Array of number of empty spaces
// Create empty string variable. Add to it, then return it

// A (Algorithm)
// diamond = '';
// create spaceFirstHalf Array, set to []
// iterate from 0 up to floor(input number / 2)
// push index + 1 to sapces array
// create spacesSecondHalf = spacesFirstHalf.slice().reverse();
// spacesFirstHalf.push(0)
// spaces = first.concat(sendond)
// iterate from 0 up to < number
// diamond += `${' '.repeat(spaces[i])} + ${*.repeat(i)}`;
// return diamond

// C (Code)
// function diamond(size) {
//   let halfSize = Math.floor(size / 2);
//   let paddingSpacesForTopHalf = [...Array(halfSize)].map((_, i) => halfSize - i);
//   let paddingSpaces = paddingSpacesForTopHalf.concat(paddingSpacesForTopHalf.slice().reverse());
//   paddingSpaces.splice(halfSize, 0 , 0);
//   return paddingSpaces.map(spaces => ' '.repeat(spaces) + '*'.repeat(size - spaces * 2) + '\n').join('');
// }

// function diamond(size) {
//   function buildArrayOfPaddingSpaceValues(size) {
//     let halfSize = Math.floor(size / 2);
//     let paddingSpacesForTopHalf = [...Array(halfSize)].map((_, i) => halfSize - i);
//     let paddingSpaces = paddingSpacesForTopHalf.concat(paddingSpacesForTopHalf.slice().reverse());
//     paddingSpaces.splice(halfSize, 0 , 0);
//     return paddingSpaces;
//   }
  
//   function hollowOutStars(stars) {
//     return stars.split('').map((star, idx) => {
//       return idx === 0 || idx === stars.length - 1 ? star : ' '}).join('');
//   }

//   let paddingSpaces = buildArrayOfPaddingSpaceValues(size);

//   return paddingSpaces.map(spaces => {
//     return ' '.repeat(spaces) +
//            hollowOutStars('*'.repeat(size - spaces * 2)) +
//            '\n'}).join('');
// }

function diamond(size) {
  function buildArrayOfPaddingSpaceValues(size) {
    let halfSize = Math.floor(size / 2);
    let paddingSpacesForTopHalf = [...Array(halfSize)].map((_, i) => halfSize - i);
    let paddingSpaces = paddingSpacesForTopHalf.concat(paddingSpacesForTopHalf.slice().reverse());
    paddingSpaces.splice(halfSize, 0 , 0);
    return paddingSpaces;
  }
  
  function hollowOutStars(stars) {
    // if (stars === '*') return stars;
    // stars = stars.split('');
    // stars.splice(1, stars.length - 2, ' '.repeat(stars.length - 2));
    // return stars.join('');
    return stars.split('').map((star, idx) => idx === 0 || idx === stars.length - 1 ? star : ' ').join('');
  }

  let paddingSpaces = buildArrayOfPaddingSpaceValues(size);

  return paddingSpaces.map(spaces => ' '.repeat(spaces) + hollowOutStars('*'.repeat(size - spaces * 2)) + '\n').join('');
}


console.log(diamond(1));
// // logs
// *

console.log(diamond(3));
// logs
//  *
// ***
//  *

console.log(diamond(5));

console.log(diamond(7));

console.log(diamond(11));
// end 1:51
