"use strict";

let theme = document.querySelector(".theme__btn");
let body = document.body;

theme.addEventListener("click", () => {
  body.style.cssText = "background: #3685ff";
});
