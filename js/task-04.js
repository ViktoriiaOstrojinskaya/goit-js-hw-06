const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

function account() {
  refs.valueEl.textContent = counterValue.toString();
}

refs.buttonDecrement.addEventListener('click', () => {
  counterValue += 1;
  account();
});

refs.buttonIncrement.addEventListener('click', () => {
  counterValue -= 1;
  account();
});

account();
