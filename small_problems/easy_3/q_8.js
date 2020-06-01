// function swap(string) {
//   var swapped = string.split(' ').map(function(word) {
//     if (word.length === 1) return word;
//     var characters = word.split('');
//     var first = characters.shift();
//     var last = characters.pop();
//     characters.unshift(last);
//     characters.push(first);
//     return characters.join('');
//   });
//   return swapped.join(' ');
// }

function swap(string) {
  var swapped = string.split(' ').map(function(word) {
    if (word.length === 1) return word;
    return word.slice(-1) + word.slice(1, word.length - 1) + word[0];
  });
  return swapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"