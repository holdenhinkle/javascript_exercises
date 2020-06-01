function findFirstInstance(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(findFirstInstance(['Farhan', 'Hadiya', 'Holden', 'Holden'], 'Holden'));
