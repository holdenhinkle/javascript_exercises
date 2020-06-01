var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // 7

//  In JavaScript, when an argument is passed to a function, 
// a local variable with the same name as the corresponding 
// parameter is created within the inner scope of the function. 
// Therefore, there are two variables named a that exist in this 
// program: one in the global scope and the other in the 
// function's local scope. Therefore, the reassignment of 
// the local variable a within the function has no effect 
// on the global variable a.