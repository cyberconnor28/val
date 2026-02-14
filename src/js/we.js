const img = document.querySelector('.weimg');
const but = document.querySelector('.like');

const images = [
  '../img/we1.svg',
  '../img/we2.svg',
  '../img/we3.svg'
];

let index = 0;

but.addEventListener('click', () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});
