function sliceTree(start, end) {
  end = document.getElementById(end);

  if (end) {
    let slice = [];
    slice.unshift(end.tagName);

    function ascendTree(node) {
      let parent = node.parentNode;

      if (parent.id > start.toString()) {
        slice.unshift(parent.tagName);
        ascendTree(parent);
      } else if (parent.id === start.toString()) {
        slice.unshift(parent.tagName);
      } else {
        slice = undefined;
      }
    }

    ascendTree(end);

    return slice;
  }

  return undefined;
}

console.log(sliceTree(1, 4)); // ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76)); // undefined
console.log(sliceTree(2, 5)); // undefined
console.log(sliceTree(5, 4)); // undefined
console.log(sliceTree(1, 23)); // ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22)); // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19)); // ["SECTION", "P", "SPAN", "STRONG", "A"]