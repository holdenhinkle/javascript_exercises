// my own
// function afterMidnight(str) {
//   var hours = Number(str.split(':')[0]);
//   var minutes = Number(str.split(':')[1]);
//   return hours * 60 + minutes
// }

// function beforeMidnight(str) {
//   var hours = Number(str.split(':')[0]);
//   var minutes = Number(str.split(':')[1]);
//   return (hours - 1) * 60 + (60 - minutes);
// }

// solutions i like
function afterMidnight(time) {
  return new Date('1970-01-01T' + time + 'Z').getTime() / 60000;
}

function beforeMidnight(time) {
  return (1440 - afterMidnight(time)) % 1440;
}

// - -

// function afterMidnight(str) {
//   return Math.abs((new Date('1970-01-01T00:00') - new Date(`1970-01-01T${str}`)) / 60000);
// }

// function beforeMidnight(str) {
//   return (1440 - afterMidnight(str)) % 1440;
// }

// - -

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686