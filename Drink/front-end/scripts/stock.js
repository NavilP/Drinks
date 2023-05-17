//Recuperar el boton para añadir eventos
const addEventBtn = document.querySelector(".new-ingredient");

//Recuperar la seccion para añadir eventos
const addIngredContainer = document.querySelector(".add-new-ingredient");

//Recuperar el boton para salir
const closeBtn = document.querySelector(".close");

//Recuperar el nombre del solicitante
const addIngredientName = document.querySelector(".ingredient-name");

//Recuperar la clase o carrera
const addIngredientCategory = document.querySelector(".ingredient-category");


//Recuperar la clase o carrera
const addIngredientPrice= document.querySelector(".ingredient-price");

// Recuperar el boton para hacer una nueva reservacion
const addEventSubmit = document.querySelector(".add-event-btn");

//Agregar funcionalidad para abrir y cerrar la ventana
//Abrir la ventana
function open() {
    addIngredContainer.classList.toggle("active-n");
}

addEventBtn.addEventListener("click", open);

//Cerrar la ventana
function close() {
    console.log('Cerrado');
    const requeridos = document.querySelector("#errorMensaje");
    const error = document.querySelector("#error-title");
    const errorContainer = document.querySelector("#error");

    addIngredientName.value = '';
    addIngredientCategory.value = '';
    addIngredientPrice.value = '';

    if (!requeridos.classList.contains('hide-message')) {
        requeridos.classList.add('hide-message');
        error.classList.add('hide-message');
        errorContainer.classList.add('hide-message');
    }
    addEventSubmit.classList.remove("send-error");
    addIngredContainer.classList.remove("active-n");
}

closeBtn.addEventListener("click", close);
