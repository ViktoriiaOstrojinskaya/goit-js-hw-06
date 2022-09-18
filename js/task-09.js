function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('.widget');
const button = widget.querySelector('.change-color');
const span = widget.querySelector('.color');

button.addEventListener('click', onChangeBackground);

function onChangeBackground() {
  widget.style.backgroundColor = getRandomHexColor();
  span.textContent = widget.style.backgroundColor;
}
