// Write a delegate function that can be used to 
// delegate the behavior of a method or function 
// to another object's method. delegate takes a 
// minimum of two arguments:
// (1) the object
// (2) name of the method on the object. 

// The remaining arguments, if any, are 
// passed — as arguments — to the objects' 
// method that it delegates to.

Object.prototype.delegate = function(obj, meth, ...args) {
  return function() {
    obj[meth].apply(obj, args);
  }
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'