// https://launchschool.com/exercises/75bff2a0

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

BECOMES

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15

- - - - - -

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

BECOMES

function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is NaN

counter = 5;
rate = 3;

- - - - - -

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

BECOMES

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15