function tipCalculator() {
  var bill = Number(prompt('What is the bill amount?'));
  var tipPercentage = Number(prompt('What is the tip percentage?'));
  var tipTotal = ((tipPercentage / 100) * bill);
  var billTotal = bill + tipTotal;
  console.log(`The tip is is \$${tipTotal.toFixed(2)}`);
  console.log(`The total is \$${billTotal.toFixed(2)}`);
}

tipCalculator();
