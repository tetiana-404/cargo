
// scroll event
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
        header.classList.remove('unscrolled');
    } else {
        header.classList.add('unscrolled');
        header.classList.remove('scrolled');
    }
});

// hamburger-menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
});

// images carousel 
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// carusel indicatord
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

setInterval(nextImage, 5000); 

// submenu 
const submenuLinks = document.querySelectorAll('.submenu-list li a');
const submenuImage = document.getElementById('submenu-image');
const submenuTitle = document.getElementById('submenu-title');
const submenuSubtitle = document.getElementById('submenu-subtitle');

submenuLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        const newImgSrc = this.getAttribute('data-img');
        submenuImage.src = `images/${newImgSrc}`;

        const newTitle = this.getAttribute('data-title');
        const newSubtitle = this.getAttribute('data-subtitle');
        submenuTitle.textContent = newTitle;
        submenuSubtitle.textContent = newSubtitle;
    });
});
