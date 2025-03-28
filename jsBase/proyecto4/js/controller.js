class Controller {

    constructor() {
        this.model = new CRUDTareas;
        this.view = new ViewModel;

        //llamo al botón
        this.view.boton.addEventListener('click', () => this.añadirDatos());

        this.actualizarVista();
    }

    añadirDatos() {
        //lo mismo con la descripción
        const descripcionInput = document.getElementById("descripcion");
        const descripcion = descripcionInput.value.trim();

        //si el id, la descripcion y la fecha NO están vacíos
        if (descripcion) {

            //llama al método del modelo "nuevaTarea" y le pasa los parametros
            this.model.nuevaTarea(descripcion);

            //una vez creado el objeto llamo al render de la vista y le paso como parámetro lo 
            //que obtenga del método "getTareas" del modelo
            this.actualizarVista();

            //llamo al método de vista que sirve para eliminar el contenido de los inputs
            this.view.clearInputs();
        } else {
            console.log("Debe rellenar todos los campos");
        }

    }

    //método para llamar al render de la vista
    actualizarVista() {
        this.view.render(this.model.getTareas());
    }

}