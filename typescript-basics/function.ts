//First way to write function name(params:type)

function multiply(a: number, b: number):number {
  return a * b;
}
console.log(multiply(2, 5));

//Arrow function (another way)
const multiply1 = function (a: number, b: number): number {
  return a * b;
};
console.log("Result:", multiply(7, 6));

//Way_01_Normal function
function additon(a: number, b: number):number {
  return a + b;
}
console.log(additon(1, 1));

//Way_02_Arrow function (another way)
//()=>{} is the arrow function syntax.
const additon1 = (a: number, b: number):number => {
  return a + b;
};
console.log(additon1(2, 2));

//Way_03_Arrow function (In-line)
const additon3 = (a: number, b: number): number => a + b;
console.log(additon3(3, 3));
