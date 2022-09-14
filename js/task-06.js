const input = document.querySelector('input');
const styleBorder = document.querySelector('style');
const inputLength = input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if ((input.dataset.length = 6)) {
    styleBorder = valid;
  }
}
