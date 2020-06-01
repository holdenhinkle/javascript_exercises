function stringy(integer) {
  stringyString = '';
  for (var i = 1; i <= integer; i += 1) {
    stringyString += i % 2 === 0 ? '0' : '1'
  }
  return stringyString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
