//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".sideMenu");
const wrapper = document.querySelector(".wrapper");

const hamburgerBtn = () => {
    hamburger.classList.toggle("hamburger--active")
    sideMenu.classList.toggle("sideMenu--active")
}

//Beer glass animation 
const beerInGlasse = () => {
    let beerContaine = document.querySelectorAll(".beerContainer");
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            beerContaine[i].classList.add("beerContainerGrow")
            if (i = 4) {
                setTimeout(() => {
                    beerContaine[4].classList.add("beerContainer5Grow")
                }, 1000 * i)
            }
        }, (1000 * i))
    }
}

// article title background scroll
const titleBackgroundScrioll = () => {
    const firstWord = document.querySelectorAll(".firstWordTitle");
    const screenHeight = [340, 415, 1101, 1787, 2479];
    let currentScroll = window.scrollY;
    if (currentScroll <= screenHeight[0]) firstWord[0].classList.add("backgroundTitle")
    for (let i = 1; i < 5; i++) {
        if (currentScroll >= screenHeight[i]) firstWord[i].classList.add("backgroundTitle")
    }
};

document.addEventListener("DOMContentLoaded", () => {
    hamburger.addEventListener("click", hamburgerBtn);
    beerInGlasse();
    window.addEventListener("scroll", titleBackgroundScrioll);
});