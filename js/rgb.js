function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let btn = document.querySelector('#button');
let colorName = document.querySelector('#color-name');

let changeColor = function () {
  let randomColorRGB = `rgb(${getRandomValue(0, 255)}, ${getRandomValue(
    0,
    255
  )}, ${getRandomValue(0, 255)})`;
  colorName.innerHTML = randomColorRGB;
  document.body.style.background = randomColorRGB;
};

btn.addEventListener('click', changeColor);
window.addEventListener('load', changeColor);
