// VISTA

class EjercicioView {
    constructor() {
        this.addLista = document.getElementById('addDatos');
        this.cuerpoTabla = document.getElementById('cuerpoTabla');
    }

    // Mostrar la lista de tareas
    render(datos) {
        this.cuerpoTabla.innerHTML = '';
        datos.forEach((datos) => {
            const tr = document.createElement('tr');
            const tdNombre = document.createElement('td');
            const tdApellidos = document.createElement('td');
            const tdEdad = document.createElement('td');
            
            tdNombre.textContent = datos.nombre;
            tdApellidos.textContent = datos.apellidos;
            tdEdad.textContent = datos.edad;

            /*const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                this.onDeletenombre(index);
            });*/

            tr.appendChild(tdNombre);
            tr.appendChild(tdApellidos);
            tr.appendChild(tdEdad);
            this.cuerpoTabla.appendChild(tr);
        });
        console.log(datos);
    }

    clearInputs() {
        document.getElementById("nombre").value;
        document.getElementById("apellidos").value;
        document.getElementById("edad").value;
    }

    // Método para manejar el evento de eliminar tarea
    /*bindDeleteTask(handler) {
        this.onDeleteTask = handler;
    }*/

    // Método para manejar el evento de añadir tarea
    /*bindAddLista(handler) {
        this.addLista.addEventListener('click', handler);
    }*/

}