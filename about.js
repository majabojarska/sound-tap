// About button (question mark circle)
var aboutButton = document.getElementById("about-button");
// About box
var aboutBox = document.getElementById("about-wrapper-id");
// Box closing button - font-awesome times symbol
var closeButton = document.getElementById("about-close");

aboutButton.onclick = function () {
    console.log("Question mark pressed, opening about box.");
    openAboutBox();
}

closeButton.onclick = function () {
    console.log("Close button pressed, closing about box.");
    closeAboutBox();
}

window.onclick = function (event) {
    if (event.target == aboutBox) {
        console.log("Area outside of box pressed, closing about box.");
        closeAboutBox();
    }
}

function openAboutBox() {
    aboutBox.style.display = "block";
    aboutBox.classList.add("fade-in");
    aboutBox.classList.remove("fade-out");
}

function closeAboutBox() {
    aboutBox.classList.remove("fade-in");
    aboutBox.classList.add("fade-out");;
    setTimeout(function () {
        aboutBox.style.display = "none";
        console.log("display none");
    }, 250);
}