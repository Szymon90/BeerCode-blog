//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".sideMenu")
const wrapper = document.querySelector(".wrapper")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger--active")
    sideMenu.classList.toggle("sideMenu--active")
})