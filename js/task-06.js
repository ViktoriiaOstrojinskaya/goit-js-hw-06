const input = document.querySelector('#validation-input');
const styleBorder = document.querySelector('style');

input.addEventListener('blur', onChangeColor);

function onChangeColor(event) {
  const outInputLength = event.currentTarget.value.length;
  if (outInputLength === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    return input.classList.add('invalid');
  }
}
