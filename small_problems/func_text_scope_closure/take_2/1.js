// var person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: function() {
//     return this.firstName + this.lastName
//   },
// };

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName());

