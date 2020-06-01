function newStack() {
  let stack = [];
  
  return {
    push: function(val) {
      stack.push(val);
    },
    pop: function() {
      stack.pop();
    },
    printStack() {
      stack.forEach(el => console.log(el));
    },
  };
}
