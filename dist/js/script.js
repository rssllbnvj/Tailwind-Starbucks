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

        // Remove the .slider class from all sliders
        const sliders = document.querySelectorAll('.slider');
        sliders.forEach((slider) => {
            slider.classList.remove('active');
        });

        // Calculate and set the width of the slider based on the text length
        const link = kalbo.querySelector('a');
        const slider = kalbo.querySelector('.slider');
        slider.classList.add('active');
        slider.style.width = `${link.offsetWidth}px`; // Use template literals for setting the width
        slider.style.transition = ".5s ease"; // Add the transition property to the slider

        // Update the width of the slider to match the width of the link
        slider.style.width = `${link.offsetWidth}px`;

        // Show the item content with fade-in effect
        const itemContent = activeContent.querySelector('.kalbo__item__content');
        itemContent.style.opacity = 0;
        itemContent.classList.add('active');
    });
});

// Set the initial position of the slider to the active list item
const activeKalbo = document.querySelector('.kalbo__nav__link.active');
const activeLink = activeKalbo.querySelector('a');
const activeSlider = activeKalbo.querySelector('.slider');
activeSlider.classList.add('active');
activeSlider.style.width = `${activeLink.offsetWidth}px`;
activeSlider.style.transition = ".5s ease"; // Add the transition property to the slider

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
