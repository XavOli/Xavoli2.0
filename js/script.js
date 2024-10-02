// Hamburger + Menu
const btn=document.getElementById('menu-btn')
const menu=document.getElementById('menu')
const navbar=document.getElementById('navbar')
const logo=document.getElementById('logo')
btn.addEventListener('click', navToggle)
function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
    navbar.classList.toggle('flex-col')
    logo.classList.toggle('hidden')
}

// Scroll transparency
const navCont = document.getElementById('navCont')
window.addEventListener("scroll", changeColor);
function changeColor() {
    const scroll = window.scrollY;
    if (scroll >= 50) {
        navCont.classList.add('scroll-nav');
        console.log(true);
    } else {
        navCont.classList.remove('scroll-nav');
        console.log(false);
    }
};