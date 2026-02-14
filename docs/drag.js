/******/ (() => { // webpackBootstrap
var draggableElements = document.querySelectorAll(".drag");
draggableElements.forEach(function (element) {
  var isDragging = false;
  var offsetX, offsetY;
  element.addEventListener("mousedown", function (event) {
    isDragging = true;
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
    function onMouseMove(event) {
      if (isDragging) {
        var x = event.clientX - offsetX;
        var y = event.clientY - offsetY;
        element.style.left = x + "px";
        element.style.top = y + "px";
      }
    }
    function onMouseUp() {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});
/******/ })()
;