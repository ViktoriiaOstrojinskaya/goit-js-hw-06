const categoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesEl);

const titleCategoriesEl = document.querySelectorAll('h2');
console.log('Category:', titleCategoriesEl[0].textContent);
const animalsEl = categoriesEl[0].querySelectorAll('li');
console.log('Elements:', animalsEl);

console.log('Category:', titleCategoriesEl[1].textContent);
const productsEl = categoriesEl[1].querySelectorAll('li');
console.log('Elements:', productsEl);

console.log('Category:', titleCategoriesEl[2].textContent);
const technologiesEl = categoriesEl[2].querySelectorAll('li');
console.log('Elements:', technologiesEl);
