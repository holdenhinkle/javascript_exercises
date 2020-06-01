function wordSizes(string) {
  string = string.replace(/[^\sa-z]/gi, '');
  var counter = {};
  if (string.length === 0) return counter;
  string.split(' ').forEach(function(word) {
    if (!counter[word.length]) counter[word.length] = 0;
    counter[word.length] += 1;
  });
  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}