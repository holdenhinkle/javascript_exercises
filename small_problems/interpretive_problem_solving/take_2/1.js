// PEDAC

// PROBLEM
// Input
// Number (n)

// Output
// Array, each element represents a light (1 - n) that is still on

// Requirements
// Given a number n, create a bank with n switches/lights (each switch belongs to a single light).

// By default each light is off.

// Iterate through the bank of switch n times, each time starting at n, and jumping n switches, like so, toggling the switch's state:
// 1
// 1 2 3 4 5 6 7 8 9... n

// 2
// 2 4 6 8 10... n

// 3
// 3 6 9... n

// If the switch'e state is on, toggling will turn it off. If it's off, toggling will turn it on.

// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// Rules
// Every switch is connected to exactly one light that is initially off. 

// Rules for input:
// Only integers.
// No negative integers.

// Mental Model

// EXAMPLES/TESTS
// lightsOn(5);        // [1, 4]
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// DATA STRUCTURES
// Number: Input
// Array: Create array of n switches set to off
// Boolean: Each switch is represented by a boolean; true is on, false is off
// For Loop: Iterate from 1 to n (inclusive) using a for loop
// Reduce: Reduce switches array to new array that has index + 1 of each switch that is 'on'

// ALGORITHM
// function parameter switches
// create new array called bank, with length n, with each index set to a value of false
// iterate using for loop
//   create variable i set to 0, i less than switches, i += 1
//     create another for loop
//       create variable j and set it to n, n is less than switches, j += j
//         set bank[j] = !bank[j]

// Return Reduce switches array to new array using parameters array, switch and index
//   Reduce function: if switch is on, push index +1 to the new array (switch numbers start at 1, not 0)

// CODE
function lightsOn(switches) {
  let bank = new Array(switches).fill(false);
  
  for (let i = 1; i <= switches; i += 1) {
    for (let j = i - 1; j < switches; j += i) {
      bank[j] = !bank[j];
    }
  }

  return bank.reduce((array, light, index) => {
    if (light) array.push(index + 1);
    return array;
  }, []);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]