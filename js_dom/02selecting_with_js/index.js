// Selects all elements with the same tag name (returns array):
document.getElementsByTagName("li");
// Alone, it returns an array, so we can select which element of that array we want to manipulate.
document.getElementsByTagName("li")[2].style.backgroundColor = "purple";
document.getElementsByTagName("li").length;

// Selects all elements with the same class name (returns array):
document.getElementsByClassName("btn");

// Selects -one- element with the same id name:
document.getElementById("title").innerHTML = "JS changed this title.";

// Uses an element name, a class, an id, etc., allowing us to combine them and being more specific
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn").style.backgroundColor = "teal";

document.querySelector("li a");

document.querySelector("li.item");

// If your selector matches more than one item, you'll only get back the first element in the document that satisfy the selector.
// To get all of them (returns an array):
document.querySelectorAll("#list .item");

//! Challenge:
// Change the text colour of the Google Link in the list
document.querySelector("#list .item a").style.color = "red";

//! Challenge:
// Make a CSS sheet with the class "huge" (font-size 10rem) and make a JS script that will toggle it on and off on the <h1> tag.
document.querySelector("h1").classList.add(".huge");

// Text Manipulation
// innerHTML gives you ALL of the HTML inside a tag, including other HTML tag
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";

// Attributes Manipulation
document.querySelector("a").attributes; //  Returns a list of attached attributes
document.querySelector("a").setAttribute("href", "https://www.bing.com")
