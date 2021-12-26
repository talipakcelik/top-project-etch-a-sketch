'use strict';
/************************/
/******BUTON ALANI*******/
/************************/
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buton-c');
document.body.appendChild(buttonContainer);
//
const btn = document.createElement('button');
btn.classList.add('buton1');
buttonContainer.appendChild(btn);
btn.textContent = 'Refresh';
//
const btn2 = document.createElement('button');
btn2.classList.add('buton2');
buttonContainer.appendChild(btn2);
btn2.textContent = 'Clear';
//
const btn3 = document.createElement('button');
btn3.classList.add('buton3');
buttonContainer.appendChild(btn3);
btn3.textContent = 'Rainbow';
//
const blackPen = document.createElement('button');
blackPen.classList.add('black-p');
blackPen.textContent = 'Black';
buttonContainer.appendChild(blackPen);
//
// const bluePen = document.createElement('button');
// bluePen.classList.add('blue-p');
// bluePen.textContent = 'Blue';
// buttonContainer.appendChild(bluePen);
// body içerisine container1 sınıflı ana div eklendi.
const containerUst = document.createElement('div');
containerUst.classList.add('container-1');
document.body.appendChild(containerUst);
//
// const colorPickerText = document.createElement('label');
// colorPickerText.setAttribute('for', 'colorWell');
// colorPickerText.textContent = 'Color:';
// buttonContainer.appendChild(colorPickerText);
//
const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.classList.add('color-p');
buttonContainer.appendChild(colorPicker);
//

/********************************/
/******BAŞLANGIÇ KOŞULLARI*******/
/********************************/
let currentPen = 'black';
let starterColumns = 36;
let starterRows = 36;

/************************************/
/******buildGrid (F)*******/
/************************************/
function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = 'grid';
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
  }
  gridElement.appendChild(squares);
}

buildGrid(
  starterColumns,
  starterRows,
  13,
  document.querySelector('.container-1')
);

/*****************************/
/******KARELERİN SEÇİNİ*******/
/*****************************/
let squaresInC = document.querySelectorAll('.square');

/***************************************/
/******YENİ GRID OLUŞTURMA BUTONU*******/
/***************************************/
btn.addEventListener('click', function () {
  reset();
  let numberOfs = Number(
    prompt('Please enter number of squares per side, from 1 to 100')
  );
  console.log(numberOfs);
  if (numberOfs >= 1 && numberOfs <= 100) {
    starterColumns = Number(numberOfs);
    starterRows = Number(numberOfs);
    currentPen = 'black';
    buildGrid(
      Number(starterColumns),
      Number(starterRows),
      13,
      document.querySelector('.container-1')
      // squaresInC = document.querySelectorAll(".square");
      // squaresInC.forEach(function (el) {
      //   el.addEventListener("mouseover", doit, false);
      // });
    );
    squaresInC = document.querySelectorAll('.square');
    callSquares();
  } else {
    numberOfs = Number(prompt('Please enter valid number, from 1 to 100'));
  }
});

/*****************************/
/******RESET (F)**************/
/*****************************/
function reset() {
  squaresInC.forEach(e => e.parentNode.removeChild(e));
}

/**********************************************/
/******BUTONLAR İÇİN CLICK HANDLER EVENT*******/
/**********************************************/
btn2.addEventListener('click', function () {
  currentPen = 'white';
  controlButtons();
});
//
btn3.addEventListener('click', function () {
  currentPen = 'rgb';
  controlButtons();
});
//
// bluePen.addEventListener('click', function () {
//   currentPen = 'blue';
//   controlButtons();
// });
////
blackPen.addEventListener('click', function () {
  currentPen = 'black';
  controlButtons();
});
//
colorPicker.addEventListener('click', function () {
  currentPen = 'colorPick';
  controlButtons();
});

/**************************************************************************************/
/******HANGİ BUTONA BASILDIĞINI KONTROL EDİN ONA GÖRE FONKSİYON ATAYAN FONKSİYON*******/
/**************************************************************************************/
function controlButtons() {
  // document.querySelectorAll("button");
  if (
    currentPen === 'black' ||
    // currentPen === 'blue' ||
    currentPen === 'white' ||
    currentPen === 'rgb'
  ) {
    callSquares();
    console.log('colorpick');
    // startup();
  } else if (currentPen === 'colorPick') {
    startup();
    console.log('asda');
  }
}
controlButtons(); // çıkartıldığı takdirde kullanıcının butonlara basması gerekir, eklenirse default kaleme geçer

/********************************************************************************************/
/******BUTONLAR İÇİN MOUSEOVER HANDLER'I AÇIP CURRENT KALEME GÖRE RENK ATAYAN FONKSİYON******/
/********************************************************************************************/
function callSquares() {
  squaresInC.forEach(function (el) {
    el.addEventListener('mouseover', function (e) {
      if (currentPen === 'blue') colorBlue(e);
      // el.style.backgroundColor = "blue";
      else if (currentPen === 'black') colorBlack(e);
      // el.style.backgroundColor = "black";
      else if (currentPen === 'rgb') colorGen(e);
      else if (currentPen === 'white') colorWhite(e);
      // window.addEventListener("load", startup, false);
    });
  });
}

/////////////////////////
//////color picker///////
/////////////////////////
let colorWell;
let defaultColor = '#0000ff';
// // window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector('.color-p');
  colorWell.value = defaultColor;
  colorWell.addEventListener('input', updateFirst, false);
  colorWell.addEventListener('change', updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  squaresInC.forEach(function (el) {
    el.addEventListener('mouseover', function (e) {
      if (squaresInC) {
        el.style.backgroundColor = event.target.value;
      }
    });
  });
}
function updateAll(event) {
  squaresInC.forEach(function (p) {
    p.style.backgroundcolor = event.target.value;
  });
}

/*************************************/
/******RENK ATAYAN FONKSİYONLAR*******/
/*************************************/
function colorBlack(e) {
  e.target.style.backgroundColor = 'black';
}
function colorBlue(e) {
  e.target.style.backgroundColor = 'blue';
}
function colorWhite(e) {
  e.target.style.backgroundColor = '#fff9db';
}
function colorGen(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
/*************************/
/*************************/
/*************************/
