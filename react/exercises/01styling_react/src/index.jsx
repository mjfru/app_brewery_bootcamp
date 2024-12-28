//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greeting = "";
let dynamicStyle = { color: "" };
let currentTime = new Date().getHours();
console.log(currentTime);

if (currentTime == 0 && currentTime <= 12) {
  greeting = "Good morning!";
  dynamicStyle.color = "red";
} else if (currentTime >= 12 && currentTime <= 18) {
  greeting = "Good afternoon!";
  dynamicStyle.color = "green";
} else {
  greeting = "Good evening!";
  dynamicStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={dynamicStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);