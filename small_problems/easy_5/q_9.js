// function reverseSentence(sentence) {
//   result = [];
//   sentence.split(' ').forEach((word) => result.unshift(word) );
//   return result.join(' ');
// }

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"