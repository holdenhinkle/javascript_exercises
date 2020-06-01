function twice(num) {
  stringNum = String(num);
  if (stringNum.length % 2 === 0) {
    var length = stringNum.length;
    var firstHalf = stringNum.slice(0, length / 2);
    var secondHalf = stringNum.slice(length / 2);
    if (firstHalf === secondHalf) return num;
  }
  return 2 * num;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676