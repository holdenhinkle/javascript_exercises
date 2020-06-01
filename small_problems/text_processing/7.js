// function staggeredCase(str) {
//   let currentCase = 'lower';

//   return str.split('').map((char) => {
//     if (/[^a-z]/i.test(char)) return char;

//     if (currentCase === 'upper') {
//       currentCase = 'lower';
//       return char.toLowerCase();
//     } else {
//       currentCase = 'upper';
//       return char.toUpperCase();
//     }
//   }).join('');
// }

// - -

function staggeredCase(str) {
  let nextUpper = true;

  return str.split('').map((char) => {
    if (/[^a-z]/i.test(char)) return char;
    let newChar;
    newChar = nextUpper ? char.toUpperCase() : char.toLowerCase();
    nextUpper = !nextUpper;
    return newChar;
  }).join('');
}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"