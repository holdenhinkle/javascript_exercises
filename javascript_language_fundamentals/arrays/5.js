function pop(array) {
  if (array.length === 0) { return undefined }
  var last_element = array[array.length - 1];
  array.length = array.length - 1;
  return last_element;
}

function push(array, ...values) {
  for(var i = 0; i < values.length; i += 1) {
    array[array.length] = values[i];
  }
  
  return array.length;
}

// pop
var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0