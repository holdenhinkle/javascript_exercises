function slice(array, begin, end) {
  !(begin > array.length) || (begin = array.length);
  !(end > array.length) || (end = array.length);

  var new_array = [];

  for(var i = begin; i < end; i += 1) {
    new_array.push(array[i]);
  }
  
  return new_array;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]

function splice(array, start, deleteCount, element1, elementN) {
  var length = array.length;

  !(start > length) || (start = length);
  !(deleteCount > length - 1 - start) || (deleteCount = length - start);

  var deletedElements = slice(array, start, start + deleteCount);

  if (deleteCount > 0) {
    for(var i = start + deleteCount; i <= length; i += 1 ) {
      array[i - start] = array[i];
    }
    array.length = length - deleteCount;
  }

  var elementsToAdd = [];

  !(element1 !== undefined) || elementsToAdd.push(element1);
  !(elementN !== undefined) || elementsToAdd.push(elementN);

  for(var j = 0; j < elementsToAdd.length; j += 1) {
    array.length += 1;
    for(var k = array.length - 2; k >= start; k -= 1) {
      array[k + 1] = array[k];
    }
    array[start] = elementsToAdd[j]
    start += 1;
  }

  return deletedElements;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]