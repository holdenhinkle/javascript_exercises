function isOdd(num) {
  return num % 2 !== 0;
}

function logSumUntilLimitReached(term1, term2, limit) {
  var sum = term1 + term2;
  if (sum > limit) return;
  console.log(sum);
}

function oddNumbers(min, max) {
  var i;
  var start = min;
  var end = max;
  var oddNums = [1, 3, 5, 7, 9];

  if (min > max || min < 0 || !max) {
    console.log('min must be greater than max and both must be integers greater than 0');
    return;
  }

  if (isOdd(min)) start -= 1;

  for (i = start; i < end; i += 10) {
    oddNums.forEach(function(oddNum) {
      logSumUntilLimitReached(oddNum, i, end);
    });
  }
}

oddNumbers(11, 21);