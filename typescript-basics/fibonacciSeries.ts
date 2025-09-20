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
