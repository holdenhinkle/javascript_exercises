// P (Problem)
// Input:
// Array (populated or empty)

// Output:
// Array

// Requirements: 
// Remove the element at index 0 of an array and add it to the end of the array.

// Rules: 
// If input is not an array, return undefined
// If input is an empty array, return an empty array
// Do not modify the original array

// Mental model: 
// Return undefined if input is not an array.
// Create copy of the array.
// shift the first element of the array.
// push it on to the end of the array.
// return the new array.

// E (Example/Test Cases)
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// var array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// D (Data Structure)
// Array: input and output
// Undefined: If input is not array

// A (Algorithm)
// return map of array
//   Map function: 
//     Map params: element, index
//     if index === 0, return array.slice(-1, 1)
//     if index === array.length - 1, return array.slice(0, 1)
//     else return element

// C (Code)
function rotateArray(array) {
  if (Array.isArray(array)) {
    return array.map((_element, index) => {
      if (index === array.length - 1) return array[0];
      return array[index + 1]
    });
  }

  return undefined;
}

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];

//   let newArray = array.slice();
//   newArray.push(newArray.shift());
//   return newArray;
// }

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]