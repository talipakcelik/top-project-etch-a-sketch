"use strict";
const btn = document.createElement("button");
btn.classList.add("buton1");
document.body.appendChild(btn);
btn.textContent = "refresh";

// body içerisine container1 sınıflı ana div eklendi.
const containerUst = document.createElement("div");
containerUst.classList.add("container1");
document.body.appendChild(containerUst);

// üst konteynır içerisine alt bir konteynır eklendi.
// const containerAlt = document.createElement("div");
// containerAlt.classList.add("container2");
// containerUst.appendChild(containerAlt);

function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squares.appendChild(square);
  }
  gridElement.appendChild(squares);
}

buildGrid(16, 16, 25, document.querySelector(".container1"));

///////////////////////
// bütün kareleri seçme
const squaresInC = document.querySelectorAll(".square");

squaresInC.forEach(function (el) {
  el.addEventListener("mouseover", doit, false);
});
// kareleri maviye boyama
function doit(e) {
  e.target.style.backgroundColor = "blue";
}

/////////////////////////
btn.addEventListener("click", function () {
  squaresInC.forEach(function (el) {
    el.style.backgroundColor = "white";
  });
});

// squareInC.addEventListener("mouseover", function (e) {
//   e.target.style.color = "blue";
//   console.log(e);
// });

// document.querySelector(".square").addEventListener("mouseover", func, false);
// document.querySelector(".square").addEventListener("mouseout", func1, false);

// function func() {
//   document
//     .querySelector(".square")
//     .setAttribute("style", "background-color:green;");
// }

// function func1() {
//   document
//     .querySelector(".square")
//     .setAttribute("style", "background-color:green;");
// }

/////////////

// for (let i = 0; i < 16; i++) {
//   for (let j = 0; j < 16; j++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     containerAlt.appendChild(square);
//   }
//   square.innerHTML += "<br>";
// }
