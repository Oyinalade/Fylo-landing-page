"use strict";
const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const secondBtn = document.querySelector(".second");

document.querySelector(".the").style.display = "none";

btn.addEventListener("click", function () {
  document.querySelector(".the").style.display = "flex";
  document.querySelector(".the").style.color = "red";
  document.getElementById("input").style.border = "1px solid red";

  const value = document.getElementById("input").value;
  // alert(value);
});

document.querySelector(".sec").style.display = "none";
secondBtn.addEventListener("click", function () {
  const secondValue = document.getElementById("secondInput").value;
  // alert(secondValue);
  document.querySelector(".sec").style.display = "flex";
  document.querySelector(".sec").style.color = "#fff";
  document.getElementById("secondInput").style.border = "1px solid red";
});
