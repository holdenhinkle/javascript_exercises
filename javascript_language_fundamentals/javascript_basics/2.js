var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // Hello
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World'); // World
}

if (myOtherString || myArray) {
  console.log('!'); // !
}