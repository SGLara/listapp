(function (){
    //variables

    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
        
    //funciones

    var agregarTarea = function() {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

            if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Escribi algo Maje! >:(");
            tareaInput.className = "error";
            return false;
            }

            //añadimos el contenido al enlace
            enlace.appendChild(contenido);
            //le establecemos un atibuto href
            enlace.setAttribute("href", "#");
            //agregamos el enlace (a) a la nueva tarea
            nuevaTarea.appendChild(enlace);
            //agregamos la nueva tarea a la lista
            lista.appendChild(nuevaTarea);

            tareaInput.value = "";

        for (var i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
                 });   
        }
        

    };

    var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eliminarTarea = function() {
        this.parentNode.removeChild(this);
    };


    //AQUI VAN LOS EVENTOS

    btnNuevaTarea.addEventListener("click", agregarTarea);
    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //Borrar tarea
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);   
    }


}());