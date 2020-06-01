function myBind(func, ctx) {
  var partialArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
    var remainingArgs = Array.prototype.slice.call(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function addArguments(arg1, arg2) {
  return arg1 + arg2
}

// Create a function with a preset first argument.
var addThirtySeven = myBind(addArguments, null, 37);

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 , second argument is ignored

console.log(result3);

// function test(arg1, arg2, arg3) {
//   console.log(`arg1: ${arg1}`);
//   console.log(`arg2: ${arg2}`);
//   console.log(`arg3: ${arg3}`);

//   args = Array.prototype.slice.call(arguments);
//   console.log(`args: ${args}`);
// }

// arr = [1,2,3,4,5];
// test(arr);
// // arg1: 1,2,3,4,5
// // arg2: undefined
// // arg3: undefined
// // args: 1,2,3,4,5

// test.apply(null, arr);
// // arg1: 1
// // arg2: 2
// // arg3: 3
// // args: 1,2,3,4,5