"use strict";

let theme = document.querySelector(".theme__btn");
let container = document.querySelector(".container");
let text__white = document.querySelector(".text__white");
let body = document.body;
let onOff = false;
theme.addEventListener("click", () => {
  if (onOff === false) {
    body.style.cssText = "background: #1f314f; color: white;";
    text__white.style.cssText = "color: white;";
    container.style.cssText = "background: #19273F";
    theme.style.cssText = "background: white; color: #1f314f;";
    theme.innerHTML = "light";
    onOff = true;
  } else {
    body.style.cssText = "background: #d5e1ef;";
    text__white.style.cssText = "color: #1f314f;";
    container.style.cssText = "background: #fff";
    theme.style.cssText = "background: #1f314f; color: white";
    theme.innerHTML = "dark";
    onOff = false;
  }
});
