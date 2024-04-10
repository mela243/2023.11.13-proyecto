//VERSIÓN CORREGIDA

// Declaración de preguntas
var preguntas = [
    "¿Con qué frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200mL) bebes al día?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?",
    "¿Cuándo fue la última vez que fuiste al médico y/o te realizaste un chequeo general?<br>No consideres visitas por situaciones muy específicas en las que no se revisó tu estado general de salud ni siquiera de manera visual, como por ejemplo en caso de una lesión.",
    "Piensa en lo que sueles comer día a día. ¿Qué tipo de alimentos es el más frecuente en tu dieta?",
    "¿Existen antecedentes de enfermedades crónicas en tu familia?.<br>Se considera como enfermedad crónica aquella que dura 3 ó más meses y que, posiblemente, empeore con el tiempo. Ejemplos: cáncer, diabetes, hipertensión, cardiopatías, accidentes cerebrovasculares.",
    "En general, consideras que tu salud es:"
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["3 ó más veces por semana",
    "Entre 1 y 2 veces a la semana",
    "Al menos 4 veces al mes",
    "2 a 3 veces al mes",
    "1 vez al mes ó menos"],
    ["Al menos 8 vasos al día",
    "Entre 5 y 8, depende del día",
    "Cuando me acuerdo",
    "Solo si tengo sed",
    "No me gusta el agua, prefiero la gaseosa"],
    ["5 ó más",
    "2 a 4",
    "Al menos 1 vez al día",
    "Depende del día",
    "Solo si me obligan"],
    ["Hace menos de un mes",
    "Entre 1 y 3 meses atrás",
    "Estoy segura que fui al menos una vez en los últimos 12 meses",
    "Solo voy si hay algún hueso expuesto",
    "Nunca me enfermo, no necesito ir al médico"],
    ["Harinas y cereales",
    "Proteína de origen animal (carnes rojas, blancas o pescado)",
    "Aceites y grasas",
    "Ensaladas de verduras y/o frutas",
    "Proteínas de origen vegetal (legumbres)"],
    ["Sí, ambos padres padecen enfermedades crónicas",
    "Sí, uno de mis padres padece de una o más enfermedades crónicas",
    "Sí, al menos uno de mis hermanos",
    "Sí, pero es un tío y/o abuelo",
    "No que yo sepa"],
    ["Excelente, no recuerdo la última vez que tuve un resfrío",
    "Buena, no suelo enfermarme más de una vez al año y es de manera leve",
    "Buena, tengo alguna(s) enfermedad(es) crónica(s) pero está(n) controlada(s)",
    "Regular, me refrío siempre y/o tengo descompensaciones ocasionales de enfermedades crónicas",
    "Mala, paso resfriada, con crisis de enfermedades crónicas y/o lesionada"]
    ]

var puntajePorOpcion = [
    [5, 4, 3, 1, 0],
    [5, 4, 2, 1, 0],
    [5, 4, 3, 1, 0],
    [5, 4, 3, 1, 0],
    [1, 4, 0, 3, 5],
    [1, 2, 2, 3, 5],
    [5, 4, 4, 2, 0]
  //27 22 17 12 10
  //22 22 14 11 10   
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


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu estilo de vida es ${estiloVida}.</p>`;
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

