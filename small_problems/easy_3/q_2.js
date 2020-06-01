var numbers = [];
var value;

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

value = prompt('Enter a special number:');

const isIncluded = (number) => Number(number) > Number(value);

if (numbers.some(isIncluded)) {
  console.log('The number ' + value + ' is less than at least one number in [' + numbers.join(', ') + '].');
} else {
  console.log('The number ' + value + ' is greater than all numbers in [' + numbers.join(', ') + '].');
}