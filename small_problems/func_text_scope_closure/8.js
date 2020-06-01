// stack has a rule whereby you can only 
// add new elements at the end
// AND
// remove the last inserted element

// Create a function newStack, that when called 
// returns a stack object with three methods: 
// push -- takes a value and insert it at the end of the stack
// pop -- removes the last element from the stack
// printStack -- logs each remaining element of the stack on its own line

function newStack() {
  let stack = [];

  return {
    push: function(value) {
      stack.push(value);
    },
    pop: function() {
      stack.pop;
    },
    printStack: function() {
      stack.forEach(value => console.log(value));
    },
  };
}