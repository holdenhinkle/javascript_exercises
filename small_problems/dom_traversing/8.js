let domLevelFromBody = 0;
let parent = null;

function getLastElement(el, callback) {
  callback(el);

  debugger;

  for (let i = 0; i < el.length; i += 1) {
    getLastElement(el[i], callback);
  }
}

function buildNodes(nodes, callback, setNewParent) {
  callback(nodes, setNewParent);

  if (Array.isArray(nodes)) {
    for (let i = 0; i < nodes.length; i += 1) {
      setNewParent = nodes[1] && nodes[1].length === 0 ? false : true;

      if (setNewParent) {
        // let lastElement;
        getLastElement(document.querySelector('html').children, function(el) {
          parent = el;
        });

        // if (lastElement === null) debugger;
        // parent = lastElement;
      } else {
        parent = document.querySelector('body');
      }
      buildNodes(nodes[i], callback, setNewParent);
    }
  }
}

function arrayToNodes(nodes) {
  buildNodes(nodes, function(el, setNewParent) {
    if (typeof el === 'string') {
      if (el === 'BODY') document.querySelector('BODY').remove();
      debugger;
      parent.appendChild(document.createElement(el));
      if (setNewParent) parent = el;
    }
  }, true);
}

// // LS SOLUTION
// function arrayToNodes(nodes) {
//   var parent = document.createElement(nodes[0]);
//   var children = nodes[1];
//   var i;

//   if (children.length === 0) {
//     return parent;
//   } else {
//     for (i = 0; i < children.length; i += 1) {
//       parent.appendChild(arrayToNodes(children[i]));
//     }
//   }

//   return parent;
// }

var nodes1 = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
let nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

arrayToNodes(nodes1);
