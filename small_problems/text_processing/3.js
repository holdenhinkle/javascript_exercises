// let letterCaseCount = (str) => {
//   let tally = { lowercase: 0, uppercase: 0, neither: 0, };
//   str.split('').forEach(char => {
//     if (/[a-z]/.test(char)) {
//       tally.lowercase += 1; 
//     } else if (/[A-Z]/.test(char)) {
//       tally.uppercase += 1; 
//     } else if (/[^a-z]/i.test(char)) {
//       tally.neither += 1; 
//     }
//   });
//   return tally;
// }

// - -

let letterCaseCount = (str) => {
  let lowercase = str.match(/[a-z]/g) || [];
  let uppercase = str.match(/[A-Z]/g) || [];
  let neutral = str.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neutral: neutral.length,
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }