function palindromes(str) {
  let results = [];
  for (let left = 0; left < str.length; left += 1) {
    for (let right = left + 1; right <= str.length; right += 1) {
      let slice = str.slice(left, right)
      if (slice === slice.split('').reverse().join('') && slice.length > 1) results.push(slice);
    }
  }
  return results;
}

// function palindromes(str) {
//   return substrings(str).filter(slice => {
//     return slice === slice.split('').reverse().join('') && slice.length > 1;
//   });
// }

// const substrings = (str) => {
//   return str.split('').map((_, i) => substringsAtStart(str.slice(i))).flat();
// }

// const substringsAtStart = (str) => str.split('').map((_, i) => str.slice(0, i + 1));

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]