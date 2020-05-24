function GoToHome()
{
    window.location = 'index.html';
}

function GoToEindwerk()
{
    window.location = 'Eindwerk.html';
}

function GoToContact()
{
    window.location= 'contact.html';
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction2() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}