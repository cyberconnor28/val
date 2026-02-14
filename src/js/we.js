import we1 from '../img/we1.svg';
import we2 from '../img/we2.svg';
import we3 from '../img/we3.svg';

const img = document.querySelector('.weimg');
const but = document.querySelector('.like');

const images = [we1, we2, we3];
let index = 0;

but.addEventListener('click', () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});
