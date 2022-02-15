/*
  References:
  - https://htmlcolorcodes.com/color-chart/
*/

// let paletteList = ['#922b21', '#b03a2e', '#76448a', '#6c3483', '#1f618d', '#2874a6', '#148f77', '#117a65', '#1e8449', '#239b56', '#b7950b', '#b9770e', '#af601a', '#a04000', '#b3b6b7', '#909497', '#717d7e', '#616a6b', '#283747', '#212f3d', '#000000'];
let paletteList = ['black', 'red', 'green', 'blue'];
let selectedColor = '';

function createBrush(color) {
  const brushPin = document.createElement('div');
  brushPin.style.backgroundColor = color;
  brushPin.className = `color ${color}`;
  brushPin.addEventListener('click', selectColor);
  return brushPin;
}

function createPalettes(paletteList) {
  const colorPalette = document.querySelector('#color-palette');
  for (let color of paletteList) {
    let brush = createBrush(color);
    colorPalette.appendChild(brush);
  }
}

function createPixel(position) {
  let pixel = document.createElement('div');
  pixel.className = `pixel ${position}`;
  pixel.style.backgroundColor = '#ffffff';
  pixel.addEventListener('click', changeColor)
  return pixel;
}

function createPixelBoard(width, height) {
  let pixelBoard = document.querySelector('#pixel-board');
  let maxWidth = width * 40 + 10;
  pixelBoard.style.width = `${maxWidth}px`;
  for (let i = 0; i < width; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    for (let j = 0; j < height; j += 1) {
      pixelLine.appendChild(createPixel(`w${i}h${j}`));
    }
    pixelBoard.appendChild(pixelLine);
  }
}

function selectColor(event) {
  console.log(event);
  if (event !== undefined) {
    selectedColor.classList.remove('selected');
    selectedColor = event.target;
  } else {
    selectedColor = document.querySelector('.black');
  }
  selectedColor.classList.add('selected');
}

function changeColor(event) {
  let color = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function clearBoard() {
  document.querySelectorAll('.pixel').forEach(item => {
    item.style.backgroundColor = '#fff';
  });
}

function createClearBtn() {
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', clearBoard);
}

window.onload = () => {
  createPalettes(paletteList);
  createClearBtn();
  createPixelBoard(5, 5);
  selectColor();
}