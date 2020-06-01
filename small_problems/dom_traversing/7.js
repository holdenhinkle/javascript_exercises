// function walk(node, callback) {
//   callback(node);

//   for (let i = 0; i < node.children.length; i += 1) {
//     walk(node.children[i], callback);
//   }
// }

// let nodeArray = [];

// walk(document.querySelector('body'), function(node) {
//   let els;

//   if (node.children) {
//     let children = [];

//     Array.prototype.slice.call(node.children).forEach(child => {
//       children.push(child.nodeName);
//     })

//     els = [node.nodeName, [children]];
//   } else {
//     els = [node.nodeName, []];
//   }
  
//   nodeArray.push(els);
// });

// console.log(nodeArray);

function nodesToArr() {
  var nodesArray = ['BODY', formatNodes(Array.prototype.slice.call(document.body.children))];
  var currentParentNodes = nodesArray[1];

  while (anyChildren(currentParentNodes)) {
    currentParentNodes = getNextGenerationParents(currentParentNodes);
  }

  getNextGenerationParents(currentParentNodes);

  return nodesArray;
}

function getNextGenerationParents(currentParentNodes) {
  var newParentNodes = [];
  currentParentNodes.forEach(function(parentNode, index, parentNodes) {
    parentNodes[index] = appendChildren(parentNode);
    if (parentNodes[index][1].length > 0) {
      newParentNodes = newParentNodes.concat(parentNodes[index][1]);
    }
  });

  return newParentNodes;
}

function anyChildren(parentNodes) {
  var i;

  for (i = 0; i < parentNodes.length; i += 1) {
    if (parentNodes[i][0].children.length > 0) {
      return true;
    }
  }

  return false;
}

function appendChildren(parentNode) {
  var children = formatNodes(Array.prototype.slice.call(parentNode[0].children));
  parentNode[0] = parentNode[0].tagName;
  parentNode.push(children);
  return parentNode;
}

function formatNodes(nodes) {
  return nodes.map(function(node) {
    return [node];
  });
}