// const swapCase = (str) => {
//   let results = '';
//   str.split('').forEach(char => {
//     if (char === char.toLowerCase()) {
//       results += char.toUpperCase() ;
//     } else results += char.toLowerCase();
//   });
//   return results;
// }

// - -

// const swapCase = (str) => {
//   let results = '';
//   str.split('').forEach(char => {
//     results += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
//   });
//   return results;
// }

// - -

// const swapCase = (str) => {
//   let results = '';
//   str.split('').forEach(char => {
//     results += /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
//   });
//   return results;
// }

// - - 

// const swapCase = (str) => {
//   return str.split('').map(char => {
//     return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
//   }).join('');
// }

// - -

const swapCase = (str) => str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('');

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"