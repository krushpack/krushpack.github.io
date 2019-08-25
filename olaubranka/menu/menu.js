var menuButton = document.querySelector(".menuButton");
var menu = document.querySelector("#menu");

function menuButtonPressed()
{
    if(menuButton.classList.toggle("active"))
    {
        menu.style.width = "20%";
    }
    else
    {
        menu.style.width = "";
    }
}