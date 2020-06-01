// function shift(array) {
//   return array.splice(0, 1)[0];
// }

function shift(array) {
  if (array.length === 0) return undefined;

  var first_element = array[0];

  for(var i = 1; i <= array.length - 1; i += 1) {
    array[i - 1] = array[i];
  }

  array.length = array.length - 1;

  return first_element;
}

// function unshift(array, ...args) {
//   args.forEach(function(arg) {
//     array.splice(0, 0, arg);
//   });

//   return array.length;
// }

function unshift(array, ...args) {
  for(var i = 0; i <= args.length - 1; i += 1) {
    array.length = array.length + 1;
    for(var j = array.length - 2; j >= 0; j -=1) {
      array[j + 1] = array[j];
    }
    array[0] = args[i];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]