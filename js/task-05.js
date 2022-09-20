const refs = {
  textInput: document.querySelector('#name-input'),
  textOutput: document.querySelector('#name-output'),
};

console.dir(refs.textOutput);

refs.textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value
    ? (refs.textOutput.textContent = event.currentTarget.value.trim())
    : (refs.textOutput.textContent = 'Anonymous');
}
