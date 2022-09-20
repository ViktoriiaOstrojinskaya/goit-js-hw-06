function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector('#controls'),
  boxes: document.querySelector('#boxes'),
  input: controls.querySelector('input'),
  create: controls.querySelector('[data-create]'),
  destroy: controls.querySelector('[data-destroy]'),
};

refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    size += 10;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
  }
  refs.boxes.append(fragment);
}

// function destroyBoxes() {
//   refs.boxes.remove();
//   refs.input.value = '';
// }
