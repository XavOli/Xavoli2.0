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