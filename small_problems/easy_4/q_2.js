function union(...arrays) {
  var results = [];
  arrays.forEach(function(array) {
    array.forEach(function(element) {
      if (!results.includes(element)) results.push(element);
    });
  });
  return results;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
