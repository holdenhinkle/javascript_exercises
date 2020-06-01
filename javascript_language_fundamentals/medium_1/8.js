function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var i;
  var sum = 0; // must be set to an inital value of 0

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum; // return statement was missing
}