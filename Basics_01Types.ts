import { Console } from "console";
import { run } from "node:test";

console.log("hello playwright");

// let variableName: type = value
console.log(
  "*******************************************Types ****************************************************"
);
let userName: string = "play";
let age1: number = 3;
let age3: number = 4.123;
let isLoggedIn: boolean = true;

age1 = 4;
age1 = age1 + age3;

console.log(age1); // Output: 8.123
let fullName: string = "Gajanan";
console.log(fullName); // (2)
fullName = "Bhnage";
console.log(fullName); // (6)

// userName = 1;   // Error
// userName = true;   // Error
console.log(
  "*******************************************any ****************************************************"
);
let phone: any = "iphone";
phone = 1;
phone = true;

console.log(phone); // (1)

console.log(
  "*******************************************unknown ****************************************************"
);
let values: unknown = "world";
// value = 0;   (commented)
values = true;
console.log(values); // (3)

values = true + userName; // (4)
console.log(values); // (5)
console.log(
  "*******************************************Array ****************************************************"
); // (8)
//Array
let fruits: string[] = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log(fruits); // (7)

let sequence: number[] = [1, 2, 3, 4, 5];
console.log(sequence.length); // length of the array
console.log(sequence[2]); // access 3rd element
console.log(sequence.push(6)); // add 6 at the end
console.log(sequence); // print all elements
console.log(sequence.unshift(0)); // add 0 at the beginning
console.log(sequence); // print all elements
console.log(sequence.shift()); // remove first element
console.log(sequence); // print all elements
console.log(sequence.pop()); // remove last element
console.log(sequence.slice(2)); // print elements from index 2 to end
console.log(sequence); // print all elements
console.log(sequence.indexOf(3)); // get index of element 3rd
console.log(sequence.splice(2, 2)); // remove 2 elements from index 2
console.log(sequence); // print all elements

console.log(
  "*******************************************For loop ****************************************************"
);
let marks: number[] = [80, 90, 70, 60, 100];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

let avg = sum / marks.length;

console.log("Average =", avg);

console.log(
  "*******************************************Max ****************************************************"
);

let max = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}

console.log("Maximum =", max);

console.log(
  "*******************************************Min ****************************************************"
);
let min = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (marks[i] < min) {
    min = marks[i];
  }
}

console.log("Minimum =", min);

console.log(
  "*******************************************String ****************************************************"
);
let Breads: string[] = ["milkbread", "naan", "Kulcha", "pitaa", "Brown-Bread"];

for (let bread of Breads) {
  if (bread.length <= 4) {
    console.log(`${bread} - bread is small`);
  } else if (bread.length <= 6) {
    console.log(`${bread} - bread is medium`);
  } else {
    console.log(`${bread} - bread is long`);
  }
}

console.log(
  "*******************************************Cricket Example ****************************************************"
);
let players: { name: string; runs: number }[] = [
  { name: "Virat", runs: 100 },
  { name: "Rohit", runs: 40 },
  { name: "Dhoni", runs: 15 },
  { name: "Gill", runs: 85 },
  { name: "Hardik", runs: 55 },
];

for (let player of players) {
  if (player.runs <= 30) {
    console.log(`${player.name} scored ${player.runs} - Low score`);
  } else if (player.runs <= 70) {
    console.log(`${player.name} scored ${player.runs} - Medium score`);
  } else {
    console.log(`${player.name} scored ${player.runs} - High score`);
  }
}
console.log(
  "*******************************************Example ****************************************************"
);

const playersIPL = [
  { name: "Virat", run: 100 },
  { name: "Rohit", run: 80 },
  { name: "Dhoni", run: 60 },
  { name: "Gill", run: 90 },
  { name: "Hardik", run: 70 },
];

console.log(playersIPL[0].name, playersIPL[0].run);
console.log(playersIPL[1].name, playersIPL[1].run);
console.log(playersIPL[2].name, playersIPL[2].run);
console.log(playersIPL[3].name, playersIPL[3].run);
console.log(playersIPL[4].name, playersIPL[4].run);

console.log(
  "*******************************************Even & prime Example ****************************************************"
);

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even: number[] = [];
let prime: number[] = [];
let odd: number[] = [];

for (const num of nums) {
  if (num % 2 == 0) {
    console.log(`${num} is even number`);
    even.push(num);
  } else {
    console.log(`${num} is odd number`);
    odd.push(num);
  }

  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is prime number`);
      prime.push(num);
    }
    console.log("Even numbers: ", even);
    console.log("Odd numbers: ", odd);
    console.log("Prime numbers: ", prime);
  }
}
console.log(
  "*******************************************whileLoop ****************************************************"
);

let i: number = 0;

while (i <= 10) {
  console.log(`number ${i}`);
  i++;
}

console.log(
  "*******************************************fibonacci series Example ****************************************************"
);
let a: number = 0,
  b: number = 1,
  nextTerm: number;
let n: number = 10;
let i1: number = 1;
console.log("Fibonacci Series:");
while (i1 < n) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
  i1++;
  console.log(nextTerm);
}

console.log(
  "*******************************************Do-while Loop Example ****************************************************"
);

let j: number = 0;

do {
    nextTerm = a + b;
  a = b;
  b = nextTerm;
  console.log(nextTerm);
  j++;
} while (j < 10);

  
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
        return "Error: Division by zero";
      }
    default:
      return "Error: Invalid operator";
  }
}console.log(calculator(10, 5, "+")); 
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 0, "/")); 
console.log(calculator(10, 5, "%")); 