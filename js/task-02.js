const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsEl = elements => {
  return elements.map(element => {
    const addEl = document.createElement('li');
    addEl.textContent = `${element}`;
    addEl.classList.add('item');
    return addEl;
  });
};

const nameIngredientsEl = makeIngredientsEl(ingredients);
ingredientsEl.append(...nameIngredientsEl);
