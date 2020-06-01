// Further Exploration

var numberOfIntegers = Number(prompt('How many integers do you want to enter?'));
var integers = [];

for (var i = 1; i <= numberOfIntegers; i += 1) {
  integers.push(Number(prompt(`${i}. Please enter an integer greater than 0:`)));
}

var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product:');
operation = operation === 's' ? 'sum' : 'product';

var result;
const sumReducer = (accumulator, integer) => accumulator + integer;
const productReducer = (accumulator, integer) => accumulator * integer;

if (operation == 'sum') {
  result = integers.reduce(sumReducer);
} else {
  result = integers.reduce(productReducer, 1);
}

console.log(`The ${operation} of the integers (${integers.join(', ')}) is ${result}.`)
