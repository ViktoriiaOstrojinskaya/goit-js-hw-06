const refs = {
  textInput: document.querySelector('#name-input'),
  textOutput: document.querySelector('#name-output'),
};

console.dir(refs.textOutput);

refs.textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    refs.textOutput.textContent = event.currentTarget.value.trim();
  } else {
    refs.textOutput.textContent = '123456';
  }
}
