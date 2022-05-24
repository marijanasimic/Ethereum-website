"use strict";
var typed = new Typed(".element", {
  strings: [
    "Arabic",
    "Chinese",
    "Croatian",
    "Dutch",
    "Finnish",
    "French",
    "Italian",
    "English",
    "Japanese",
  ],
  typeSpeed: 30,
  showCursor: false,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});
// Dropdown on navigation
const dropbtns = document.querySelectorAll(".dropbtn");
const dropContents = document.querySelectorAll(".dropdown-content");

const openDropdown = function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("fa-angle-up")) {
    e.target.classList.remove("fa-ange-down");
    e.target.classList.add("fa-angle-up");
  } else {
    e.target.classList.remove("fa-angle-up");
  }
  const id = e.target.dataset.dropdown;
  const clicked = e.target
    .closest(".dropdown")
    .querySelector(".dropdown-content");

  dropContents.forEach((dropcontent) => {
    if (dropcontent !== clicked) dropcontent.classList.remove("show");
  });
  dropbtns.forEach((dropbtn) => {
    if ((dropbtn !== e.target) & dropbtn.classList.contains("fa-angle-up"))
      dropbtn.classList.remove("fa-angle-up");
  });
  document.getElementById(`dropdown-content--${id}`).classList.toggle("show");
};

const closeDropdown = function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("dropbtn")) {
    dropContents.forEach((dropcontent) => {
      if (dropcontent.classList.contains("show"))
        dropcontent.classList.remove("show");
    });
    dropbtns.forEach((dropbtn) => {
      if (dropbtn.classList.contains("fa-angle-up"))
        dropbtn.classList.remove("fa-angle-up");
    });
  }
};
dropbtns.forEach((dropbtn) => {
  dropbtn.addEventListener("click", openDropdown);
});
window.addEventListener("click", closeDropdown);

// Hamburger navigation

const dropdowns = document.querySelectorAll(".dropdown");
const btnBars = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav_links");

btnBars.addEventListener("click", function () {
  dropdowns.forEach((dropdown) => dropdown.classList.toggle("responsive"));
  navLinks.classList.toggle("responsive");
});
