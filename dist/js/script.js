const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const buhokoverlay = document.querySelector(".buhok");
toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
    buhokoverlay.classList.toggle("open");
});

const kalboNav = document.querySelectorAll(".kalbo__nav__link");
const kalboContent = document.querySelectorAll(".kalbo__item__content");

kalboNav.forEach((kalbo) => {
    kalbo.addEventListener("click", () => {
        removeActiveKalbo();
        kalbo.classList.add("active");
        const activeContent = document.querySelector(`#${kalbo.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");


    });
});



function removeActiveKalbo() {
    kalboNav.forEach((kalbo) => {
        kalbo.classList.remove("active");
    });
}

function removeActiveContent() {
    kalboContent.forEach((kalbo) => {
        kalbo.classList.remove("active");
    });
}




const drop = document.querySelectorAll(".footer__item a")   ;
drop.forEach((link) => {
    link.addEventListener("click", () => {
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("i").classList.toggle("open");
    });
});

AOS.init();
