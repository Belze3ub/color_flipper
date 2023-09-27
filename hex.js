let colorHex = '0123456789ABCDEF';

function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomHexVelue() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colorHex[getRandomValue(0, 15)];
  }

  return color;
}

let btn = document.querySelector('#button');
let colorName = document.querySelector('#color-name');

let changeColor = function () {
  colorName.innerHTML = getRandomHexVelue();
  document.body.style.background = getRandomHexVelue();
};

btn.addEventListener('click', changeColor);
window.addEventListener('load', changeColor);