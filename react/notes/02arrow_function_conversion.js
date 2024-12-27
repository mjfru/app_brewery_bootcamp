var numbers = [3, 56, 2, 48, 5];

//TODO Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//TODO Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const filteredNums = numbers.filter((num) => num < 10);
console.log(filteredNums);

//TODO Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const reducedNums = numbers.reduce((accumulator, currentNum) => {
  return accumulator + currentNum;
});
console.log(reducedNums);

//TODO Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const findNum = numbers.find((num) => num > 10);
console.log(findNum);

//TODO FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const findIndexNum = numbers.findIndex((num) => num > 10);
console.log(findIndexNum);
