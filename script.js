//Atrapo el nodo del select
const tareaElegida = document.getElementById("tarea")
//Obtenemos el elemento html donde vamos a inyectar el valor
const estadoElegido = document.getElementById("estadoElegido")
//Capturo el p que daré estilo segun el resultado
const estadoElegidoP = document.getElementById("estado")

//Función de cambio de estado
function cambioEstado(){
    //Agarro el valor de la tarea seleccionada
    const valorTarea = tareaElegida.value;
    estadoElegido.textContent = valorTarea;

    //Darle estilo según la opción elegida
    if(valorTarea === 'Completada'){
        estadoElegidoP.style.backgroundColor = 'green'
        estadoElegidoP.style.color = 'white'
    }else if (valorTarea === 'Pendiente'){
        estadoElegidoP.style.backgroundColor = 'red'
        estadoElegidoP.style.color = 'white'
    }else{
        estadoElegidoP.style.backgroundColor = 'yellow'
        estadoElegidoP.style.color = 'black'
    }
}

//Cambio el estado al oir un cambio en el select
tareaElegida.addEventListener("change",cambioEstado);



