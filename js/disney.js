//VERSIÓN CORREGIDA

// Declaración de preguntas
var preguntas = [
    " ¿Cuál de los siguientes personajes no es uno de los Looney Tunes?",
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [

    ["Cerdo Porky",
    "Pato Lucas",
    "Bob Esponja",
    "Sylvester james minino",],

    ]

var puntajePorOpcion = [
    [5, 0, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0],
    [0, 0, 5, 0],
]


// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);

    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    // Determinamos estilo de vida (max = 35)
    if (puntaje > 30) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje > 25) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje > 20) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        estiloVida = "<span id='estilo-regular'>REGULAR</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    } 

    div.innerHTML += <p class='resultado_obtenido'>Has obtenido ${puntaje} puntos,  ${estiloVida}.</p>;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
     puntaje += puntajePorOpcion[i][indice];

    i++
    if (i < preguntas.length) {
       
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];

    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    
}

siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});