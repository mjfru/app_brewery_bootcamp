// $(document).ready(function () {
// 	$("h1").css("color", "red");
// });

// $("h1").css("color", "#ddd");
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// $("h1").text("Goodbye!");
$("button").html("<em>Click Here!</em>");

$("a").attr("href", "https://www.react.dev");

// Event listeners
$("h1").click(function () {
	$("h1").css("color", "white");
});

// Vanilla JS:
// for (let i = 0; i < 5; i++) {
// 	document.querySelectorAll("button")[i].addEventListener("click", function () {
// 		document.querySelector("h1").style.color = "purple";
// 	});
// }

// jQuery:
$("button").click(function () {
	$("h1").css("color", "purple");
});

// Key press events
// $("input").keydown(function (e) {
// 	console.log(e);
// });

// $("input").keydown(function(e) {
//   $("h1").text(e.key)
// })

// A more flexible way:
// (event, callback function)
$("h1").on("mouseover", function() {
  $("h1").css("color", "red")
})
$("h1").on("mouseout", function() {
  $("h1").css("color", "yellow")
})

$("h1").before("<button>Before!</button>")
$("h1").after("<button>After!</button>")
$("h1").prepend("<button>Prepend</button>")
$("h1").append("<button>Append</button>")

//! Animations
// $("button").on("click", function() {
//   $("h2").toggle();
// })
// $("button").on("click", function() {
//   $("h2").fadeOut();
// })
$("button").on("click", function() {
  $("h2").fadeToggle();
})

$("h1").on("click", function() {
  $("h1").slideUp();
})

// Custom
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5})
})