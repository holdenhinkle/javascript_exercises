// PEDAC

// PROBLEM
// Input
// Number

// Output
// Number

// Requirements
// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Rules
// First two numbers are 1. Each Fibonacci number is the sum of the two previous Fibonacci numbers.

// Mental Model

// EXAMPLES / TESTS
// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

// DATA STRUCTURES
// Number: input and output
// Function: the algorithm will be recursive.

// ALGORITHM
// f1 = 1, f2 = 1

// f1 = 1
// f2 = 1
// f3 = 2
// f4 = 3
// f5 = 5
// f6 = 8
// f7 = 13
// f8 = 21
// f9 = 34
// f10 = 55

// iterate from 1 up to given number n (the function parameter)

// last = 1
// secondToLast = 1
// fibonacci
// iterate from 1 up to n (inclusive)
//   if (n === 1 || n === 2) fibonacci =  1
//   fibonacci = secondToLast + last;
//   last, secondToLast = (secondToLast + last), last
// return fibonacci


// CODE
function fibonacci(nth) {
  let secondToLast = 1;
  let last = 1;

  for (let i = 3; i <= nth; i += 1) {
    [last, secondToLast] = [(secondToLast + last), last];
  }

  return last;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
