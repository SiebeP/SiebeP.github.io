function GoToHomePage()
{
  alert("Werkt")
    window.location = 'default.aspx';
}

function GoToEindwerk()
{
  alert("werkt ook")
    window.location = 'Eindwerk.html';
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
