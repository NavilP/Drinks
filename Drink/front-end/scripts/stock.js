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
const addIngredientPrice = document.querySelector(".ingredient-price");

//Recuperar el precio
const addIngredientItems = document.querySelector(".ingredient-items");

// Recuperar el boton para guardar los cambios
const addEventSubmit = document.querySelector(".add-event-btn");

// Recuperar el fondo negro
const shape = document.querySelector('.shape');

// Sección de edición
// Recuperar el contenedor para editar
const editContainer = document.querySelector(".edit-ingredient");

//Recuperar el boton para salir
const closeBtnEdit = document.querySelector(".close-edit");

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

//Funcionalidad para mostrar los ingredientes en stock
function updateIngredients() {
    // Recuperar el contenedor para mostrar los ingredientes
    const newDrinks = document.querySelector('.new-drinks');

    newDrinks.innerHTML = "";

    /*INGREDIENTES.forEach((event) =>{
        // Crear los nuevo elementos HTML
        const container = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const category = document.createElement('p');
        const spanCategory = document.createElement('span');
        const price = document.createElement('p');
        const spanPrice = document.createElement('span');
        // Edit buttons
        const btnContainers = document.createElement('div');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const btnDel = document.createElement('button');
        const imgDel = document.createElement('img');
        const btnEdit = document.createElement('button');
        const imgEdit = document.createElement('img');
        

        //console.log(event);

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

        //Edit
        btnContainers.classList.add('buttons-edit');
        btnContainers.classList.add('hide');

        input.type = 'hidden';
        input.name = 'id';

        imgDel.src = 'images/borrar.png';
        imgDel.alt = 'Eliminar';
        imgDel.classList.add('trash');

        btnDel.type = 'submit';
        btnDel.classList.add('delete-btn');
        btnDel.appendChild(imgDel);

        form.method = 'POST';
        //form.action = 'delete2';
        //form.onsubmit = 'submitForm(event)';
        form.classList.add('delete-frm');
        form.appendChild(input);
        form.appendChild(btnDel);

        imgEdit.src = 'images/editar.png';
        imgEdit.alt = 'Editar';
        imgEdit.classList.add('pencil');

        
        btnEdit.classList.add('edit-btn');
        btnEdit.appendChild(imgEdit);

        btnContainers.appendChild(form);
        btnContainers.appendChild(btnEdit);

        container.appendChild(btnContainers);
        container.appendChild(figure);
        container.appendChild(name);
        container.appendChild(category);
        container.appendChild(price);

        container.classList.add('product');

        newDrinks.appendChild(container);
        //console.log(container);
    });

    if(newDrinks === ""){
        newDrinks = `
        <section class="no-event">
            <p>No hay reservaciones</p>
        </section>
        `;
    }*/
    axios.get(`http://localhost:3000/api/ingredients`)
        .then(response => {
            const datos = response.data;
            // Crear los nuevo elementos HTML
            datos.forEach(data => {
                const container = document.createElement('article');
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const name = document.createElement('p');
                const category = document.createElement('p');
                const spanCategory = document.createElement('span');
                const price = document.createElement('p');
                const spanPrice = document.createElement('span');
                // Edit buttons
                const btnContainers = document.createElement('div');
                const form = document.createElement('form');
                const input = document.createElement('input');
                const btnDel = document.createElement('button');
                const imgDel = document.createElement('img');
                const btnEdit = document.createElement('button');
                const imgEdit = document.createElement('img');


                //console.log(event);

                img.src = 'images/ingredientes/strawberries.png';
                img.alt = 'Nueva Bebida';

                figure.appendChild(img);

                name.classList.add('drink-name');
                name.textContent = data.ingrediente;

                spanCategory.textContent = data.categoria;
                category.classList.add('category');
                category.textContent = 'Categoría: ';
                category.appendChild(spanCategory);

                spanPrice.textContent = data.precio;
                price.classList.add('price');
                price.textContent = 'Precio Extra: ';
                price.appendChild(spanPrice);

                //Edit
                btnContainers.classList.add('buttons-edit');
                btnContainers.classList.add('hide');

                input.type = 'hidden';
                input.name = 'id';

                imgDel.src = 'images/borrar.png';
                imgDel.alt = 'Eliminar';
                imgDel.classList.add('trash');

                btnDel.type = 'submit';
                btnDel.classList.add('delete-btn');
                btnDel.appendChild(imgDel);

                form.method = 'POST';
                //form.action = 'delete2';
                //form.onsubmit = 'submitForm(event)';
                form.classList.add('delete-frm');
                form.appendChild(input);
                form.appendChild(btnDel);

                imgEdit.src = 'images/editar.png';
                imgEdit.alt = 'Editar';
                imgEdit.classList.add('pencil');


                btnEdit.classList.add('edit-btn');
                btnEdit.appendChild(imgEdit);

                btnContainers.appendChild(form);
                btnContainers.appendChild(btnEdit);

                container.appendChild(btnContainers);
                container.appendChild(figure);
                container.appendChild(name);
                container.appendChild(category);
                container.appendChild(price);

                container.classList.add('product');

                newDrinks.appendChild(container);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

updateIngredients();

// Funcionalidad para agregar ingredientes
addEventSubmit.addEventListener("click", () => {
    const ingredientName = addIngredientName.value;
    const ingredientCategory = addIngredientCategory.value;
    const ingredientPrice = addIngredientPrice.value;
    const ingredientItems = addIngredientItems.value;

    if (ingredientName === "" || ingredientCategory === "" || ingredientPrice === "") {
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

    /*const newEvent = {
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
    });*/

    axios.post('http://localhost:3000/api/ingredients', {
        nombre: ingredientName,
        cantidad: ingredientItems,
        categoria: ingredientCategory,
        precio: ingredientPrice
    })
    .then(response => {
        if (response.status === 200) {
            if (response.data.sqlMessage !== undefined) {
                alert(response.data.sqlMessage);
            }
            updateIngredients();
        }
    })
    .catch(error => {
        console.log(error);
    });

    //console.log(INGREDIENTES);

    addIngredientName.value = "";
    addIngredientCategory.value = "";
    addIngredientPrice.value = "";

    close();
    //updateIngredients();
});

function editarIngrediente(parent) {
    console.log(parent);
    //Abrir ventana modal
    let nombre = parent.querySelector('.drink-name').textContent;
    let icon = document.createElement('figure');
    icon = parent.querySelector('figure').querySelector('img');


    /*const price_aux = parent.querySelector('.price');
    let price = price_aux.querySelector('span').textContent;*/

    // Recuperar ventana modal
    const modal = document.querySelector('.edit-ingredient');
    modal.innerHTML = '';
    let editSection = '';

    let price = 0;
    let items = 0;

    axios.get(`http://localhost:3000/api/ingredients/${nombre}`)
    .then(response => {
        const data = response.data;
        // Crear los nuevo elementos HTML
        price = data.precio;
        items = data.cantidad;
        
        // Modificar elementos
        editSection = `
        <section class="ingredient-title">
            <h3 class="edit-ingredient-title">Editar Ingrediente</h3>
            <button class="close-edit">x</button>
        </section>
        <img src="${icon.src}" alt="Edit">
        <section class="edit-ingredient-input">
            <p id="error-edit" class="hide-message-edit">
                <strong id="error-title-edit">Error</strong>
                <label id="errorMensaje-edit"></label>
            </p>
            <input type="text" placeholder="Precio: ${price}" class="ingredient-price-edit">
            <input type="text" placeholder="Cantidad: ${items}" class="ingredient-items-edit">
        </section>
        <div class="send-edit">
            <button class="save-event-btn">Guardar</button>
        </div>`;

        modal.innerHTML += editSection;
        modal.classList.remove('hide');

        shape.classList.remove('hide');

        const inputPrice = modal.querySelector('.ingredient-price-edit');

        //Actualizar los datos
        inputPrice.addEventListener('change', () => {
            /*for (let i = 0; i < INGREDIENTES.length; i++) {
                let ingredient = INGREDIENTES[i];
                if (ingredient.ingrediente === nombre) {
                    INGREDIENTES[i].precio = inputPrice.value;
                    console.log(INGREDIENTES[i].precio);
                }
            }*/
            // Update
            axios.patch(`http://localhost:3000/api/ingredients/${nombre}`, {
                precio: inputPrice.value
            })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.sqlMessage !== undefined) {
                        alert(response.data.sqlMessage);
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
        });

        const inputItems = modal.querySelector('.ingredient-items-edit');
        inputItems.addEventListener('change', () => {
            /*for (let i = 0; i < INGREDIENTES.length; i++) {
                let ingredient = INGREDIENTES[i];
                if (ingredient.ingrediente === nombre) {
                    INGREDIENTES[i].cantidad = inputItems.value;
                    console.log("Cantidad" + INGREDIENTES[i].cantidad);
                }
            }*/
            axios.patch(`http://localhost:3000/api/ingredients/${nombre}`, {
                cantidad: inputItems.value
            })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.sqlMessage !== undefined) {
                        alert(response.data.sqlMessage);
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
        });

        console.log('Editando');
        const saveChanges = modal.querySelector('.save-event-btn');
        const cancelBtn = document.querySelector('.cancel');

        saveChanges.addEventListener('click', () => {
            updateIngredients();
            //Cerrar ventana
            console.log('Cerrado');

            editContainer.classList.add('hide');
            cancelBtn.classList.add('hide');
            shape.classList.add('hide');
        });

        const closeBtn = document.querySelector('.close-edit');
        closeBtn.addEventListener('click', () => {
        editContainer.classList.add('hide');
        shape.classList.add('hide');

    });
    })
    .catch(error => {
        console.log(error);
    });

    //editBtn.removeEventListener('click');
}

function eliminarIngrediente(parent) {
    //console.log(parent);

    const product = parent.querySelector('.drink-name');
    let nombre = product.textContent;
    console.log(nombre);

    //Eliminar
    /*for (let i = 0; i < INGREDIENTES.length; i++) {
        let ingredient = INGREDIENTES[i];
        console.log(INGREDIENTES);
        console.log("Ingrediente a eliminar" + ingredient.ingrediente);
        if (ingredient.ingrediente === nombre) {

            delete INGREDIENTES[i];
        }
    }*/

    axios.delete(`http://localhost:3000/api/ingredients/${nombre}`)
    .then(response => {
        if (response.status === 200) {
            if (response.data.sqlMessage !== undefined) {
                alert(response.data.sqlMessage);
            }
        }
    })
    .catch(error => {
        console.log(error);
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.classList.add('hide');
    updateIngredients();
    console.log('Eliminado');
}

// Funcionalidad para seleccionar algun ingrediente
function seleccionar() {
    const checkBoxes = document.querySelectorAll('.check');
    const products = document.querySelectorAll('.product');

    checkBoxes.forEach(checkBox => {
        checkBox.classList.remove('hide');
    });

    products.forEach(product => {
        product.style.margin = '0 1.5em 1em 1.5em';
        product.style.cursor = 'auto';
    });

    // Recuperar los botones de edicion
    const btnContainers = document.querySelectorAll('.buttons-edit');

    btnContainers.forEach(btnContainer => {
        btnContainer.classList.remove('hide');
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.classList.remove('hide');

    cancelBtn.addEventListener('click', () => {
        btnContainers.forEach(btnContainer => {
            btnContainer.classList.add('hide');
        });
        cancelBtn.classList.add('hide');
    });

    const editBtns = document.querySelectorAll('.edit-btn');
    const deleteBtns = document.querySelectorAll('.delete-frm');

    editBtns.forEach(editBtn => {
        // Funcionalidad para editar descripcion de un ingrediente
        editBtn.addEventListener('click', () => {
            editarIngrediente(editBtn.parentNode.parentNode);
        });
    });

    deleteBtns.forEach(deleteBtn => {
        // Funcionalidad para eliminar un ingrediente
        deleteBtn.addEventListener('click', (event) => {
            event.preventDefault();
            //console.log(deleteBtn.parentNode.parentNode);
            eliminarIngrediente(deleteBtn.parentNode.parentNode);
        });
    });
}

const select = document.querySelector('#select');

select.addEventListener('click', seleccionar);