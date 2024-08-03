var pregunta = [
    '¿Cuál es la civilización más antigua del Perú?',
    '¿Cómo se llamaban los hijos de Micaela Bastidas y Jose Gabriel Condorcanqui?',
    '¿Qué batalla significó la independencia de Perú?',
    '¿A quién se le conoce como “Caballero de los Mares”?',
    '¿Quién dijo la frase “Tengo deberes sagrados que cumplir y los cumpliré hasta quemar el último cartucho”?'
];

var opciones = [
    ['Caral',
    'Mochica',
    'Chavin',
    'Paracas'],
    ['Maria, Marisol y Fernanda',
    'Henry, Luisa y Jose',
    'Hipólito, Mariano y Fernando',
    'Mariano, Fernanda y Luisa'],
    ['Batalla de San Lorenzo,1821',
    'Batalla de Junín, 1924',
    'Batalla de Lima, 1834',
    'Batalla de Ayacucho, 1824'],
    ['Miguel Grau',
    'Ramón Castilla',
    'Rufino Echenique',
    'San Martin de Porres'],
    ['Jose Abelardo Quiñones',
    'Francisco Bolognesi',
    'Jose Luis Bustamante',
    'Ramon Castilla']
];


var puntajePorOpcion = [
    [4,0,0,0],
    [0,0,4,0],
    [0,0,0,4],
    [4,0,0,0],
    [0,4,0,0]
];

var puntaje = 0;
var i = 0;

function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra_progreso").value = i * 100 / (pregunta.length - 1);
    div.innerHTML += "<h3 class='resultado_titulo'>¡Fin del juego! Puntaje final:</h3>"
    div.innerHTML += `<p>Tu puntaje es de ${puntaje} puntos</p>`
    div.innerHTML += "<a class='botonvolve' href='segundo.html'>Jugar de nuevo</a>"
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

