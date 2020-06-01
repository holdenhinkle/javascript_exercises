function logInBox(string) {
  var line = `+${'-'.repeat(string.length + 2)}+`;
  var padding = `|${' '.repeat(string.length + 2)}|`;
  var content = `| ${string} |`;
  console.log(line);
  console.log(padding);
  console.log(content);
  console.log(padding);
  console.log(line);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');