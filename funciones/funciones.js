/*let subt = document.getElementById('subt');
if(subt){
    subt.textContent = 'Subtítulo cambiado desde funciones.js';
}

let plataforma = document.getElementById('plataforma');
if(plataforma){
    plataforma.addEventListener('click', () => {
        window.location.href = './recursos/paginas/plataforma.html';
    });
}
*/
let volver = document.getElementById('volver');
if(volver){
    volver.addEventListener('click', () => {
        window.history.back();
    });
}
/*
// Variables globales
const openModalBtns = document.querySelectorAll('.desc'); // Todos los botones de descripción
const closeModalBtn = document.getElementById('closeModal'); // Botón para cerrar el modal
const modal = document.getElementById('modal'); // Modal
const overlay = document.getElementById('overlay'); // Fondo oscuro
const modalTitle = document.getElementById('modalTitle'); // Título dinámico
const modalDescription = document.getElementById('modalDescription'); // Descripción dinámic
// Abrir el modal y cambiar su contenido dinámicamente
openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const productTitle = button.getAttribute('data-title'); // Toma el título del producto
        const productDescription = button.getAttribute('data-description'); // Toma la descripción del producto
        
        // Cambia el contenido del modal
        modalTitle.textContent = productTitle;
        modalDescription.textContent = productDescription
        // Muestra el modal y la superposición
        modal.classList.add('open');
        overlay.classList.add('open');
    });
})
// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    overlay.classList.remove('open');
})
// Cerrar modal si se hace clic en la superposición
overlay.addEventListener('click', () => {
    modal.classList.remove('open');
    overlay.classList.remove('open');
})
// ubicar modal
document.querySelectorAll(".desc").forEach((button) => {
    button.addEventListener("click", (event) => {
        const modal = document.querySelector(".modal");
        
        // Mostrar el modal
        modal.style.display = "block";

        // Asegurarte de que el modal esté visible
        modal.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});

// Cerrar el modal al hacer clic fuera de él o en un botón cerrar
document.querySelector(".modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        event.currentTarget.style.display = "none";
    }
});
*/
let wsp = document.getElementById('wsp');
wsp.addEventListener('click', function(){
    //wsp.setAttribute('target', '_blank');
    window.open('https://wa.me/+554197153863?text=Hola,%20estoy%20interesado%20en%20contactarte por un producto de moppets-curitiba.', '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal().reveal('.collapse', {delay: 500});
  ScrollReveal().reveal('.rounded-circle', {duration: 1000, origin: 'right', distance: '100px', interval: 200});
  ScrollReveal().reveal('h2', {duration: 1000, origin: 'right', distance: '100px', interval: 200});
  /*ScrollReveal().reveal('.card-container .card', {duration: 1000, origin: 'right', distance: '100px', interval: 200});
  ScrollReveal().reveal('.carrusel', {delay: 500});
  ScrollReveal().reveal('.formulario', {delay: 500});*/
  ScrollReveal().reveal('footer', {delay: 500});
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.logo', { opacity:0, y: -50, duration: 1, ease: 'bounce'});
  /*gsap.from('h1', { opacity:0, x: -100, duration: 1.5, delay: 0.5});
  gsap.from('h2', { opacity:0, x: -100, duration: 1.5, delay: 0.5});*/
});

let imagenPrincipal = document.getElementById('brincar_1');
imagenPrincipal.addEventListener('mouseover', () => {
    imagenPrincipal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    imagenPrincipal.classList.add('brinca');
    setTimeout(() =>{
        imagenPrincipal.classList.remove('brinca');
    }, 800);
});

let imagenSegunda = document.getElementById('brincar_2');
imagenSegunda.addEventListener('mouseover', () => {
    imagenSegunda.scrollIntoView({ behavior: 'smooth', block: 'center' });
    imagenSegunda.classList.add('brinca');
    setTimeout(() =>{
        imagenSegunda.classList.remove('brinca');
    }, 800);
});

let imagenTercera = document.getElementById('brincar_3');
imagenTercera.addEventListener('mouseover', () => {
    imagenTercera.scrollIntoView({ behavior: 'smooth', block: 'center' });
    imagenTercera.classList.add('brinca');
    setTimeout(() =>{
        imagenTercera.classList.remove('brinca');
    }, 800);
});