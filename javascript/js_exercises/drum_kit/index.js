//* Creating a global variable to hold all the drum buttons / HTML elements that have the class of "drum"
let drumButtons = document.querySelectorAll(".drum").length;

//* Using that drumButtons global variable to loop over all of them and add a "click" event listener to all of them.
for (let i = 0; i < drumButtons; i++) {
  //* Since querySelectorAll returns an array, we need to go through each element by using the loop.
  //* [i] indicates the position of the loop and the element in the array, ensuring each gets an eventListener attached.
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //* Each of these buttons has innerHTML content, this variable stores each of the buttons' innerHTML in a scoped variable
    const buttonInnerHTML = this.innerHTML;
    // console.log(buttonInnerHTML);
    //* Since the innerHTML of the clicked buttons are the same ("w", "a", etc.) as what's passed into the keydown event listener, the buttonInnerHTML can be passed as an argument to the makeSound function.
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//* This adds an event listener to the entire page (document), listening for any key stroke.
//* This event (of a key stroke) is logged as the argument, e, which inheritently in an object.
//* The 'e' object has a key property, representing what key was pressed.
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

//* Both the 'click' and 'keydown' events pass a key, either in the form of buttonInnerHTML (for a click) or e.key (for a keydown event).
function makeSound(key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 75)
}
