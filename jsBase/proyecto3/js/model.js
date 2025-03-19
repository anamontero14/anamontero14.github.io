// MODELO

class EjercicioModel {

    constructor() {
        this.datos = [];
    }

    // Añadir un nombre
    addLista(nombre, apellidos, edad) {
        //datos en array
        this.datos.push({nombre, apellidos, edad});
    }

    // Obtener todos los nombres
    getLista() {
        return this.datos;
    }

    // Eliminar una tarea por su índice
    /*deleteTask(index) {
        this.tasks.splice(index, 1);
    }*/
}
