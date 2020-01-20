// Active hamburger menu 
const btnHamburger = document.querySelector(".hamburgerMenu");
const enteringMenu = document.querySelector(".enteringMenu");
const xLogo = document.querySelector(".xLogo");
const activeBackgroundBtn1 = document.querySelector(".activeBackgroundBtn1")
const wrapper = document.querySelector(".wrapper")
btnHamburger.addEventListener("click", () => {
    enteringMenu.style.left = "0";
    wrapper.classList.remove("enlargenWrapper")
    wrapper.classList.add("reductionWrapper");
});
xLogo.addEventListener("click", () => {
    enteringMenu.style.left = "-100%";
    wrapper.classList.remove("reductionWrapper");
    wrapper.classList.add("enlargenWrapper")
});