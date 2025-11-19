// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria") || "cultura";
const nivel = params.get("nivel") || "1";

// Mostrar título dinámico
const tituloTrivia = document.getElementById("tituloTrivia");
tituloTrivia.textContent = `Trivia de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)} - Nivel ${nivel}`;

// Base de preguntas
const preguntas = {
  cultura: {
    1: [
      { pregunta: "¿Cuál es la danza típica de Puno?", opciones: ["Marinera", "Diablada", "Huayno"], respuesta: "Diablada" },
      { pregunta: "¿En qué ciudad se celebra la fiesta de la Virgen de la Candelaria?", opciones: ["Cusco", "Puno", "Arequipa"], respuesta: "Puno" }
    ],
    2: [
      { pregunta: "¿Qué instrumento andino es similar a una flauta?", opciones: ["Charango", "Quena", "Cajón"], respuesta: "Quena" }
    ],
    3: [
      { pregunta: "¿Cuál es el plato típico de la selva peruana?", opciones: ["Tacacho con cecina", "Ceviche", "Pachamanca"], respuesta: "Tacacho con cecina" }
    ]
  },
  historia: {
    1: [
      { pregunta: "¿Quién fue el último Inca?", opciones: ["Atahualpa", "Pachacútec", "Manco Inca"], respuesta: "Atahualpa" }
    ],
    2: [
      { pregunta: "¿En qué año llegó Francisco Pizarro al Perú?", opciones: ["1532", "1492", "1821"], respuesta: "1532" }
    ],
    3: [
      { pregunta: "¿Qué civilización construyó las Líneas de Nazca?", opciones: ["Nazca", "Moche", "Inca"], respuesta: "Nazca" }
    ]
  }
};

// Selección actual de preguntas
const seleccion = preguntas[categoria]?.[nivel] || [];
let indice = 0;
let puntaje = 0;

const contenedor = document.getElementById("contenedorPreguntas");
const btnSiguiente = document.getElementById("siguienteBtn");
const btnFinalizar = document.getElementById("finalizarBtn");

// Función para renderizar una pregunta
function mostrarPregunta() {
  const q = seleccion[indice];
  contenedor.innerHTML = `
    <div class="pregunta">
      <p class="pPregunta"><strong>${indice + 1}. ${q.pregunta}</strong></p>
      ${q.opciones.map(op => `
        <label class="opcion">
          <input type="radio" name="pregunta" value="${op}">
          ${op}
        </label>
      `).join("")}
    </div>
  `;

  // Mostrar/ocultar botones según estado
  btnSiguiente.style.display = indice < seleccion.length - 1 ? "inline-block" : "none";
  btnFinalizar.style.display = indice === seleccion.length - 1 ? "inline-block" : "none";
}

// Validar respuesta seleccionada
function validarRespuesta() {
  const respuesta = document.querySelector('input[name="pregunta"]:checked');
  if (!respuesta) {
    alert("Selecciona una opción antes de continuar ⏩");
    return false;
  }
  if (respuesta.value === seleccion[indice].respuesta) {
    puntaje += 4;
  }
  return true;
}

// Evento siguiente
btnSiguiente.addEventListener("click", () => {
  if (!validarRespuesta()) return;
  indice++;
  mostrarPregunta();
});

// Evento finalizar
btnFinalizar.addEventListener("click", () => {
  if (!validarRespuesta()) return;

  contenedor.innerHTML = `
    <h3 class="resultado_titulo">¡Fin del juego!</h3>
    <p>Tu puntaje final es: <strong>${puntaje}</strong> puntos</p>
    <progress value="${puntaje}" max="${seleccion.length * 4}"></progress>
    <br><br>
    <a class="boton" href="niveles.html?categoria=${categoria}">Jugar de nuevo</a>
    <a class="boton" href="categorias.html">Ir al menu</a>
  `;
  btnSiguiente.style.display = "none";
  btnFinalizar.style.display = "none";
});

// Mostrar primera pregunta
mostrarPregunta();
