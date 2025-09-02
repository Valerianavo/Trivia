// Obtenemos la categoría de la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria") || "cultura";

// Cambiar título según la categoría
const tituloCategoria = document.getElementById("tituloCategoria");
tituloCategoria.textContent = "Trivia de " + categoria.charAt(0).toUpperCase() + categoria.slice(1);

// Asignar redirecciones dinámicas a los botones
document.getElementById("facil").href = `trivia.html?categoria=${categoria}&nivel=1`;
document.getElementById("intermedio").href = `trivia.html?categoria=${categoria}&nivel=2`;
document.getElementById("dificil").href = `trivia.html?categoria=${categoria}&nivel=3`;