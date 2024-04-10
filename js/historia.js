// Declaración de preguntas
var preguntas = [
    "¿Cuándo acabó la II Guerra Mundial?","¿Quiénes fundaron a Roma?",
    "¿Cuánto duró “La Guerra de los Cien Años?", 
    "¿En qué continente surgió la Humanidad?"
     ];
    
    //Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
    // corresponde a las posibles respuestas de una pregunta.
    // Se mantiene el orden de la lista de preguntas.
    
    var opciones = [
    ["En 2006","En 1945","En 1970","En 1950 "],
    ["Aquiles y Odiseo","Alejandro Magno y Ptolomeo",
    "Rómulo y Remo","Hércules y Poseidon"],
    ["100 años","200 años","116 años","102 años"],
    ["En Asia","En Europa","En África","En Ocenía"]
    ]
    
    var puntajePorOpción = [
        [0,5,1,3],
        [3,1,5,0],
        [0,1,5,3],
        [3,1,5,0]    
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
    
        // Determinamos estilo de vida (max = 20)
        if (puntaje > 20) {
            historia = "<span id='estilo-excelente'>EXCELENTE</span>";
        } else if (puntaje > 18) {
            historia = "<span id='estilo-bueno'>BUENO</span>";
        } else if (puntaje > 14) {
            historia = "<span id='estilo-aceptable'>ACEPTABLE</span>";
        } else if (puntaje > 10) {
            historia = "<span id='estilo-regular'>REGULAR</span>";
        } else {
            historia = "<span id='estilo-malo'>MALO</span>";
        }
    
    
        div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual muestra cuanto sabes de historia ${historia}.</p>`;
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