console.log(
  "*******************************************Switch CASE Exmple ****************************************************"
);
function calculator(a: number, b: number, operator: string): number | string {
  
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "Ccannot divide by zero";
      }
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));
console.log(calculator(10, 5, "%"));

//Scanner Class OR readline Input by using TS
console.log(
  "*******************************************Scanner Class (Java) & readline(typeScript) ****************************************************"
);
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const green = "\x1b[32m";
const Reset = "\x1b[0m";
const Yellow= "\x1b[33m";
rl.question(green+"Enter first number: "+Reset, (num1) => {
  rl.question(green+"Enter second number: "+Reset, (num2) => {
    rl.question(green+"Enter operator (+, -, *, /): "+Reset, (operator) => {
      const result = calculator(Number(num1), Number(num2), operator);
      console.log(Yellow+`Result:${result}`+Reset);
      rl.close();
    });
  });
});
