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
