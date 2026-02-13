const cssToggle = document.querySelector(".button");
const styleSheet = document.getElementById("style");
const toggleImg = cssToggle.firstElementChild;
var isNight = localStorage.getItem("cssState");

if (isNight === null) {
  localStorage.setItem("cssState", "n");
  isNight = "n";
}

if (isNight === "n") {
  cssToggle.style.padding = "0px";
  cssToggle.style.height = "50px";
  cssToggle.style.width = "50px";

  toggleImg.src = "img/sun.png";
  toggleImg.height = 50;
  toggleImg.width = 50;

  styleSheet.href = "light.css";
} else {
  cssToggle.style.padding = "5px";
  cssToggle.style.height = "40px";
  cssToggle.style.width = "40px";

  toggleImg.src = "img/moon.png";
  toggleImg.height = 40;
  toggleImg.width = 40;

  styleSheet.href = "dark.css";
}

function changeCSS() {
  if (isNight === "y") {
    document.querySelectorAll(".spacer").forEach((spacer) => {
      spacer.style.backgroundImage = "url(img/sky.jpg)";
    });

    cssToggle.style.padding = "0px";
    cssToggle.style.height = "50px";
    cssToggle.style.width = "50px";

    toggleImg.src = "img/sun.png";
    toggleImg.height = 50;
    toggleImg.width = 50;

    styleSheet.href = "light.css";

    localStorage.setItem("cssState", "n");
    isNight = "n";
  } else {
    document.querySelectorAll(".spacer").forEach((spacer) => {
      spacer.style.backgroundImage = "url(img/stars.jpg)";
    });

    cssToggle.style.padding = "5px";
    cssToggle.style.height = "40px";
    cssToggle.style.width = "40px";

    toggleImg.src = "img/moon.png";
    toggleImg.height = 40;
    toggleImg.width = 40;

    styleSheet.href = "dark.css";

    localStorage.setItem("cssState", "y");
    isNight = "y";
  }
}

cssToggle.style.cursor = "pointer";
cssToggle.addEventListener("click", changeCSS);

var savedOffset = sessionStorage.getItem("offset");
var offset = 0;

if (savedOffset === null) {
  sessionStorage.setItem("offset", "0");
} else {
  offset = parseInt(savedOffset);
}

function animateBackground() {
  document.querySelectorAll(".spacer")[0].style.backgroundPositionX =
    offset + "px";
  document.querySelectorAll(".spacer")[1].style.backgroundPositionX =
    "-" + offset + "px";

  offset = offset + 1;

  if (offset == 1024) {
    offset = 0;
  }

  sessionStorage.setItem("offset", offset.toString());
}

setInterval(animateBackground, 15);
