const tweetLimit = 140;

let tweetExample = prompt("What are you tweeting today?")
let tweetLength = tweetExample.length;
console.log(tweetLength);

console.log("You have written " + tweetLength + " of " + tweetLimit + " characters. You have " + (tweetLimit - tweetLength) + " characters left.")
alert(tweetExample.slice(0, 140));


// Capitalizing the first letter of a name but without directly manipulating the variable
let response = prompt("What is your name?")
let firstLetterUppercase = response.slice(0,1).toUpperCase();
let restOfName = response.slice(1, response.length).toLowerCase();
alert("Hello, " + firstLetterUppercase + restOfName + "!");