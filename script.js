//Atrapo el nodo del select
const tareaElegida = document.getElementById("tarea")
//Obtenemos el elemento html donde vamos a inyectar el valor
const estadoElegido = document.getElementById("estadoElegido")

//Función de cambio de estado
function cambioEstado(){
    //Agarro el valor de la tarea seleccionada
    const valorTarea = tareaElegida.value;
    estadoElegido.textContent = valorTarea;

    //Darle estilo según la opción elegida
    if(valorTarea === 'Completada'){
        estadoElegido.style.backgroundColor = 'green'
        estadoElegido.style.color = 'white'
    }else if (valorTarea === 'Pendiente'){
        estadoElegido.style.backgroundColor = 'red'
        estadoElegido.style.color = 'white'
    }else{
        estadoElegido.style.backgroundColor = 'yellow'
        estadoElegido.style.color = 'black'
    }
}

//Cambio el estado al oir un cambio en el select
tareaElegida.addEventListener("change",cambioEstado);



