const sumOfSums = (arr) => {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 1) {
    sum += arr.slice(0, i).reduce((acc, num) => acc + num, 0);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35