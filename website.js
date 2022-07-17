myButton = document.getElementById("myBtn");
var navbar = document.getElementsByName("navbar");

//fas-Fa-bars
function fasFa()
{
 	var x = document.getElementById("topnav");
	if (x.className === "navbar")
		{
			x.className += " responsive";
	  	}
	else
		{
			x.className = "navbar";
  	}
}

//To top knop
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
	return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
	if (scrollContainer().scrollTop > showOnPx) {
		backToTopButton.classList.remove("hidden")
	} else {
		backToTopButton.classList.add("hidden")
	}
})

const goToTop = () => {
	document.body.scrollIntoView({
		behavior: "smooth",
	});
};

backToTopButton.addEventListener("click", goToTop)
