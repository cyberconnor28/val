import '../css/style.css'

const cat1 = document.querySelector('.cat-cont1');
if (cat1) {
  cat1.addEventListener('click', () => {
    window.location.href = 'pages/hello.html';
  });
}