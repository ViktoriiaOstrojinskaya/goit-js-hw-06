const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

const counterValue = 0;

refs.buttonDecrement.addEventListener('click', onDecrementValue);
refs.buttonIncrement.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  refs.valueEl.textContent = counterValue - 1;
}

function onIncrementValue() {
  refs.valueEl.textContent = counterValue + 1;
}
