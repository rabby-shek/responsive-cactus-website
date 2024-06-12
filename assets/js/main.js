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
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollup = document.getElementById('scrollUp');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId+ ']');
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

