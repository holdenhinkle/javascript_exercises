// function swapName(fullName) {
//   return [fullName.split(' ')[1], fullName.split(' ')[0]].join(', ');
// }

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"