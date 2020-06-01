// start_time: 12:47pm

// P (Problem)
// Input: 
// String

// Output: 
// String

// Requirements: 
// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens) (see the rules):

// Rules: 
// Each operation in the language operates on a register, which can be thought of as the current value.

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

// All operations are integer operations

// Programs will be supplied to your language function via a string argument. 

// all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack

// All programs will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

// Mental model: 


// E (Example/Test Cases)
// console.log(minilang('PRINT'));
// // 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// D (Data Structure)
// String: 
// Input, and the data type of the array elements (tokens)
// Output, the output is the value of the register, which will be a number, so the output will be handled by string interpolation
// Array: 
// Input string is split into and array of tokens

// Number: 
// Token: If a token is a Number, convert it to number
// Register value

// A (Algorithm)
// function parameter is 'program'
// stack = []
// register = 0

// program = reassign the out of splitting the program on a space (' '), the mapping the array
//   mapping function => if string is number, convert the string to a number, else return the string

// Iterate through program using forEach, block paramter name is 'token'
// setup up 'if', 'else if' statements for each type of token (see the rules)
//   Within each 'if' statement (except for n), call a function of the same name with stack and register, the register will (except for push) capture the return value of the register being operated on 


// C (Code)
// function minilang(program) {
//   let stack = [];
//   let register = 0;

//   program.split(' ').map(token => {
//     if (/[0-9]/.test(token)) return Number(token);
//     return token;
//   }).forEach(token => {
//     if (typeof token === 'number') {
//       register = token;
//     } else if (token == 'PUSH') {
//       stack.push(register);
//     } else if (token === 'ADD') {
//       register += stack.pop();
//     } else if (token === 'SUB') {
//       register -= stack.pop();
//     } else if (token === 'MULT') {
//       register = stack.pop() * register;
//     } else if (token === 'DIV') {
//       register = Math.round(register / stack.pop());
//     } else if (token === 'MOD') {
//       register = Math.round(register % stack.pop());
//     } else if (token === 'POP') {
//       register = stack.pop();
//     } else if (token === 'PRINT') {
//       console.log(register);
//     }
//   });
// }

// function minilang(program) {
//   function popOperation(stack, register, operation) {
//     try {
//       if (stack.length === 0) {
//         throw new Error('Stack is empty')
//       } else return operation(stack, register);
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   let stack = [];
//   let register = 0;
//   program = program.split(' ').map(token => {
//     if (/[0-9]/.test(token)) return Number(token);
//     return token;
//   });
  
//   program.forEach(token => {
//     if (typeof token === 'number') {
//       register = token;
//     } else if (token == 'PUSH') {
//       stack.push(register);
//     } else if (token === 'ADD') {
//       let result = popOperation(stack, register, (stack, register) => register += stack.pop());
//       if (typeof (result) === 'number') register = result;
//     } else if (token === 'SUB') {
//       let result = popOperation(stack, register, (stack, register) => register -= stack.pop());
//       if (typeof (result) === 'number') register = result;
//     } else if (token === 'MULT') {
//       let result = popOperation(stack, register, (stack, register) => stack.pop() * register);
//       if (typeof (result) === 'number') register = result;
//     } else if (token === 'DIV') {
//       register = Math.round(register / stack.pop());
//     } else if (token === 'MOD') {
//       register = Math.round(register % stack.pop());
//     } else if (token === 'POP') {
//       let result = popOperation(stack, register, (stack, register) => stack.pop());
//       if (typeof (result) === 'number') register = result;
//     } else if (token === 'PRINT') {
//       console.log(register);
//     } else console.log(new Error('Invalid token'));
//   });
// }

function minilang(program) {
  let stack = [];
  let register = 0;
  let tokens = program.split(' ').map(token => {
    if (/[0-9]/.test(token)) return Number(token);
    return token;
  });

  for (let i = 0; i < tokens.length; i += 1) {
    if (/ADD|SUB|MULT|POP/.test(tokens[i])) {
      try {
        if (stack.length === 0) {
          throw new Error('Stack is empty');
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }

    if (typeof tokens[i] === 'number') {
      register = tokens[i];
    } else if (tokens[i] == 'PUSH') {
      stack.push(register);
    } else if (tokens[i] === 'ADD') {
      register += stack.pop();
    } else if (tokens[i] === 'SUB') {
      register -= stack.pop();
    } else if (tokens[i] === 'MULT') {
      register = stack.pop() * register;
    } else if (tokens[i] === 'DIV') {
      register = Math.round(register / stack.pop());
    } else if (tokens[i] === 'MOD') {
      register = Math.round(register % stack.pop());
    } else if (tokens[i] === 'POP') {
      register = stack.pop();
    } else if (tokens[i] === 'PRINT') {
      console.log(register); 
    } else console.log(new Error('Invalid token'));
  }
}

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT')); // 0
// 6

console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT')); // 16
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)

// end_time: 12:52 (lunch)
// start_time: 1:23
// total_time: 2:07