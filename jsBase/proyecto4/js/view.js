class ViewModel {

    constructor() {
        //un div por ejemplo donde voy a ir poniendo las tareas que el usuario introduzca
        this.cajaDeTareas = document.getElementById("cajaDeTareas");

        this.boton = document.getElementById("boton");

        //pongo en el input un mensaje
        //this.input.placeholder = "Introduzca su tarea";
    }

    render(datos) {
        //limpio la caja de tareas
        this.cajaDeTareas.innerHTML = '';

        //lista
        const ol = document.createElement('ol');

        for (let i = 0; i < datos.length; i++) {

            const tarea = document.createElement('li');

            //añado a tarea lo que haya en el elemento seleccionado en cada iteracion
            tarea.textContent = i;

            //a la VARIABLE OL le añado LA DE TAREA
            ol.appendChild(tarea);
        };

        //y ahora a la caja de tareas (que es un div) LE AÑADO la OL
        this.cajaDeTareas.appendChild(ol);

        //muestro los datos por pantalla
        console.log(datos);
    }

    //funcion que servirá para eliminar lo que haya escrito en los inputs
    clearInputs() {
        document.getElementById("id").value;
        document.getElementById("descripcion").value;
        document.getElementById("fecha").value;
    }

}