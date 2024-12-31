 /*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// class Calculator{
//   constructor(){
//     this.result=100;
//   }
//  add(number) {
//     this.result += number;  
//     return this.result;      
//   }
//   substract(number){
//     this.result-=number;
//     return this.result;
//   }
//   multiplu(number){
//     this.result*=number;
//     return this.result;
//   }
//   divide(number){
//     if(number===0){
//       throw new Error("Number can not divide by 0");
//     }
//       this.result/=number;
//       return this.result;
//     }
//     clear(){
//       this.result=0;
//       return this.result;
//     }
//     getResult(){
//       return this.result;
//     }



// }
// const calculator=new Calculator();
// console.log(calculator.add());

function calculate(expression) {
  // Step 1: Normalize spaces
  // Split by space, filter out empty strings, then join with a single space
  expression = expression.split(' ').filter(token => token !== '').join(' ').trim();

  // Step 2: Validate the expression for invalid characters
  const allowedCharacters = '0123456789+-*/() ';
  for (let char of expression) {
    if (!allowedCharacters.includes(char)) {
      throw new Error("Invalid input: Expression contains non-numeric characters");
    }
  }

  // Step 3: Evaluate the expression
  try {
    const result = eval(expression); // Use cautiously!
    return result;
  } catch (error) {
    throw new Error("Error evaluating expression: " + error.message);
  }
}

// Example usage
try {
  const input = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
  const result = calculate(input);
  console.log("Result:", result); // Output: Result: 20
} catch (error) {
  console.error(error.message);
}

// Example of invalid input
try {
  const invalidInput = "5 + abc";
  calculate(invalidInput);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Expression contains non-numeric characters
}


module.exports = Calculator;

