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
