let body = document.body;
const page = window.location;

if (page.hostname == 'www.semana.com') {
    let canvas = document.querySelector('.off-canvas-wrap');
    let imgNano = document.querySelector('.img-nano');
    let modals = document.querySelectorAll('.md-modal');
    let overlay = document.querySelector('.md-overlay');

    body.classList.remove('blockContent');
    canvas.style.overflow = 'auto';
    imgNano.style.filter = 'none';
    overlay.style.display = 'none';
    modals.forEach(function(element) {
        element.style.display = 'none';
    });
}

if (page.hostname == 'www.elespectador.com') {
    let modal = document.querySelector('.tp-modal');
    let overlay = document.querySelector('.tp-backdrop');

    overlay.style.display = 'none';
    modal.style.display = 'none';
}

if (page.hostname == 'www.eltiempo.com') {
    // TODO: rerun script to load article from server
    let modal = document.querySelector('.paywallv2-container');

    body.classList.remove('stop-scrolling');
    modal.style.display = 'none';
}

