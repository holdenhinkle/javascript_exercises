var NUMBERS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  var number = 0;

  for (var i = 0; i < string.length; i+=1) {
    number = number * 10 + NUMBERS[string[i]];
  }

  return number;
}

function stringToSignedInteger(string) {
  var sign = string[0] === '-' ? -1 : 1;
  if (string[0] === '-' || string[0] === '+') { string = string.slice(1) }
  return stringToInteger(string) * sign
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100