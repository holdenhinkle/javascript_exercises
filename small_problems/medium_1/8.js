// function fibonacci(nth, numbers = {}) {
//   if (nth <= 2) {
//     return 1;
//   } else {
//     if (numbers[nth]) {
//       return numbers[nth];
//     } else {
//       numbers[nth] = fibonacci(nth - 1, numbers) + fibonacci(nth - 2, numbers);
//       return numbers[nth];
//     }
//   }
// }

function fibonacci(nth, cache = {}) {
  if (nth <= 2) {
    return 1;
  } else return (function(cache) {
    return cache[nth] || (cache[nth] = fibonacci(nth - 1, cache) + fibonacci(nth - 2, cache));
  }(cache));
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
