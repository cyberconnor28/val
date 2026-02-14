/******/ (() => { // webpackBootstrap
var el = document.getElementById("since");
if (el) {
  var render = function render() {
    var diff = Math.max(0, Date.now() - startMs);
    var s = Math.floor(diff / 1000);
    var d = Math.floor(s / 86400);
    var h = Math.floor(s % 86400 / 3600);
    var m = Math.floor(s % 3600 / 60);
    el.textContent = "".concat(d, " \u0434\u043D\u0435\u0439 ").concat(pad(h), " \u0447 ").concat(pad(m), " \u043C\u0438\u043D");
  };
  var START = "2024-03-04T15:25:00Z";
  var startMs = new Date(START).getTime();
  var pad = function pad(n) {
    return String(n).padStart(2, "0");
  };
  render();
  setInterval(render, 1000);
}
/******/ })()
;