// start time: 11:52am

// P (Problem)
// Input:
// Integer

// Output:
// Array

// Requirements:
// Input represents n number of switches in bank.
// Each switch is initially set to off.
// Iterate through bank of switches n number of times, each time starting at n, and toggle every n switch.
// Return array of lights that are on.

// Rules: 
// Mental model: 

// E (Example/Test Cases)
// lightsOn(5);        // [1, 4]
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// D (Data Structure)
// Input is number
// Output is array
// Bank of switches will be array of type boolean.
// True is on
// False is off

// A (Algorithm)
// create function lightsOn with parameter named numberOfLights
// create array call lights with length numberOfLights
// each element of the array will be set to a boolean value of false
// iterate from i (index of the first switch in lights) upto numberOfLights - 1, and increment the counter by i + 1
//   splice the array value to !value of the array
// return a filter of lights, where element is true

// 0 1 2 3 4 5 // every 1
// 1 3 5 // every 2
// 2 4 // every 3
// 3 // every 4
// 4 // every 5
// 5 // every 6

// nested for loop

// for (let i === 1; i <= number; i += 1) {
//   for (let j === 0; j < number; j += i) {
//   }
// }


// C (Code)
function lightsOn(numberOfLights) {
  let lights = new Array(numberOfLights).fill(false);

  for (let i = 1; i <= numberOfLights; i += 1) {
    for (let j = i - 1; j < numberOfLights; j += i) {
      lights[j] = !lights[j];
    }
  }

  return lights.map((light, idx) => light ? idx + 1 : light).filter(Boolean);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// finish time : 12:35
// total: 42 minutes