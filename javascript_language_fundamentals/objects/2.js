var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName); // [function] [function]

// the above logs the following:

// function () {
//   return 'Victor';
// } function () {
//   return 'Reyes';
// }