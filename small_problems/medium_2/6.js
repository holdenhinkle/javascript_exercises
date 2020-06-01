// start_time: 3:22

// PEDAC

// PROBLEM
// input: Number
// Zero or positive integer

// output: Number


// requirements
// Write a function that computes the difference between the 
// square of the sum of the first n positive integers and 
// the sum of the squares of the first n positive integers.

// rules


// mental model

// EXAMPLES/TESTS
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// DATA STRUCTURE
// Number: input and output, 
// number variable that starts at 1
// sumSquare variable that starts at 0
// squareSum variable that starts at 0
// while loop that loops while number variable < input n

// ALGORITHM
// function parameter n
// sumSquare variable that starts at 0
// squareSum variable that starts at 0
// number variable that starts at 1
// while loop that loops while number variable < input n
//   sumSquare += number;
//   squareSum += number**;
// return sumSquare** - squareSum

// CODE
function sumSquareDifference(n) {
  let sumSquare = 0;
  let squareSum = 0;
  
  for (let i = 1; i <= n; i += 1) {
    sumSquare += i;
    squareSum += i**2;
  }

  return sumSquare**2 - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

// end_time: 3:38
// total_time: 16 mins