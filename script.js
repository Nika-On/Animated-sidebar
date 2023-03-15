//declaring variables
const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const closeSymbol = document.querySelector(".close-symbol");
//displaying menu sidebar
hamburgerMenu.addEventListener("click",()=>{
    overlay.style.width = "75%";
    menu.classList.add("active")
})
//hiding menu sidebar
closeSymbol.addEventListener("click",()=>{
    overlay.style.width = "0%";
    menu.classList.remove("active");
})