// original - doesn't work
// function penultimate(string) {
//   return string.split(' ')[-2];
// }

function penultimate(string) {
  var array = string.split(' ');
  return array[array.length - 2];
}

// ls solution
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"