const buttonColours = ["red", "blue", "green", "yellow"];

//* Holds the randomly generated pattern of the game
let gamePattern = [];
//* Holds the user's inputs to match the gamePattern
let userClickedPattern = [];

//* Global variable to ensure a user can only start one game at a time.
let keyPressCounter = 0;
let level = 0;

function nextSequence() {
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level " + level);
	const randomNumber = Math.round(Math.random() * 3);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	// Concatenation with the '#' (id) to match the id in the HTML and selecting them, then applying these effects.
	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);
	playSound(randomChosenColour);
	let audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
	audio.play();
}

//* Detecting any keypress event to start the game
$(document).keypress(function () {
	if (keyPressCounter >= 1) {
		// console.log("Counter above 1, new game cannot be started");
		return;
	} else {
		// console.log(e.key + " ekey press detected");
		keyPressCounter++;
		console.log(keyPressCounter);
		nextSequence();
		$("#level-title").text("Level " + level);
	}
});

$(".btn").on("click", function () {
	let userChosenColour = $(this).attr("id");
	// console.log(userChosenColour);
	userClickedPattern.push(userChosenColour);
	// let audio = new Audio("./sounds/" + userChosenColour + ".mp3");
	// audio.play();
	playSound(userChosenColour);
	animatePress(userChosenColour);
	// console.log(userClickedPattern);
	checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
	// if (the last index of game pattern is the same as the last index of the userClickedPattern...)
	//* The color at the 'currentLevel' index from 'gamePattern' === 'currentLevel' index from 'userClickedPattern'
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("success!");
		if (gamePattern.length === userClickedPattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		const wrongAnswer = new Audio("./sounds/wrong.mp3");
		wrongAnswer.play();
		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 1000);
    $("h1").text("Game Over! Press any key to restart.")
		console.log("wrong");
    startOver();
	}
}

function playSound(name) {
	let audio = new Audio("./sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour) {
	$("#" + currentColour).addClass("pressed");
	setTimeout(() => {
		$("#" + currentColour).removeClass("pressed");
	}, 100);
}

function startOver() {
  level = [];
  gamePattern = [];
  keyPressCounter = 0;
}