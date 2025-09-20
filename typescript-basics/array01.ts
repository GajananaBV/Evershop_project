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
