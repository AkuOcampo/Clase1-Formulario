//Atrapo el nodo del select
const tareaElegida = document.getElementById("tarea")
//Obtenemos el elemento html donde vamos a inyectar el valor
const estadoElegido = document.getElementById("estadoElegido")

//Función de cambio de estado
function cambioEstado(){
    //Agarro el valor de la tarea seleccionada
    const valorTarea = tareaElegida.value;
    estadoElegido.textContent = valorTarea;
}

//Cambio el estado al oir un cambio en el select
tareaElegida.addEventListener("change",cambioEstado);


// tareaElegida.addEventListener("change",function(){
//     estadoElegido.textContent= valorTarea;
// })
