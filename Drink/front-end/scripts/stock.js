//Recuperar el boton para añadir ingrediente
const addEventBtn = document.querySelector(".new-ingredient");

//Recuperar la seccion para añadir ingrediente
const addIngredContainer = document.querySelector(".add-new-ingredient");

//Recuperar el boton para salir
const closeBtn = document.querySelector(".close");

//Recuperar el nombre del ingrediente
const addIngredientName = document.querySelector(".ingredient-name");

//Recuperar la categoria
const addIngredientCategory = document.querySelector(".ingredient-category");

//Recuperar el precio
const addIngredientPrice= document.querySelector(".ingredient-price");

// Recuperar el boton para guardar los cambios
const addEventSubmit = document.querySelector(".add-event-btn");

// Recuperar el fondo negro
const shape = document.querySelector('.shape');

//Agregar funcionalidad para abrir y cerrar la ventana
//Abrir la ventana
function open() {
    addIngredContainer.classList.toggle("active-n");
    shape.classList.remove('hide');
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
    shape.classList.add('hide');
}

closeBtn.addEventListener("click", close);
