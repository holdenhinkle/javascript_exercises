function centerOf(string) {
  var sliceSize = string.length % 2 === 0 ? 2 : 1;
  var middleIndex = Math.ceil(string.length / 2) - 1;
  return string.substr(middleIndex, sliceSize);
}

// Tak Sampson's solution
// function centerOf(str) {
//   var half = str.length / 2;
//   return str.slice(Math.ceil(half - 1), Math.floor(half + 1));
// }

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"