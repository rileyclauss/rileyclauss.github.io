window.onscroll = function() {scrollNav()};

// Get the navbar
var navbar = document.getElementById("myNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollNav() {
	alert("Hello!");
	navbar.classList.add("sticky);
}