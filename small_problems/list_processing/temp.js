function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

var methods = {
   foo: function () {
     console.log('hello');
   },
};

iterate([1, 2, 3], methods.foo);