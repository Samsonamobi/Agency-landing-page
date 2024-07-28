let open = document.getElementById("open"),
navMenu = document.getElementById("navMenu");

open.addEventListener("click", ()=>{
    open.classList.toggle("hide")
    navMenu.classList.toggle("slide")
})