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
//arrow animation 
const colorArrow =["#F2F0EB","#241113","#650F0E","#DE7A25","#F2CE00"] 
const arrowBox = document.querySelectorAll(".arrowBox")
const arrowPosition = () => {
    for (let i = 0; i<5;i++){
        if(i==0){
            arrowBox[0].style.left = "0px"
        } 
        arrowBox[i].style.left = ((i*4)*(-1))+"px"
        arrowBox[i].children[0].style.backgroundColor = colorArrow[i]
        arrowBox[i].children[1].style.backgroundColor = colorArrow[i]
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