// Create a function myBind, that accepts two arguments: 
// 1) The function to bind, 
// 2) The context object, 
// ...and returns a new function that's hard-bound to 
// the passed in context object.

function myBind(func, obj) {
  return function() {
    return func(obj);
  };
}

let holden = {
  name: 'holden',
  age: 46,
};

function printPerson(person) {
  console.log(person.name + ' ' + person.age);
}

let printHolden = myBind(printPerson, holden);

printHolden();