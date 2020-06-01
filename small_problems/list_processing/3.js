function multiplyAllPairs(arr1, arr2) {
  // create results empty array
  // interate through arr1 with num1 block parameter
  // interate through arr2 with num2 block parameter
  // push num1 * num2 to results array
  // return sorted results array, asc
  let results = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      results.push(num1 * num2);
    });
  });
  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]