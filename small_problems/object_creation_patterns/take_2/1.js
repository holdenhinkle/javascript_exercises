Object.prototype.ancestors = function() {
  let prototypeChain = [];
  let currentThis = Object.getPrototypeOf(this);

  while (currentThis.hasOwnProperty('name')) {
    prototypeChain.push(currentThis.name);
    currentThis = Object.getPrototypeOf(currentThis);
  }

  prototypeChain.push('Object.prototype');

  return prototypeChain;
}


// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']