function myBind(func, obj) {
  return function() {
    return func.call(obj);
  };
}

let holden = {
  name: 'holden',
  age: 46,
};

function printPerson() {
  console.log(this.name + ' ' + this.age);
}

let printHolden = myBind(printPerson, holden);

printHolden();