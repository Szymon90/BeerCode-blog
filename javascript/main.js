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


// pouring Beer in banner
const glassInBaner = () => {
    let glassBoxTebel = [
        document.querySelector(".glassBox1"),
        document.querySelector(".glassBox2"),
        document.querySelector(".glassBox3"),
        document.querySelector(".glassBox4"),
        document.querySelector(".glassBox5")
    ]
    let pouringBeer = (i) => {
        glassBoxTebel[i].classList.add("pouringBeer")
    }
    pouringBeer(0)

    setTimeout(() => {
        pouringBeer(1)
    }, 1000)
    
    setTimeout(() => {
        pouringBeer(2)
    }, 2000)
    
    setTimeout(() => {
        pouringBeer(3)
    }, 3000)
    
    setTimeout(() => {
        glassBoxTebel[4].classList.add("foam")
    }, 4000)
}
