function concat(array1, secondArgument) {
  var newArray = [];

  for(var i = 0; i <= array1.length - 1; i += 1) {
    newArray.push(array1[i]);
  }

  if (Array.isArray(secondArgument)) {
    for(var i = 0; i <= secondArgument.length - 1; i += 1) {
      newArray.push(secondArgument[i]);
    }
  } else { newArray.push(secondArgument) }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

console.log(arr3[5].b = 3);                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }