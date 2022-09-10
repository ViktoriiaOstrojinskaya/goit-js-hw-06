const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const productsContainerEl = document.querySelector('.gallery');

const makeProductCard = ({ url, alt }) => {
  const listEl = document.createElement('li');
  listEl.classList.add('list__item');

  const imagesEl = document.createElement('img');
  imagesEl.classList.add('img__item');
  imagesEl.textContent = `${url}`;
  imagesEl.textContent = `${alt}`;

  listEl.append(imagesEl);

  return listEl;
};

const elements = images.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...images);
