
let hamburger=document.getElementById("hamburger");
let hamburgerClose=document.getElementById("hamburgerClose");
hamburger.addEventListener("click", myFunction);
hamburgerClose.addEventListener("click", myFunction2);

function myFunction() {
    const mobileNav = document.getElementById("mobileNav").classList;
    mobileNav.remove("hide");
    hamburgerClose.classList.remove("hide");
    hamburger.classList.remove("show");

    
    mobileNav.add("show");
    hamburgerClose.classList.add("show");
    hamburger.classList.add("hide");
}
function myFunction2() {
    const mobileNav = document.getElementById("mobileNav").classList;
    mobileNav.remove("show");
    hamburgerClose.classList.remove("show");
    hamburger.classList.remove("hide");


    mobileNav.add("hide");
    hamburgerClose.classList.add("hide");
    hamburger.classList.add("show");
}


