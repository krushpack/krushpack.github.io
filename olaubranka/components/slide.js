var slideTemplate = document.querySelector("#slideTemplate").content;
function CreateSlide(id, headerText, headerBackground, content)
{
    var newSlideHeader = document.importNode(slideTemplate.querySelector(".slideHeader"), true);
    newSlideHeader.setAttribute("id", id);
    newSlideHeader.style.backgroundImage = "url('" + headerBackground + "')";
    newSlideHeader.querySelector(".slideHeaderText").innerHTML = headerText;
    document.body.append(newSlideHeader);
    var newSlide = document.importNode(slideTemplate.querySelector(".slide"));
    newSlide.innerHTML = content;
    document.body.append(newSlide);
}