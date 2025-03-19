// CONTROLADOR

class EjercicioController {
    constructor() {
        this.model = new EjercicioModel;
        this.view = new EjercicioView;

        this.view.addLista.addEventListener('click', () => this.addDatos());

        this.updateView();
    }

    addDatos() {
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos");
        const edad = document.getElementById("edad");

        // Asegurarse de que los valores no estén vacíos
        if (nombre && apellidos && edad) {
            this.model.addLista(nombre, apellidos, edad);
            this.view.render(this.model.getLista());
            this.view.clearInputs();  // Limpiar los inputs después de agregar
        } else {
            alert("Por favor, rellene todos los campos.");
        }
    }
    
    // Actualizar la vista con las tareas actuales
    updateView() {
        this.view.render(this.model.getLista());
    }
}