var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7) = 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 10 + (5 * 7) = 45