// version 1
function runningTotal(array) {
  var sum = 0;
  return array.map(number => sum += number);
}

// version 2
function runningTotal(array) {
  var result = [];
  array.forEach(function(number) {
    if (result.length === 0) {
      result.push(number);
      return;
    }
    result.push(result[result.length - 1] + number);
  });
  return result;
}

// version 3
function runningTotal(array) {
  var sum = 0;
  var result = [];
  array.forEach(function(number) {
    sum += number;
    result.push(sum);
  });
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []