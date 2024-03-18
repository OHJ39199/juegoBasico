//funcion seleccion de personaje y ocultar los no seleccionados
function select(tipo) {
   switch (tipo) {
       case "caballero":
           mostrarJuego("caballero");
           ocultarNoSeleccionados(["elfo", "mago"]);
           break;
       case "elfo":
           mostrarJuego("elfo");
           ocultarNoSeleccionados(["caballero", "mago"]);
           break;
       case "mago":
           mostrarJuego("mago");
           ocultarNoSeleccionados(["caballero", "elfo"]);
           break;
   }

}
function mostrarJuego(tipo) {

    //ocultar titulos de comienzo
    document.getElementById("tituloInicio").style.display = "none";
    document.getElementById("tituloSeleccion").style.display = "none";
    document.getElementById("tituloExplicacion").style.display = "none";

    document.getElementById("infoCaballero").style.display = "none";
    document.getElementById("infoElfo").style.display = "none";
    document.getElementById("infoMago").style.display = "none";


    let preguntas, titulo;

    //las tres opciones de juego
    switch (tipo) {
        case "mago":
            const magoPregunta = generarPreguntasMago();
            preguntaMago = magoPregunta.pregunta;
            respuestaCorrectaMago = magoPregunta.respuestaCorrecta.toLowerCase();
            titulo = "acertijos";
            preguntas = preguntaMago;
            break;
        case "elfo":
            const elfoPregunta = generarSumaElfo();
            preguntaElfo = elfoPregunta.pregunta;
            respuestaCorrectaElfo = elfoPregunta.respuestaCorrecta.toString().toLowerCase();
            titulo = "Sumas";
            preguntas = preguntaElfo;
            break;
        case "caballero":
            const caballeroPregunta = generarPalabraCaballero();
            preguntaCaballero = caballeroPregunta.pregunta;
            respuestaCorrectaCaballero = caballeroPregunta.respuestaCorrecta;
            titulo = "Letras Desaparecidas";
            preguntas = preguntaCaballero;
            break;

    }

    //html  basico para inicio juego
    let comienzo = ` 
    <div class="container mt-5">    
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-center">${titulo}</h2>
                <hr>
                <div id="preguntas" class="text-center">${preguntas}</div>
                <input type="text" id="respuesta" class="form-control mt-3" placeholder="introduce tu respuesta">
                <button onclick="comprobarRespuesta('${tipo}')" class="btn btn-info mt-3">comprobar</button>
                <button onclick="mostrarJuego('${tipo}')" class="btn btn-warning mt-3">Siguiente</button>
                <div id="comprobacion" class="mt-3"></div>
                <div>respuestas acertadas</div> 
                <div id="contadorRespuestasCorrectas">${contadorRespuestasCorrectas}</div>
            </div>
        </div>
    </div>
    `;
    //boton para salir del juego
    let botonAbandono =`
        <button class="btn btn-primary mt-2 text-center" onClick="recargarPaginaPrincipal()">Abandonar el juego en curso.</button>
    `;

    document.getElementById("inicioJuego").innerHTML = comienzo;

    //he intentado agregarlo con un getElementByClassName pero no se mostraba por igual en todas
    document.getElementById("salidaCaballero").innerHTML = botonAbandono;
    document.getElementById("salidaElfo").innerHTML = botonAbandono;
    document.getElementById("salidaMago").innerHTML = botonAbandono;
}


function ocultarNoSeleccionados(juegos) {
    //el foreach recorrera todos los tipos de juego y ocultara los no seleccionados
    juegos.forEach(juego => {
        document.getElementById(`inicioJuego_${juego}`).style.display = "none";
    });
}

