var pregunta = [
    '¿Cuál es la ciudadela inca más famosa de Perú, conocida como una de las Nuevas Siete Maravillas del Mundo?',
    '¿En qué región del Perú se originó el plato conocido como "pachamanca"?',
    '¿Cuál es la festividad que se celebra el 24 de junio en Cusco en honor al dios Sol?',
    '¿Qué escritor peruano ganó el Premio Nobel de Literatura en 2010?',
    '¿Cuál es la lengua indígena más hablada en Perú después del español?',
    '¿Qué importante líder indígena fue conocido como el "último inca"?',
    '¿Quién fue el primer presidente de Perú tras su independencia de España en 1821?',
    '¿Qué famoso museo peruano alberga una de las colecciones más grandes de arte precolombino en el mundo?',
    '¿En qué región de Perú se encuentran los geoglifos de Palpa, que también forman parte del Patrimonio de la Humanidad por la UNESCO?',
    '¿Qué importante santuario histórico en el departamento de Lima fue sede de una de las batallas más significativas en la independencia del Perú?'
];

var opciones = [
    ['Chan Chan',
    'Kuelap',
    'Machu Picchu',
    'Sacsayhuamán'],
    ['Costa',
    'Sierra',
    'Selva',
    'Amazonia'],
    ['Fiesta de la Virgen de la Candelaria',
    'Carnaval',
    'Inti Raymi',
    'Día de Todos los Santos'],
    ['César Vallejo',
    'Alfredo Bryce Echenique',
    'José María Arguedas',
    'Mario Vargas Llosa'],
    ['Aimara',
    'Quechua',
    'Asháninka',
    'Shipibo-Konibo'],
    ['Túpac Amaru',
    'Jose Gabriel Condorcanqui',
    'Túpac Amaru II',
    'Francisco Amaru'],
    ['Nicolás de Piérola',
    'José de la Riva-Agüero y Sánchez Boquete',
    'Augusto Leguía',
    'Ramón Castilla'],
    ['El Museo Larco en Lima',
    'Museo Nacional de la Cultura Peruana',
    'Museo de Arte de Lima',
    'Museo Oro del Peru'],
    ['Paracas',
    'Nazca',
    'Arequipa',
    'Ica'],
    ['Santuario Histórico de Chacamarca',
    'El Santuario de Pachacámac',
    'Santuario Nacional Cordillera de Colán',
    'Santuario Nacional Los Manglares de Tumbes']
];

var puntajePorOpcion = [
    [0,0,2,0],
    [0,2,0,0],
    [0,0,2,0],
    [0,0,0,2],
    [0,2,0,0],
    [0,0,2,0],
    [0,2,0,0],
    [2,0,0,0],
    [0,0,0,2],
    [0,2,0,0],
];

var puntaje = 0;
var i = 0;

function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra_progreso").value = i * 100 / (pregunta.length - 1);
    div.innerHTML += '<h3 class="resultado_titulo">¡Fin del juego! Puntaje final:</h3>'
    div.innerHTML += `<p> ${puntaje} puntos</p>`
    div.innerHTML += '<a class="botonvolve" href="segundo.html">Jugar de nuevo</a>'
    div.innerHTML += '<a class="botonvolve" href="primero.html">Volver al inicio</a>'
}


function actualizarPuntaje(opcion) { 
    var indice = opcion - 1; 
    puntaje = puntaje + puntajePorOpcion[i][indice];
    i = i + 1; 
    if (i < pregunta.length) {
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = pregunta[i]; 
    console.log(opciones[0][0]);
    document.getElementById("op1").innerHTML = opciones[i][0]; 
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];
    document.getElementById("op6").innerHTML = opciones[i][5];
    document.getElementById("op7").innerHTML = opciones[i][6];
    document.getElementById("op8").innerHTML = opciones[i][7];
    document.getElementById("op9").innerHTML = opciones[i][8];
    document.getElementById("op10").innerHTML = opciones[i][9];
    document.getElementById("barra_progreso").value = i * 100 / pregunta.length;
}

siguientePregunta();

document.getElementById("op1").addEventListener("click", function() {
    actualizarPuntaje(1);
})
document.getElementById("op2").addEventListener("click", function() {
    actualizarPuntaje(2);
})
document.getElementById("op3").addEventListener("click", function() {
    actualizarPuntaje(3);
})
document.getElementById("op4").addEventListener("click", function() {
    actualizarPuntaje(4)
})
document.getElementById("op5").addEventListener("click", function() {
    actualizarPuntaje(5)
})
document.getElementById("op6").addEventListener("click", function() {
    actualizarPuntaje(6)
})
document.getElementById("op7").addEventListener("click", function() {
    actualizarPuntaje(7)
})
document.getElementById("op8").addEventListener("click", function() {
    actualizarPuntaje(8)
})
document.getElementById("op9").addEventListener("click", function() {
    actualizarPuntaje(9)
})
document.getElementById("op10").addEventListener("click", function() {
    actualizarPuntaje(10)
})
