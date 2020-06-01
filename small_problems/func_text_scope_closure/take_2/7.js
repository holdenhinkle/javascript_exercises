function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();

// no, the function assigned to counter has closed over the count variable via it's closure