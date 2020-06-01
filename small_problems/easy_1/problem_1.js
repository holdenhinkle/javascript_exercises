// function oddNumbers() {
//   for (var n = 1; n <= 99; n += 2) {
//     console.log(n);
//   }
// }

// Further exploration
function oddNumbers() {
  var number;
  var low_number = Number(prompt('Enter a low number:'));
  var high_number = Number(prompt('Enter a high number:'));

  if (low_number % 2 === 1) {
    number = low_number
  } else number = low_number + 1;

  while (number <= high_number) {
    console.log(number);
    number += 2;
  }
}

oddNumbers();
