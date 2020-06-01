function concat(...args) {
  var newArray = [];

  for(var i = 0; i <= args.length - 1; i += 1) {
    if (Array.isArray(args[i])) {
      for(var j = 0; j <= args[i].length - 1; j += 1) {
        newArray.push(args[i][j]);
      }
    } else { newArray.push(args[i]) }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]