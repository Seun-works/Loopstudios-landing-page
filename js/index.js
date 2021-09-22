const heading = document.getElementById('head');
const menubtn = document.querySelector('.menu-button');
const body = document.body;

let menuOpen = false;

function changeMenu() {
    if(!menuOpen) {
        heading.classList.add ('is-open');
        menubtn.setAttribute("src", "images/icon-close.svg");
        body.style.overflow = "hidden";
        menuOpen = true;
    } else {
        heading.classList.remove ('is-open');
        menubtn.setAttribute("src", "images/icon-hamburger.svg");
        body.style.overflow = "auto";
        menuOpen = false;
    }
}