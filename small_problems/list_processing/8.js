// function buyFruit(arr) {
//   return arr.map(subArr => {
//     let fruits = [];
//     for (let i = 0; i < subArr[1]; i += 1) fruits.push(subArr[0]);
//     return fruits;
//   }).flat();
// }

function buyFruit(arr) {
  return arr.map(subArr => Array(subArr[1]).fill(subArr[0])).flat();
}

// const buyFruit = (arr) => arr.map(subArr => Array(subArr[1]).fill(subArr[0])).flat();

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]