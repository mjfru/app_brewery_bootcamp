/*
! Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should be returned from the function and you do not need alert, prompt or console.log.
*/



function whosPaying(names) {
  let index = Math.floor(Math.random() * names.length);
  let selection = names[index];
  return `${selection} is going to buy lunch today!`
}

console.log(whosPaying(["Matt", "Austin", "Jim", "Scott"]));