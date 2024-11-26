/*
! General Array Practice

*/

const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

const guestName = prompt("What's your name?");

if (guestList.includes(guestName)) {
  console.log("Welcome!");
} else {
  console.log("You're not on the guest list...");
}

//

//! The Infamous FizzBuzz
const output = [];
let count = 1;
function fizzBuzz() {

  while(count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("Fizzbuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);

}

fizzBuzz();