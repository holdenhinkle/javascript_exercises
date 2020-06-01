// function crunch(string) {
//   result = '';
//   for (var i = 0; i < string.length; i += 1) {
//     if (result[result.length - 1] !== string[i]) {
//       result += string[i];
//     }
//   }
//   return result;
// }

function crunch(string) {
  var crunched = string.match(/[^a-z0-9]|(.)(?=\1)/g);
  return crunched.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""