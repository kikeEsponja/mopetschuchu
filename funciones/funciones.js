let volver = document.getElementById('volver');
if(volver){
    volver.addEventListener('click', () => {
        window.history.back();
    });
}

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