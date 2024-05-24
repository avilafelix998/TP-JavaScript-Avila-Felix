let tasks = []
//mostrar el menú 
function mostrarMenu(params) {
    return prompt (
        "seleccione una opción:/n" +
        "1. Agregar tarea/n" +
        "3. Editar tarea/n" +
        "4. Eliminar tarea/n" + 
        "5. Salir"

    )
}
//Agregar una tarea 
function agregarTarea(tasks) {
    let nuevaTarea = prompt("Ingrese la tarea que desea agregar:").trim();
    if (nuevaTarea ==="" || nuevaTarea.length === 0 ) {
        console.log("Error: el nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final");
        return;
    }
    tasks.push(nuevaTarea);
    console.log("tarea agregada:", nuevaTarea)
}
//listar todas las tareas
function listarTareas(tasks) {
    if (tasks.length === 0) {
        console.log("No hay tareas para mostrar.");
    } else {
        console.log("Lista de tareas:");
        for (let i = 0; i < tasks.length; i++) {
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}