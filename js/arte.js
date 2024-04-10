//VERSION CORREGIDA

// Declaracion de preguntas
var preguntas = [
    "¿Quien pinto La ultima cena?"<br>

    "En que museo se enecuentra la obra original La noche Estrellada, de Van Gogh"<br>

    "¿En que año se pinto la Noche Estrellada "<br>

    "¿Quien pinto la obra Diego y yo"
] 
// Declaracion de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas. 

var opciones = [
    ["Vicent Van Gogh", 
    "Pablo Piccaso", "Leonardo Da Vinci",
    "Salvador Dali"]
    ["Museo de arte Moderno de ANueva York", 
     "Museo Picasso de Barcelona",
    "Museo de arte Italiano",
     "Museo de Hermitage"]
    ["1894", "1870", "1889", "1880"]
    ["Frida Kahlo", "Diego Rivera", "Jose Clemente Orozco",
    "Jose Maria Velasco Gomez"]
               ]

var puntajePorOpcion = [
    [5, 0, 0, 0],
    [5, 0, 0, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 0]
   //15 0  5  0
                       ]

// Aca se define el despliegue de las preguntas y se almacenan los puntajes 
var puntaje = 0;
var i = 3;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueve los hijos del div con clase "card", dentro de el agregamos los resultados
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);
    
    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
}