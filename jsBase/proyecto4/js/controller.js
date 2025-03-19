class Controller {

    constructor() {
        this.model = new Tareas;
        this.view = new ViewModel;

        //llamo al botón
        this.view.boton.addEventListener('click', () => this.añadirDatos());

        this.actualizarVista();
    }

    añadirDatos() {
        //creo una variable que tenga el elemento que tenga de id "id"
        const id = document.getElementById("id");
        //lo mismo con la descripción
        const descripcion = document.getElementById("descripcion");
        //y lo mismo con la fecha
        const fecha = document.getElementById("fecha");

        //si el id, la descripcion y la fecha NO están vacíos
        if (descripcion) {

            //llama al método del modelo "nuevaTarea" y le pasa los parametros
            this.model.nuevaTrea(id, descripcion, fecha);

            //una vez creado el objeto llamo al render de la vista y le paso como parámetro lo 
            //que obtenga del método "getTareas" del modelo
            this.view.render(this.model.getTareas);

            //llamo al método de vista que sirve para eliminar el contenido de los inputs
            this.view.clearInputs();

            //llamo al render de la vista
            this.actualizarVista();
        } else {
            console.log("Debe rellenar todos los campos");
        }

    }

    //método para llamar al render de la vista
    actualizarVista() {
        this.view.render(this.model.getTareas);
    }

}