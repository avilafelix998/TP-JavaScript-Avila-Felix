let tasks = [];
// Mostrar el menú
function mostrarMenu() {
    return prompt(
        "Seleccione una opción:\n" +
        "1. Agregar tarea\n" +
        "2. Listar tareas\n" +
        "3. Editar tarea\n" +
        "4. Eliminar tarea\n" +
        "5. Salir"
    );
}

// Agregar una tarea
function agregarTarea(tasks) {
    let nuevaTarea = prompt("Ingrese la tarea que desea agregar:").trim();
    
    if (nuevaTarea === "" || nuevaTarea.length === 0) {
        console.error("Error: El nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
        return;
    }
    
    tasks.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
}

// Listar todas las tareas
function listarTareas(tasks) {
    if (tasks.length === 0) {
        console.log("No hay tareas para mostrar.");
    } else {
        console.log("Lista de tareas:");
        tasks.forEach((tarea, index) => {
            console.log(${index + 1}. ${tarea});
        });
    }
}

// Editar una tarea
function editarTarea(tasks) {
    let tareaOriginal = prompt("Ingrese el nombre de la tarea que desea editar:").trim();
    let index = tasks.indexOf(tareaOriginal);
    
    if (index === -1) {
        console.error("Error: La tarea no se encuentra en la lista.");
        return;
    }
    
    let nuevaTarea = prompt("Ingrese el nuevo nombre de la tarea:").trim();
    
    if (nuevaTarea === "" || nuevaTarea.length === 0) {
        console.error("Error: El nuevo nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
        return;
    }
    
    tasks[index] = nuevaTarea;
    console.log("Tarea editada:", nuevaTarea);
}

// Eliminar una tarea
function eliminarTarea(tasks) {
    let tareaEliminar = prompt("Ingrese el nombre de la tarea que desea eliminar:").trim();
    let index = tasks.indexOf(tareaEliminar);
    
    if (index === -1) {
        console.error("Error: La tarea no se encuentra en la lista.");
        return;
    }
    
    tasks.splice(index, 1);
    console.log("Tarea eliminada:", tareaEliminar);
}

// Función principal
function main() {
    let opcion;
    
    do {
        opcion = mostrarMenu();





        
        switch(opcion) {
            case '1':
                agregarTarea(tasks);
                break;
            case '2':
                listarTareas(tasks);
                break;
            case '3':
                editarTarea(tasks);
                break;
            case '4':
                eliminarTarea(tasks);
                break;
            case '5':
                console.log("Saliendo del programa.");
                break;
            default:
                console.error("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
                break;
        }
    } while (opcion !== '5');
}

main();


