import { testData } from "../tests/data/testData";
import { ENV } from "../tests/utils/env";

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
  "*******************************************Exercise 5 (Advanced) ****************************************************"
);
const green = "\x1b[32m";
const Reset = "\x1b[0m";
const loginUsers = [
  { username: testData.user.name, email: testData.user.email },
  { username: testData.admin.name, email: testData.admin.email },
];

for (let i = 0; i < loginUsers.length; i++) {
  console.log(
    green +
      "Testing login for " +
      loginUsers[i].username +
      " with email " +
      loginUsers[i].email +
      Reset
  );
}
