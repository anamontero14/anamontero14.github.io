class CRUDTareas {

    constructor() {
        //array
        this.arrayTareas = [];
        //id
        this.contador = 0;
    }

    //constructor
    nuevaTarea(descripcion) {
        //objeto
        const objetoTarea = { id: ++this.contador, descripcion, fecha: new Date() };

        //añado el objeto
        this.arrayTareas.push(objetoTarea);
        console.log("Tarea: " + objetoTarea);
    }

    //get de todo
    getTareas() {
        return this.arrayTareas;
    }

    getTarea() {

    }

    //añadir la tarea
    setTarea(descripcion) {
        let objetoTarea = {
            id: ++this.contador,
            descripcion: descripcion,
            fecha: new Date()
        };

        //añadir la tarea
        this.arrayTareas.push(objetoTarea);
    }

    /* //get y set del id
     getId() {
         return this.id;
     }
 
     setId(id) {
         if (id && id >= 0) {
             this.id = id;
         } else {
             console.log("Introduzca un id correcto");
         }
     }
 
     //get y set de la descripcion
     getDescripcion() {
         return this.descripcion;
     }
 
     setDescripcion(descripcion) {
         if (descripcion) {
             this.descripcion = descripcion;
         } else {
             console.log("Introduzca una descripción");
         }
     }
 
     //get y set de la fecha
     getFecha() {
         return this.fecha;
     }
 
     setFecha(fecha) {
         if (fecha) {
             this.fecha = fecha;
         } else {
             console.log("Introduzca una fecha correcta");
         }
     }*/

    //método para agregar tareas
    /*addTarea(id, descripcion, fecha) {
        //creo objeto
        objetoTarea = {
            id, descripcion, fecha
        };

        //añado el objetoal array
        this.arrayTareas.push(objetoTarea);
    }*/

    //método para eliminar tareas
    eliminarTarea(id) {
        const index = arrayTareas.findIndex(tarea => tarea.id === id);

        if (index >= 0) {
            arrayTareas.splice(index, 1);
        } else {
            console.log("No se pudo eliminar");
        }
    }

    //actualizar tarea
    actualizarTarea(id, descripcion, fecha) {
        let i = 0;
        do {

        } while (i = id);
    }
}