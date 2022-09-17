const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

const titleCategoriesEl = document.querySelectorAll('h2');
console.log('Category:', titleCategoriesEl[0].textContent);
const animalsEl = categoriesEl[0].querySelectorAll('li');
console.log('Elements:', animalsEl.length);

console.log('Category:', titleCategoriesEl[1].textContent);
const productsEl = categoriesEl[1].querySelectorAll('li');
console.log('Elements:', productsEl.length);

console.log('Category:', titleCategoriesEl[2].textContent);
const technologiesEl = categoriesEl[2].querySelectorAll('li');
console.log('Elements:', technologiesEl.length);

// const categoriesEl = document.querySelectorAll('.item');
// console.log('Number of categories:', categoriesEl.length);

// const titleCategoriesEl = document.querySelectorAll('h2');
// console.log('Category:', titleCategoriesEl[0].textContent);
// console.log('Category:', titleCategoriesEl[0].children);
// console.log('Category:', titleCategoriesEl[1].textContent);
// console.log('Category:', titleCategoriesEl[2].textContent);

// const listCategoriesEl = titleCategoriesEl[0].querySelectorAll('li');
