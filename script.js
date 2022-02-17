/*
  References:
  - https://htmlcolorcodes.com/color-chart/
  - https://eslint.org/docs/rules/
*/

// let paletteList = ['#922b21', '#b03a2e', '#76448a', '#6c3483', '#1f618d', '#2874a6', '#148f77', '#117a65', '#1e8449', '#239b56', '#b7950b', '#b9770e', '#af601a', '#a04000', '#b3b6b7', '#909497', '#717d7e', '#616a6b', '#283747', '#212f3d', '#000000'];
const paletteList = ['black', 'orange', 'teal', 'navy'];
let selectedColor = '';
const pixelBoard = document.querySelector('#pixel-board');
let boardSize = 5;

function selectColor(event) {
  if (event !== undefined) {
    selectedColor.classList.remove('selected');
    selectedColor = event.target;
  } else {
    selectedColor = document.querySelector('.black');
  }
  selectedColor.classList.add('selected');
}

function createBrush(color) {
  const brushPin = document.createElement('div');
  brushPin.style.backgroundColor = color;
  brushPin.className = `color ${color}`;
  brushPin.addEventListener('click', selectColor);
  return brushPin;
}

function createPalettes(colorList) {
  const colorPalette = document.querySelector('#color-palette');
  for (let color of colorList) {
    let brush = createBrush(color);
    colorPalette.appendChild(brush);
  }
}

function checkSize(width) {
  if (width === undefined || width === null || width === '' || width <= 0) {
    alert('Board inválido!');
    return;
  }
  if (width > 4 && width < 51) {
    return width;
  } else if (width < 6) {
    return 5;
  } else if (width > 50) {
    return 50;
  }
}

function changeColor(event) {
  const color = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixel.addEventListener('click', changeColor);
  return pixel;
}

function createPixelBoard(width) {
  const checkedWidth = checkSize(width);
  if (width > 1) {
    const maxWidth = checkedWidth * 42;
    pixelBoard.style.checkedWidth = `${maxWidth}px`;
    pixelBoard.style.checkedWidth = `${maxWidth}px`;
    for (let i = 0; i < checkedWidth; i += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixel-line';
      for (let j = 0; j < checkedWidth; j += 1) {
        pixelLine.appendChild(createPixel());
      }
      pixelBoard.appendChild(pixelLine);
    }
  }
}

function generateBoard() {
  document.querySelectorAll('.pixel-line').forEach((item) => {
    item.remove();
  });
  boardSize = document.querySelector('#board-size').value;
  createPixelBoard(boardSize);
}

function clearBoard() {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
}

function createClearBtnListener() {
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', clearBoard);
  const btnGenerate = document.querySelector('#generate-board');
  btnGenerate.addEventListener('click', generateBoard);
}

window.onload = () => {
  createPalettes(paletteList);
  createClearBtnListener();
  createPixelBoard(boardSize);
  selectColor();
};
