function GoToHome()
{
  alert("home werkt")
    window.location = 'index.html';
}

function GoToEindwerk()
{
  alert("eindwerk werkt")
    window.location = 'Eindwerk.html';
}

function GoToContact()
{
  alert("contact werkt")
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

function DarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");