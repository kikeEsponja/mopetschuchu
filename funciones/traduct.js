fetch("https://libretranslate.com/translate", {
  method: "POST",
  body: JSON.stringify({
    q: "Hola mundo",
    source: "es",
    target: "en",
    format: "text"
  }),
  headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(data => console.log(data.translatedText));
