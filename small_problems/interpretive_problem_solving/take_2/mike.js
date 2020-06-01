// PEDAC

// PROBLEM
// Input: 
// String

// Output: 
// String

// Reqirements
// Implement a function likes, which must take in the names of people who like an item.
// It must return the display text as shown in the examples:
// likes(''); // must be "no one likes this"
// likes("Peter"); // must be "Peter likes this"
// likes("Jacob, Alex"); // must be "Jacob and Alex like this"
// likes("Max, John, Mark"); // must be "Max, John and Mark like this"
// likes("Alex, Jacob, Mark, Max"); // must be "Alex, Jacob and 2 others like this"

// Rules
// Can be empty string
// If 1 person (eg Peter) => "Peter likes this"
// if 2 people (eg Jacob, Alex) => "Jacob and Alex like this"
//   combine names with 'and'
// if 3 people (eg Max, John, Mark) => "Max, John and Mark like this" 
//   join names with comma, except last join must be 'and'
// If more than 3 people (eg Alex, Jacob, Mark, Max) => "Alex, Jacob and 2 others like this"
//   first two names, joined by comma and count of remaining people

// Input will always be a string.

// Mental Model

// EXAMPLES / TESTS
// likes(''); // must be "no one likes this"
// likes("Peter"); // must be "Peter likes this"
// likes("Jacob, Alex"); // must be "Jacob and Alex like this"
// likes("Max, John, Mark"); // must be "Max, John and Mark like this"
// likes("Alex, Jacob, Mark, Max"); // must be "Alex, Jacob and 2 others like this"
// likes("Alex, Jacob, Mark, Max, Mike"); // must be "Alex, Jacob and 3 others like this"

// DATA STRUCTURES
// String: the input, the output
// Array: we'll split the input string into an array on ', '
// Number: If array.length > 3

// ALGORITHM
// Function parameter is names
// if names is empty return "no one likes this"
// reassign names to array of names, splitting names on ', '
// create variable nameCount = names.length

// if nameCount === 1
// return `names[0] likes this`
// if nameCount === 2
// return `names[0] and names[1] like this`
// if nameCount === 3
// return `names[0], names[1] and names[2] like this`
// if namecount > 3
// return `names[0], names[1] and names.length - 2 others like this`

// CODE
function likes(names) {
  if (names === '') return 'no one likes this';

  names = names.split(', ');
  let nameCount = names.length;

  if (nameCount === 1) {
    return `${names[0]} likes this`;
  } else if (nameCount === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (nameCount === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${nameCount - 2} others like this`;
  }
}

console.log(likes('')); // must be "no one likes this"
console.log(likes("Peter")); // must be "Peter likes this"
console.log(likes("Jacob, Alex")); // must be "Jacob and Alex like this"
console.log(likes("Max, John, Mark")); // must be "Max, John and Mark like this"
console.log(likes("Alex, Jacob, Mark, Max")); // must be "Alex, Jacob and 2 others like this"
console.log(likes("Alex, Jacob, Mark, Max, Mike")); // must be "Alex, Jacob and 3 others like this"
