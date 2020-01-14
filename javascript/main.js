// Active hamburger
const btnHamburger = document.querySelector(".hamburgerMenu");
const enteringMenu = document.querySelector(".enteringMenu");
const xLogo = document.querySelector(".xLogo");
const activeBackgroundBtn1 = document.querySelector(".activeBackgroundBtn1")
btnHamburger.addEventListener("click", () => {
    enteringMenu.style.left = "0"
    activeBackgroundBtn1.style.display ="block"
});
xLogo.addEventListener("click", () => {
    enteringMenu.style.left = "-100%"
})