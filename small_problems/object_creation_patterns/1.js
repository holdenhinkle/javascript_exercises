// Implement an ancestors method that returns the 
// prototype chain (ancestors) of a calling object 
// as an array of object names. Here's an example output:

// Object.prototype.ancestors = function() {
//   let results = [];
//   let obj = this;

//   while (Object.getPrototypeOf(obj).constructor.name !== 'Object') {
//   // while (obj !== 'Object.prototype') {
//     // console.log(obj);
//     obj = Object.getPrototypeOf(obj);
//     results.push(obj.constructor.name);
//   }

//   return results;
// }

Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

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