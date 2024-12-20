let subt = document.getElementById('subt');
if(subt){
    subt.textContent = 'Subtítulo cambiado desde funciones.js';
}

let plataforma = document.getElementById('plataforma');
if(plataforma){
    plataforma.addEventListener('click', () => {
        window.location.href = './recursos/paginas/plataforma.html';
    });
}

let volver = document.getElementById('volver');
volver.addEventListener('click', () => {
    window.history.back();
});