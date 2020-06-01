// start_time: 3:50

// PEDAC

// PROBLEM
// Input: Array

// Output: Array

// Requirements
// Write a function that takes an array as an argument and sorts that array 
// using the bubble sort algorithm described above.

// Rules
// The sorting should be done "in-place" — that is, the function should mutate the array.
// You may assume that the array contains at least two elements.

// Mental Model

// EXAMPLES / TESTS
// var array = [5, 3];
// bubbleSort(array);
// console.log(array);    // [3, 5]

// var array = [6, 2, 7, 1, 4];
// bubbleSort(array);
// console.log(array);    // [1, 2, 4, 6, 7]

// var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array);
// console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// DATA STRUCTURE
// Boolean: swap flag set to first iteration
// Array: input array (sorted array)
// Number: to access the elements of the array

// ALGORITHM
// input parameter: array
// create variable swapped and set it to the return value of function makePass which takes the array as an argument
// function makePass
//   parameter: array
//   create variable swapped and set it to false
//   iterate through array using forEach with parameter el and i
//   compare el > array[i + 1]
//     if true:
//       swapped = true;
//       parrallel assignement:
//         [array[i], array[i + 1]] = array[i + 1], array[i]
//   return swapped

//   interate through while loop
//     while swapped === false
//       swapped = makePass(array)
    
//   return array
// CODE
function bubbleSort(arr) {
  function makePass(arr){
    let swapped = false;

    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    return swapped;
  }

  let swapped = makePass(arr);

  while (swapped) {
    swapped = makePass(arr);
  }

  return arr;
}

var array = [5, 3];
console.log(bubbleSort(array));
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
console.log(bubbleSort(array));
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array));
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// end_time: 4:18
// total_time: 28 minutes