function sequence(number) {
  var result = [];
  for (var i = 1; i <= number; i += 1) {
    result.push(i);
  }
  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]