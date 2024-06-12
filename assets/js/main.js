/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose');

// Show Menu

if (navMenu) {
    navToggle.addEventListener('click', () => {
        console.log("clicked");
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY>=50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

