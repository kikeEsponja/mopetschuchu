/*const calcular = document.getElementById('calcular');
calcular.addEventListener('click', function(){
    let alto = parseFloat(document.getElementById('alto').value) || 0;
    let ancho = parseFloat(document.getElementById('ancho').value) || 0;
    let largo = parseFloat(document.getElementById('largo').value) || 0;

    let suma = alto + ancho + largo;

    let resultado = document.getElementById('resultado');
    resultado.textContent = suma;
}); */

function actualizarSuma() {
  const alto = parseFloat(document.getElementById("alto").value) || 0;
  const ancho = parseFloat(document.getElementById("ancho").value) || 0;
  const largo = parseFloat(document.getElementById("largo").value) || 0;

  const suma = alto + ancho + largo;
  document.getElementById("resultado").textContent = "Suma total: " + suma + " " + "USD";
}

// Escuchar cambios en los tres campos
document.getElementById("alto").addEventListener("input", actualizarSuma);
document.getElementById("ancho").addEventListener("input", actualizarSuma);
document.getElementById("largo").addEventListener("input", actualizarSuma);

let enviar = document.getElementById('enviar');
enviar.addEventListener('click', function(){
    let calculadora = document.getElementById('calculadora');
    let wsp = document.createElement('a');
    wsp.textContent = 'enviar a chuchú';
    wsp.href = '../sent.html';
    calculadora.appendChild(wsp);
});