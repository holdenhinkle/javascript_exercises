function wordSizes(string) {
  var counter = {};
  if (string.length === 0) return counter;
  string.split(' ').forEach(function(word) {
    if (!counter[word.length]) counter[word.length] = 0;
    counter[word.length] += 1;
  });
  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}