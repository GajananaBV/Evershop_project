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