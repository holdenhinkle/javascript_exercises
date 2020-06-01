function copyArray(array) {
  var copy = [];

  for (var i = 0; i <= array.length - 1; i += 1) {
    copy.push(array[i]);
  }

  return copy
}

var myArray = [1, 2, 3, 4];
var myOtherArray = copyArray(myArray);

// or myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

