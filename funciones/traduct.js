async function traducirPagina(sourceLang, targetLang) {
  const elementos = Array.from(document.querySelectorAll("p, h1, h2, h3, span, a, li, button"));

  // Recolectamos textos
  const textos = elementos.map(el => el.innerText.trim()).filter(t => t.length > 0);

  if (textos.length === 0) return;

  try {
    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: textos,   // 👈 array de strings
        source: sourceLang,
        target: targetLang,
        format: "text",
      }),
      headers: { "Content-Type": "application/json" }
    });


    const data = await res.json(); // 👈 array plano de traducciones

    // Aplicamos traducciones en orden
    let j = 0;
    elementos.forEach(el => {
      if (el.innerText.trim().length > 0) {
        el.innerText = data[j]; // 👈 ahora accedemos directo al string
        j++;
      }
    });

  } catch (err) {
    console.error("Error traduciendo:", err);
  }
}

// 🎛️ Eventos de los botones
document.getElementById("por").addEventListener("click", () => {
  traducirPagina("es", "pt"); // español → portugués
});

document.getElementById("esp").addEventListener("click", () => {
  traducirPagina("pt", "es"); // portugués → español
});

document.getElementById("eng").addEventListener("click", () => {
  traducirPagina("es", "en"); // español → inglés
});