var body = document.body;
var canvas = document.querySelector('.off-canvas-wrap');
var imgNano = document.querySelector('.img-nano');
var modals = document.querySelectorAll('.md-modal');
var overlay = document.querySelector('.md-overlay');

body.classList.remove('blockContent');
canvas.style.overflow = 'auto';
imgNano.style.filter = 'none';
overlay.style.display = 'none';
modals.forEach(function(element) {
    element.style.display = 'none';
});