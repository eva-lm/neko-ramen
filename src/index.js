import '@fortawesome/fontawesome-free/js/all.min.js';

const iconBurguer = document.querySelector('.icon-burguer'); //el boton hamburguesa mobile
const menuItems = document.querySelector('.menu__items'); //el div del menu

let openMenu = false; //por defecto cerrado


iconBurguer.addEventListener('click', () => {

    openMenu = !openMenu; //si es falso se convierte en verdadero y al reves

    menuItems.classList.toggle('hidden'); //quita la clase al primer click y la añade al segundo y asi
});
console.log("menu abierto?", openMenu);



