// Wanneer de gebruiker scrolt, start myFunction
window.onscroll = function()
{
	myFunction()
};

// Krijg de navbar
var navbar = document.getElementById("topnav");

// Krijg de offset positie  van de navbar
var sticky = navbar.offsetTop;

// Geef de navbar de sticky class wanneer je de scrollpositie berijkt, a verwijder de "sticky" wanner je de scrollpositie verlaat
function myFunction()
	{
		if (window.pageYoffset >= sticky)
			{
				navbar.classList.add("sticky")
			}
		else
			{
				navbar.classList.remove("sticky")
			}
	}


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

