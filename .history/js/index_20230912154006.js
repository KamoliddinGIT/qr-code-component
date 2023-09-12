"use strict";

let theme = document.querySelector(".theme__btn");
let container = document.querySelector(".container");
let text__white = document.querySelector(".text__white");
let body = document.body;

theme.addEventListener("click", () => {
  body.style.cssText = "background: #1f314f; color: white;";
  text__white.style.cssText = "color: white;";
  container.style.cssText = "background: #19273F";
});
