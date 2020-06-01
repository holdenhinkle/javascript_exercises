// function nodeSwap(id1, id2) {
//   let node1 = document.getElementById(id1);
//   let node2 = document.getElementById(id2);

//   if ((!node1 || !node2) ||
//       (node1.parentElement.childNodes !== node2.parentElement.childNodes)) {
//     return undefined;
//   }

//   let node1Cloned = node1.cloneNode(true);
//   let node2Cloned = node2.cloneNode(true);

//   node1.parentNode.replaceChild(node2Cloned, node1);
//   node2.parentNode.replaceChild(node1Cloned, node2);

//   return true;
// }

// further exploration: don't clone - keep event listeners intact
function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if ((!node1 || !node2) ||
      (node1.parentElement.childNodes !== node2.parentElement.childNodes)) {
    return undefined;
  }

  let parent = node1.parentNode;
  let placeholder = document.createElement('p');

  parent.replaceChild(placeholder, node1);
  parent.replaceChild(node1, node2);
  parent.replaceChild(node2, placeholder);

  return true;
}

// at least one of the id attributes doesn't exist
console.log(nodeSwap(1, 20)); // undefined

// at least one of the nodes is a "child" of the other
console.log(nodeSwap(1, 4)); // undefined
console.log(nodeSwap(9, 3)); // undefined

// one swap
console.log(nodeSwap(1, 2));

// multiple swaps
console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));