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

//Recuperar el precio
const addIngredientItems= document.querySelector(".ingredient-items");

// Recuperar el boton para guardar los cambios
const addEventSubmit = document.querySelector(".add-event-btn");

// Recuperar el fondo negro
const shape = document.querySelector('.shape');

//Agregar funcionalidad para abrir y cerrar la ventana
//Abrir la ventana
function open() {
    addIngredContainer.classList.toggle("active-n");
    shape.classList.remove('hide');
    const bgnd = document.querySelector('body');
    addEventBtn.removeEventListener('click', open);
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
    addEventBtn.addEventListener("click", open);
}

closeBtn.addEventListener("click", close);

// Arreglo provisional
const INGREDIENTES = [
    {
        ingrediente: 'fresas',
        categoria: 'Frutas',
        precio: 5,
        cantidad: 10
    },
    {
        ingrediente: 'nueces',
        categoria: 'Topping',
        precio: 5,
        cantidad: 0
    },
    {
        ingrediente: 'crema batida',
        categoria: 'Frutas',
        precio: 5,
        cantidad: 0
    },
    {
        ingrediente: 'fresas',
        categoria: 'Frutas',
        precio: 5,
        cantidad: 10
    },
    {
        ingrediente: 'fresas',
        categoria: 'Frutas',
        precio: 5,
        cantidad: 10
    },
    {
        ingrediente: 'fresas',
        categoria: 'Salsas y Jarabes',
        precio: 5,
        cantidad: 10
    },
    {
        ingrediente: 'fresas',
        categoria: 'Topping',
        precio: 5,
        cantidad: 10
    },
    {
        ingrediente: 'fresas',
        categoria: 'Salsas y Jarabes',
        precio: 5,
        cantidad: 10
    },
];

//Funcionalidad para mostrar los ingredientes en stock
function updateIngredients(){
    // Recuperar el contenedor para mostrar los ingredientes
    const newDrinks = document.querySelector('.new-drinks');

    newDrinks.innerHTML = "";

    INGREDIENTES.forEach((event) =>{
        // Crear los nuevo elementos HTML
        const container = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const category = document.createElement('p');
        const spanCategory = document.createElement('span');
        const price = document.createElement('p');
        const spanPrice = document.createElement('span');
        // Checkbox
        const checkBox = document.createElement('input');

        console.log(event);

        img.src = 'images/strawberries.png';
        img.alt = 'Nueva Bebida';
            
        figure.appendChild(img);

        name.classList.add('drink-name');
        name.textContent = event.ingrediente;

        spanCategory.textContent = event.categoria;
        category.classList.add('category');
        category.textContent = 'Categoría: ';
        category.appendChild(spanCategory);

        spanPrice.textContent = event.precio;
        price.classList.add('price');
        price.textContent = 'Precio Extra: ';
        price.appendChild(spanPrice);

        checkBox.type = 'checkbox';
        checkBox.classList.add('check');
        checkBox.classList.add('hide');

        container.appendChild(checkBox);
        container.appendChild(figure);
        container.appendChild(name);
        container.appendChild(category);
        container.appendChild(price);

        container.classList.add('product');

        newDrinks.appendChild(container);
        console.log(container);
    });

    if(newDrinks === ""){
        newDrinks = `
        <section class="no-event">
            <p>No hay reservaciones</p>
        </section>
        `;
    }
}

updateIngredients();

// Funcionalidad para agregar ingredientes
addEventSubmit.addEventListener("click", () =>{
    const ingredientName = addIngredientName.value;
    const ingredientCategory = addIngredientCategory.value;
    const ingredientPrice = addIngredientPrice.value;
    const ingredientItems = addIngredientItems.value;
    
    if(ingredientName === "" || ingredientCategory === "" || ingredientPrice === ""){
        let requeridos = document.querySelector("#error");
        requeridos.classList.remove('hide-message');
        addEventContainer.classList.add('error-add-new-event');
        addEventSubmit.classList.add('send-error');
        addEventInput.classList.add('error-add-event-input');
        requeridos.classList.add('error-message');
        let mensajeError = document.querySelector("#errorMensaje");
        mensajeError.textContent = "Debes proporcionar todos los campos";   
        return;
    }

    const newEvent = {
        ingrediente: ingredientName,
        categoria: ingredientCategory,
        precio: ingredientPrice,
        cantidad: ingredientItems
    };

    INGREDIENTES.push({
        ingrediente: ingredientName,
        categoria: ingredientCategory,
        precio: ingredientPrice,
        cantidad: ingredientItems
    });
    
    console.log(INGREDIENTES);

    addIngredientName.value = "";
    addIngredientCategory.value = "";
    addIngredientPrice.value = "";

    close();
    updateIngredients();
});

function editarIngrediente(checkBox, parent){
    const editBtn = document.querySelector('#edit');
    console.log(parent);
    //Abrir ventana modal
    console.log('Editar');
    //editBtn.removeEventListener('click');
}

function eliminarIngrediente(checkBox, parent){
    const deleteBtn = document.querySelector('#delete');
    //console.log(parent);

    const product = parent.querySelector('.drink-name');
    let nombre = product.textContent;
    //Eliminar
    for (let i = 0; i < INGREDIENTES.length; i++){
        let ingredient = INGREDIENTES[i];
        if(ingredient.ingrediente === nombre){
            delete INGREDIENTES[i];
        }
    }
    updateIngredients();
    console.log('Eliminado');
    //deleteBtn.removeEventListener('click');
}

// Funcionalidad para editar
function editar(){
    const editBtn = document.querySelector('#edit');
    const deleteBtn = document.querySelector('#delete');
    const checkBoxes = document.querySelectorAll('.check');

    
    checkBoxes.forEach(checkBox =>{
        const parent = checkBox.parentNode;
        
        checkBox.addEventListener('change', (event)=>{
            if(event.currentTarget.checked){
                // 
                // Funcionalidad para editar descripcion de un ingrediente
                editBtn.addEventListener('click', ()=>{
                    editarIngrediente(checkBox, parent);
                });
                // Funcionalidad para eliminar un ingrediente
                deleteBtn.addEventListener('click', ()=>{
                    eliminarIngrediente(checkBox, parent);
                });
            }

        });
    });
}

// Funcionalidad para seleccionar algun ingrediente
function seleccionar(){
    const checkBoxes = document.querySelectorAll('.check');
    const products = document.querySelectorAll('.product');
    const editBtn = document.querySelector('#edit');
    const deleteBtn = document.querySelector('#delete');

    checkBoxes.forEach(checkBox =>{
        checkBox.classList.remove('hide');
    });

    products.forEach(product =>{
        product.style.margin = '0 1.5em 1em 1.5em';
        product.style.cursor = 'auto';
    });

    editar();
    // Recuperar los botones de edicion
    const btnContainer = document.querySelector('.buttons-edit');

    btnContainer.classList.remove('hide');
}

const select = document.querySelector('#select');

select.addEventListener('click', seleccionar);