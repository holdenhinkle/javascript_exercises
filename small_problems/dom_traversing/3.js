function domTreeTracer(parent) {
  let traceArray = [];

  function trace(node) {
    if (node.nodeName === 'BODY') return;

    let parentNode = node.parentElement;
    let childNodes = parentNode.childNodes;
    let children = [];

    if (childNodes) {
      childNodes.forEach(child => {
        if (child.nodeName !== '#text') {
          children.push(child.nodeName);
        }
      });

      traceArray.push(children);
    }

    trace(parentNode);
  }

  trace(document.getElementById(parent));

  return traceArray;
}

domTreeTracer(1);
// = [["ARTICLE"]]
domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]