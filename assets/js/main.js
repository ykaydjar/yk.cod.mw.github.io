const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav-shown');
        navClose.classList.add('close-btn-shown');
    })
}

if(navClose ) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav-shown');
        navClose.classList.remove('close-btn-shown');
    })
}
