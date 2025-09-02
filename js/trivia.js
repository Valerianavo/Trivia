// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria") || "cultura";
const nivel = params.get("nivel") || "1";

// Muestra el título
const tituloTrivia = document.getElementById("tituloTrivia");
tituloTrivia.textContent = `Trivia de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)} - Nivel ${nivel}`;

//  preguntas 
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

//  preguntas por categoría y nivel
const seleccion = preguntas[categoria]?.[nivel] || [];
const contenedor = document.getElementById("contenedorPreguntas");


seleccion.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("pregunta");

  div.innerHTML = `
  <p><strong>${index + 1}. ${q.pregunta}</strong></p>
  ${q.opciones.map(op => `
    <label>
    <input type="radio" name="pregunta${index}" value="${op}">
    ${op}
    </label><br>
    `).join("")}
    `;
    contenedor.appendChild(div);
});
  
document.getElementById("finalizarBtn").addEventListener("click", () => {
  let puntaje = 0;

  seleccion.forEach((q, index) => {
    const respuesta = document.querySelector(`input[name="pregunta${index}"]:checked`);
    if (respuesta && respuesta.value === q.respuesta) {
      puntaje += 4;
    }
  });

  alert(`¡Trivia terminada! Tu puntaje es: ${puntaje}`);
});
