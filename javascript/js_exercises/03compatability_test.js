/*
! Compatability Tester
*/

prompt("What's your name?");
prompt("What's the other person's name?");

let compatScore = Math.random() * 100;
compatScore = Math.floor(compatScore) + 1;

if (compatScore > 70) {
  alert("You are a great perfect match!");
} else {
  alert(`You are ${compatScore}% compatable.`);
}
