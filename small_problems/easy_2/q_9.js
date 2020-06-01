function cleanUp(string) {
  result = '';
  for (var i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-z]/gi)) {
      result += string[i];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  return result;
}

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "