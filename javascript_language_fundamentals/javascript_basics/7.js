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

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570