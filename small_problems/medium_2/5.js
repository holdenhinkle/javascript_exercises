// start_time 2:00

// PEDAC

// PROBLEM
// Input: Number
// Output: Number
// Requirements: Given a Number, return the number's next 'featured' number.
// A featured number is:
// is odd
// is a multiple of 7
// is comprised of unique digits

// Rules:
// Issue an error message if there is no featured number
// Mental model:

// EXAMPLES
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987

// DATA STRUCTURE
// Number: Input and output
// While loop until featured number or number is greater than max featured

// ALGORITHM
// set const MAX_FEATURED
// set number to the input number's next highest number that is a multiple of 7
//   function firstOddMultipleOfSeven(number)
//   return number + 7 if number % 7 === 0
//     from number plus 1 to number plus 6
//     return number if number % / 7 is zero
//     number += 1

// while number !isNextFeaturedNumber && number < MAX_FEATURED
//   return number if number isNextFeaturedNumber
//   number increments by 1

// function isNextFeatured(n)
// return true if:
// n % 7 === 0 and allDigitsAreUnique
// return false
  
// function allDigitsAreUnique(n)
// convert number to String, convert string to array
// create variable digits
// iterate through array
// return false if digits includes n
// return true

// CODE
function featured(n) {
  function firstOddMultipleOfSeven(n) {
    for (let i = n + 1; i < n + 15; i += 1) {
      if (isOdd(i) && isMultipleOfSeven(i)) return i;
    }
  }

  function isNextFeaturedNumber(n) {
    if (isOdd(n) && isMultipleOfSeven(n) && allDigitsAreUnique(n)) return true;
    return false;
  }

  function allDigitsAreUnique(n) {
    let digits = [];
    n = String(n).split('');

    for (let i = 0; i < n.length; i += 1) {
      if (digits.includes(n[i])) return false;
      digits.push(n[i]);
    }

    return true;
  }

  const MAX_FEATURED = 9876543201;
  const isOdd = (n) => n % 2 === 1;
  const isMultipleOfSeven = (n) => n % 7 === 0;
  n = firstOddMultipleOfSeven(n);

  while (n < MAX_FEATURED) {
    if (isNextFeaturedNumber(n)) return n;
    n += 14;
  }

  return 'There is not next featured number.'
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));    // 'There is not next featured number.'

// end_time: 2:32
// total_time: 32 mins