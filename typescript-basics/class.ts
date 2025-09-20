//Class

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //Create one method
  displayInfo() {
    console.log(`Name: ${this.name},  Age: ${this.age}`);
  }
}
const s = new Student("Gajanan", 29);
s.displayInfo();
