var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
	return x * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

const doubledNumbersV2 = numbers.map(function (x) {
	return x * 2;
});

//Filter - Create a new array by keeping the items that return true.
const bigNumbers = numbers.filter(function (num) {
	return num > 10;
});
console.log(bigNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumber = numbers.reduce(function (accumulator, currentNumber) {
	console.log("Accumulator is: " + accumulator);
	console.log("The current number is: " + currentNumber);
	return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
const firstGreaterThanTen = numbers.find(function (num) {
	return num > 10;
});
console.log(firstGreaterThanTen);

//FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex(function (num) {
	return num > 10;
});
console.log(findIndex);

/*  
TODO: Assignment: Make a new array from the emojipedia that contains only the meaning and is truncated to 100 characters.
TODO: Use the .substring() method for this.

import emojipedia from "./emojipedia";
console.log(emojipedia);

const meanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
  });
console.log(meanings);
*/
