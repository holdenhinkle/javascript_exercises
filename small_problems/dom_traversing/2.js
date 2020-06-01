// VERSION 1
// function numNodes(parent) {
//   let directNodes = Array.prototype.slice.call(document.getElementById(parent.toString()).childNodes);
//   let numIndirectNodes = 0;

//   directNodes.forEach(child => {
//     function childCounter(child) {
//       if (child.childNodes) {
//         let childNodes = Array.prototype.slice.call(child.childNodes);
//         numIndirectNodes += childNodes.length;
//         childNodes.forEach(childCounter);
//       }
//     }

//     childCounter(child);
//   });

//   return [directNodes.length, numIndirectNodes];
// }

// numNodes(1);

// VERSION 2 WITH WALK
// function walk(node, callback) {
//   callback(node);

//   for (let i = 0; i < node.childNodes.length; i += 1) {
//     walk(node.childNodes[i], callback)
//   }
// };

// function numNodes(parent) {
//   let parentNode = document.getElementById(parent.toString());
//   let totalDirectNodes = Array.prototype.slice.call(parentNode.childNodes).length;
//   let totalNodes = 0;

//   walk(parentNode, function(node) {
//     if (node.childNodes) {
//       totalNodes += node.childNodes.length;
//     }
//   })

//   return [totalDirectNodes, totalNodes - totalDirectNodes];
// }

// numNodes(1);

function walk(node, callback) {
  callback(node);

  let nodes = node.childNodes;
  for (let i = 0; i < nodes.length; i += 1) {
    walk(nodes[i], callback);
  }
}

let directNodes = 0;
let totalNodes = 0;

walk(document.getElementById('1'), function(node) {
  if (node && directNodes === 0) {
    directNodes += node.childNodes.length;
  } else if (node) {
    totalNodes += 1;
  }
})

console.log(directNodes, totalNodes - directNodes);