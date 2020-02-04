//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".sideMenu")
const wrapper = document.querySelector(".wrapper")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active")
    sideMenu.classList.toggle("sideMenu--active")
})
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

document.addEventListener("DOMContentLoaded", beerInGlasse());

// article title background scroll
const titleBackgroundScrioll = () => {
    const firstWord = document.querySelectorAll(".firstWordTitle");
    let currentScroll = window.scrollY;
    if (currentScroll <= 340) firstWord[0].classList.add("backgroundTitle")
    if (currentScroll >= 415 ) firstWord[1].classList.add("backgroundTitle")
    if (currentScroll >= 1101) firstWord[2].classList.add("backgroundTitle")
    if (currentScroll >= 1787 ) firstWord[3].classList.add("backgroundTitle")
    if (currentScroll >= 2479) firstWord[4].classList.add("backgroundTitle")
}

window.addEventListener("scroll", titleBackgroundScrioll)