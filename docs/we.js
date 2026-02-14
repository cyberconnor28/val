/******/ (() => { // webpackBootstrap
var img = document.querySelector('.weimg');
var but = document.querySelector('.like');
var images = ['../img/we1.svg', '../img/we2.svg', '../img/we3.svg'];
var index = 0;
but.addEventListener('click', function () {
  index = (index + 1) % images.length;
  img.src = images[index];
});
/******/ })()
;