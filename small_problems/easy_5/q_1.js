// function repeater(string) {
//   return string.split('').map(char => char.repeat(2)).join('');
// }

// Sunny Beatteay's solution
function repeater(string) {
  return string.replace(/(.)/g, '$1$1');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""