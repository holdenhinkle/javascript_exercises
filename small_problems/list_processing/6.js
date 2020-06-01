// function substrings(str) {
//   let results = [];
//   for (let i = 0; i < str.length; i += 1) {
//     results.concat(substringsAtStart(str.slice(i)));
//   }
//   return results;
// }

// - -

// const substrings = (str) => {
//   return str.split('').reduce((a, _, i) => a.concat(substringsAtStart(str.slice(i))), []);
// }

// const substringsAtStart = (str) => str.split('').map((_, i) => str.slice(0, i + 1));

// - -

const substrings = (str) => {
  return str.split('').map((_, i) => substringsAtStart(str.slice(i))).flat();
}

const substringsAtStart = (str) => str.split('').map((_, i) => str.slice(0, i + 1));

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]