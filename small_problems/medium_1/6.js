// PEDAC

// PROBLEM
// Input
// Number

// Output
// Number

// Requirements
// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

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
// 5
// 4 + 3 = 7

// 4
// 3 + 2 = 5

// 3
// 2 + 1 = 3

// 2
// 1 + 1 = 2

// CODE
// This following is LS's solution:
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765