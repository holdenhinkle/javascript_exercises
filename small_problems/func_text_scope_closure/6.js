function myFilter(array, func, context) {
  var result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
    // if (func(value)) {
      result.push(value);
    }
  });

  console.log(result);

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]