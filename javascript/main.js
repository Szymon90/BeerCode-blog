//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".sideMenu")
const wrapper = document.querySelector(".wrapper")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active")
    sideMenu.classList.toggle("sideMenu--active")
})

const beerInGlasse = () => {
    let beerContaine = document.querySelectorAll(".beerContainer");
    setTimeout(() => {
        beerContaine[0].classList.add("beerContainerGrow")
    }, 0)
    setTimeout(() => {
        beerContaine[1].classList.add("beerContainerGrow")
    }, 1000)
    setTimeout(() => {
        beerContaine[2].classList.add("beerContainerGrow")
    }, 2000)
    setTimeout(() => {
        beerContaine[3].classList.add("beerContainerGrow")
    }, 3000)
    setTimeout(() => {
        beerContaine[4].classList.add("beerContainer5Grow")
    }, 4000)
}

document.addEventListener("DOMContentLoaded", beerInGlasse());