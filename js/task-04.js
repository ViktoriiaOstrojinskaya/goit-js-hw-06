const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

function account() {
  refs.valueEl.textContent = counterValue.toString();
}

refs.buttonDecrement.addEventListener('click', onClickDecrement);
refs.buttonIncrement.addEventListener('click', onClickIncrement);

function onClickDecrement() {
  counterValue -= 1;
  account();
}

function onClickIncrement() {
  counterValue += 1;
  account();
}
