function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToNextSection() {
  var nextSection = document.querySelector("#projects");
  nextSection.scrollIntoView({ behavior: "smooth" });
}


function scrollToNextSection1() {
  var nextSection = document.querySelector("#experience");
  nextSection.scrollIntoView({ behavior: "smooth" });
}


function scrollToNextSection2() {
  var nextSection = document.querySelector("#contact");
  nextSection.scrollIntoView({ behavior: "smooth" });
}