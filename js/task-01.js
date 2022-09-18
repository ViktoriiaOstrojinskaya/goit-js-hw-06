const categories = document.querySelectorAll('li.item');
console.log('Number of categories:', categories.length);

categories.forEach(el =>
  console.log(
    `Category: ${el.firstElementChild.textContent} \nElements: ${el.lastElementChild.children.length}`
  )
);
