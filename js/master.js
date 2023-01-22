// Preloader
const preloader = document.querySelector('.preloader');
window.onload = (e) => {
    preloader.style.display = 'none';
}

// header scroll body
const header = document.querySelector('header');
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 200) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
        if (window.scrollY > 100) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0px';
        }
    }
});

// click menu
const menu = document.querySelector('header .menu-toggler');
const linkes = document.querySelector('header .linkes .navigation');

menu.addEventListener('click', (e) => {
    linkes.classList.toggle('visible');
    e.stopPropagation();
    e.preventDefault();
});

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 200) {
        linkes.classList.remove("visible");
    }
});

// click sub-nav-toggler
const toggle = document.querySelectorAll('header .linkes .sub-nav-toggler');

toggle.forEach((but) => {
    but.addEventListener('click', (e) => {
        let menu = e.target.parentElement;
        if (e.target.classList.contains('sub-nav-toggler')) {
            menu = menu.querySelector('.sub-menu');
        } else {
            menu = menu.parentElement.querySelector('.sub-menu');
        }
        menu.classList.toggle('show');
        e.stopPropagation();
        e.preventDefault();
    });
});

// class active
const linkActive = document.querySelectorAll('header .navigation a');
const sections = document.querySelectorAll('section[id]');
linkActive.forEach((e) => {
    e.addEventListener('click', (el) => {
        console.log(el.target.hash);
        el.target.parentElement.parentElement.querySelectorAll('.active').forEach((a) => {
            a.classList.remove('active');
        });
        el.target.classList.add('active');
    });
});
window.addEventListener('scroll', (e) => {
    sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) {
            linkActive.forEach((el) => {
                if (el.hash == '#' + s.id) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        }
    });
});

// funfacta
const funfact = document.querySelector('.funfact');
const funfactTest = funfact !== null ? ( funfact.offsetTop) : undefined;
const funfactNumber = document.querySelectorAll('.funfact .item h3');
let start = true;
window.addEventListener('scroll', (e) => {
    if (window.scrollY > funfactTest - 150) {
        if (start) {
            funfactNumber.forEach((el) => {
                upNumber(el);
            });
        }
        start = false;
    }
});

function upNumber(e) {
    const goal = e.dataset.number;
    const counter = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(counter);
        }
    }, (10 / goal));
};


// swiper Brand
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        765: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },
    loop: true,
});

// swiper Screens
const swiperScreens = new Swiper('.swiper-screen', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    centerSlide: true,
    fade: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        765: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        },
    },
    loop: true,
});

// swiper Testimonials Images
const swiperTestimonialsImages = new Swiper('.swiper-testimonials-images', {
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centerSlide: true,
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
});
// swiper Testimonials Text
const swiperTestimonialsText = new Swiper('.swiper-testimonials-text', {
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centerSlide: true,
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    thumbs: {
        swiper: swiperTestimonialsImages
    }
});


// page-wrapper
const buttonScroll = document.querySelector('.page-wrapper');
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 300) {
        buttonScroll.style.display = "block";
    } else {
        buttonScroll.style.display = "none";
    }
});
buttonScroll.addEventListener('click', (e) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});