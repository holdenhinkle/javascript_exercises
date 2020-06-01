//not hoisted
// var myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   var sum = 0;
//   var i;

//   for (i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// average(myArray);

// hoisted
// function average(array) {
//   var sum = 0;
//   var i;

//   for (i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// var myArray;

// myArray = [5, 5];
// myArray[-1] = 5; // [5, 5, '-1': 5]
// myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5]

// average(myArray); // user thinks 5 will be returned but it's 10

// refactored
function average(array) {
  var sum = 0;
  var i;

  for (i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

var myArray;

myArray = [5, 5];
myArray[-1] = 5; // [5, 5, '-1': 5]
myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5]

console.log(average(myArray)); // changed the variable i in #average to 0, the first index of an array.
