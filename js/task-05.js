const refs = {
  textInput: document.querySelector('#name-input'),
  textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event === '') {
    refs.textOutput.textContent = 'Anonymous';
  } else {
    refs.textOutput.textContent = event.currentTarget.value;
  }
}