function generarPalabraCaballero() {
    // Lista de palabras
    const palabrasCaballero = [
        {
            pregunta: "E_CU_O",
            respuesta: "escudo"
        },
        {
            pregunta: "E_P_DA",
            respuesta: "espada"
        },
        {
            pregunta: "M_RCI_LA_O",
            respuesta: "murcielago"
        },
        {
            pregunta: "P_ED_A",
            respuesta: "piedra"
        },
        {
            pregunta: "PE_O_A",
            respuesta: "pelota"
        },
        {
            pregunta: "_US_NO",
            respuesta: "gusano"
        },
        {
            pregunta: "CA_C_",
            respuesta: "casco"
        },
        {
            pregunta: "S_M_RERO",
            respuesta: "sombrero"
        },
        {
            pregunta: "_ER_O",
            respuesta: "perro"
        },
        {
            pregunta: "B_ST_N",
            respuesta: "baston"
        }
    ];

    // palabra aleatoria
    const indiceAleatorio = Math.floor(Math.random() * palabrasCaballero.length);
    let palabraAleatoria = palabrasCaballero[indiceAleatorio];
    return {pregunta:palabraAleatoria.pregunta, respuestaCorrecta: palabraAleatoria.respuesta};
}

//sumas para el elfo
function generarSumaElfo() {
    // Generar dos números aleatorios
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    //html
    let pregunta = `<h4>¿Cuánto es ${num1} + ${num2}?</h4>`;
    //inicializacion comprobacion respuesta
    let respuestaCorrecta = num1 + num2;

    return { pregunta, respuestaCorrecta };
}

//preguntas Mago
function generarPreguntasMago(){

    //acertijos
    let preguntasMago = [
        {
            pregunta: "De qué color es el caballo blanco de Santiago?",
            respuesta: "blanco"
        },
        {
            pregunta: "Qué es blanco por dentro y verde por fuera? si quieres que te lo diga espera",
            respuesta: "pera"
        },
        {
            pregunta: "vuelo sin alas, corro sin pies, que soy? ",
            respuesta: "tiempo"
        },
        {
            pregunta: "Tengo ojos pero no puedo ver, tengo un lecho pero no puedo dormir, ¿qué soy? ",
            respuesta: "rio"
        },
        {
            pregunta: "Doy vueltas y más vueltas, pero no me muevo del sitio ¿qué soy? ",
            respuesta: "reloj"
        },
        {
            pregunta: "Oro no es, plata no es, qué es?",
            respuesta: "platano"
        }
    ];
    const indiceAleatorio = Math.floor(Math.random() * preguntasMago.length);
    let preguntaAleatoria = preguntasMago[indiceAleatorio];
    //html
    let htmlMago = `
    <div class="pregunta">
        <h4>${preguntaAleatoria.pregunta}</h4>
    </div>
    `;
    return { pregunta: htmlMago, respuestaCorrecta: preguntaAleatoria.respuesta };
}

function recargarPaginaPrincipal() {
    location.reload();
}

//inicializacion del contador de respuestas
let contadorRespuestasCorrectas=0;

//comprobacion de respuestas
function comprobarRespuesta(tipo) {
    const respuesta = document.getElementById("respuesta").value.trim().toLowerCase();
    let respuestaCorrecta;
    let comprobacion = document.getElementById("comprobacion");

    switch (tipo) {
        case "mago":
            respuestaCorrecta = respuestaCorrectaMago;
            break;
        case "elfo":
            respuestaCorrecta = respuestaCorrectaElfo;
            break;
        case "caballero":
            respuestaCorrecta = respuestaCorrectaCaballero;
            break;
    }

    //mesages correcto, incremento y finalizacion
    if (respuesta === respuestaCorrecta) {
        comprobacion.innerHTML = "<p class='text-White text-bg-success'>Correcto!</p>";
        contadorRespuestasCorrectas++;
        document.getElementById("contadorRespuestasCorrectas").textContent = contadorRespuestasCorrectas;

        if (contadorRespuestasCorrectas === 10) {
            alert("¡Enhorabuena! Has alcanzado 10 respuestas correctas.");
            recargarPaginaPrincipal();
        }
    //mensages de incorrecto, decremento y finalizacion
    } else {
        comprobacion.innerHTML = "<p class='text-white text-bg-danger'>Incorrecto. intentalo de nuevo!</p>";
        contadorRespuestasCorrectas--;
        document.getElementById("contadorRespuestasCorrectas").textContent = contadorRespuestasCorrectas;

        if (contadorRespuestasCorrectas === -10) {
            alert("¡OOOHHH NOOOO! Has fallado 10 respuestas necesitas practicar.");
            recargarPaginaPrincipal();
        }
    }
}
