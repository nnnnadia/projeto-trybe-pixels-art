/*
  References:
  - https://htmlcolorcodes.com/color-chart/
*/

// let paletteList = ['#922b21', '#b03a2e', '#76448a', '#6c3483', '#1f618d', '#2874a6', '#148f77', '#117a65', '#1e8449', '#239b56', '#b7950b', '#b9770e', '#af601a', '#a04000', '#b3b6b7', '#909497', '#717d7e', '#616a6b', '#283747', '#212f3d', '#000000'];
let paletteList = ['black', 'red', 'green', 'blue'];

function createBrush(color) {
  const brushPin = document.createElement('div');
  brushPin.style.backgroundColor = color;
  brushPin.className = 'color';
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
  return pixel;
}

function createPixelBoard(width, height) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < width; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    for (let j = 0; j < height; j += 1) {
      pixelLine.appendChild(createPixel(`w${i}h${j}`));
    }
    pixelBoard.appendChild(pixelLine);
  }
}

window.onload = () => {
  createPalettes(paletteList);
  createPixelBoard(5, 5);
}