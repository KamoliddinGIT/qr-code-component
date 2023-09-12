"use strict";

let theme = document.querySelector(".theme__btn");
let container = document.querySelector(".container");

let body = document.body;

theme.addEventListener("click", () => {
  body.style.cssText = "background: #1f314f; color: white;";
  container.style.cssText = "background: #19273F";
});
