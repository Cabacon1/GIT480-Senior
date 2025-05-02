// strict mode
"use strict";

// Hamburger menu
// This code toggles the visibility of a hamburger menu and an off-screen menu when the hamburger icon is clicked.
// It also closes the menu when a link is clicked or when clicking outside of the menu.

let hamMenu = document.querySelector(".ham-menu");

let offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
let menuLinks = document.querySelectorAll(".off-screen-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!hamMenu.contains(event.target) && !offScreenMenu.contains(event.target)) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  }
});

