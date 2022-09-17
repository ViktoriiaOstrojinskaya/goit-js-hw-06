const input = document.querySelector('#validation-input');
const styleBorder = document.querySelector('style');

input.addEventListener('blur', onChangeColor);

function onChangeColor(event) {
  const outInputLength = event.currentTarget.value.length;
  outInputLength === Number(input.dataset.length)
    ? input.classList.toggle('valid')
    : input.classList.toggle('invalid');
}
