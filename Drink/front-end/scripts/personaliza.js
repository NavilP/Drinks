let precioTotal = 0;

//Funcionalidad para mandar el producto elegido
function chooseProduct(event){
    let nameProduct = event.currentTarget.querySelector('.drink-option-name').textContent;

    console.log("Producto: " + nameProduct);

    // Se asignan los precios
    if(nameProduct === 'Agua'){
        precioTotal = 50;
    }
    else if (nameProduct === 'Café Helado(leche entera)'){
        precioTotal = 80;
    }
    else if (nameProduct === 'Café Caliente(leche entera)'){
        precioTotal = 90;
    }
    else if (nameProduct === 'Café Helado(leche light)'){
        precioTotal = 80;
    }
    else if (nameProduct === 'Café Caliente(leche light)'){
        precio = 90;
    }
    else if (nameProduct === 'Helado'){
        precioTotal = 30;
    }

    const editContainer = document.querySelector('.edit-drink');

    console.log(editContainer);

    const bebida = editContainer.querySelector('.drink-glass');

    bebida.src = `images/productos/${nameProduct}.png`;

    //Recuperar el contenedor de opciones de productos
    const productContainer = document.querySelector('.choose');
    productContainer.classList.add('oculto');

    editContainer.classList.remove('oculto');
}

//Recuperar el contenedor de opciones de productos
const prductContainer = document.querySelector('.choose');

//Recuperar el contenedor de cada producto
const optionContainer = document.querySelectorAll('.drink-option');

optionContainer.forEach(option =>{
    option.addEventListener('click', chooseProduct);
});

//Funcionalidad para mostrar toppings
function desplegar(event){
    const topping = document.querySelector('#topping');
    const fruit = document.querySelector('#fruits');
    const syrup = document.querySelector('#syrup');

    if(event.target.textContent === 'Topping'){
        console.log('Click Topping');

        if(!fruit.classList.contains('oculto')){
            fruit.style.removeProperty('grid-template-columns');
            fruit.style.removeProperty('display');
            fruit.classList.add('oculto');
        }
        if(!syrup.classList.contains('oculto')){
            syrup.style.removeProperty('grid-template-columns');
            syrup.style.removeProperty('display');
            syrup.classList.add('oculto');
        }

        topping.classList.remove('oculto');
        topping.style.display = 'grid';
        topping.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }

    if(event.target.textContent === 'Frutas'){
        console.log('Click Frutas');
        if(!topping.classList.contains('oculto')){
            topping.style.removeProperty('grid-template-columns');
            topping.style.removeProperty('display');
            topping.classList.add('oculto');
        }
        if(!syrup.classList.contains('oculto')){
            syrup.style.removeProperty('grid-template-columns');
            syrup.style.removeProperty('display');
            syrup.classList.add('oculto');
        }

        fruit.classList.remove('oculto');
        fruit.style.display = 'grid';
        fruit.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }

    if(event.target.textContent === 'Salsas y Jarabes'){
        console.log('Click Syrup');
        if(!topping.classList.contains('oculto')){
            topping.style.removeProperty('grid-template-columns');
            topping.style.removeProperty('display');
            topping.classList.add('oculto');
        }
        if(!fruit.classList.contains('oculto')){
            fruit.style.removeProperty('grid-template-columns');
            fruit.style.removeProperty('display');
            fruit.classList.add('oculto');
        }

        syrup.classList.remove('oculto');
        syrup.style.display = 'grid';
        syrup.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
}


//Funcionalidad para agregar ingredientes a la bebida
let numTopping = 0;
let recipe = '';

function addIngredient(event){

    if(numTopping < 6){
        let nameIngredient = event.currentTarget.querySelector('.label').textContent;

        recipe += nameIngredient + ', ';
        console.log(recipe);

        //Peticion para recuperar el precio del ingrediente
        axios.get(`http://localhost:3000/api/ingredients/${nameIngredient}`)
        .then(response => {
            const data = response.data;
            // Crear los nuevo elementos HTML
            precioTotal = precioTotal + data.precio;
            console.log("Precio: ", precioTotal);
        })
        .catch(error => {
            console.log(error);
        });

        let img = event.currentTarget.querySelector('img');
        numTopping += 1;

        const drink = document.querySelector('.drink');
        const newImg = document.createElement('img');

        newImg.src = img.src;
        newImg.alt = 'Topping';

        newImg.classList.add(`topping${numTopping}`);

        drink.appendChild(newImg);
    }
    else{
        let requeridos = document.querySelector("#error");
        requeridos.classList.remove('hide-message');
        requeridos.classList.add('error-message');
        let mensajeError = document.querySelector("#errorMensaje");
        mensajeError.textContent = "Ya no puedes seleccionar más ingredientes";
    }
}


//Funcionalidad para mezclar ingredientes (animaciones)
function mixIngredients(){
    const ingredients = document.querySelectorAll('.topping');
    //Se elimina la funcionalidad para agragar más ingredientes
    ingredients.forEach(ingredient =>{
        ingredient.removeEventListener('click', addIngredient);
    });

    const drinkSection = document.querySelector('.drink');
    const toppings = drinkSection.querySelectorAll('img');

    toppings.forEach(topping => {
        if(topping.classList.contains('topping1')){
            topping.classList.add('move1');
            //topping.style.animationName = 'traslacion1';
            //topping.style.animationDuration = '1s';
            //topping.style.animationTimingFunction = 'linear';
        }
        else if(topping.classList.contains('topping2')){
            topping.classList.add('move2');
        }
        else if(topping.classList.contains('topping3')){
            topping.classList.add('move3');
        }
        else if(topping.classList.contains('topping4')){
            topping.classList.add('move4');
        }
        else if(topping.classList.contains('topping5')){
            topping.classList.add('move5');
        }
        else if(topping.classList.contains('topping6')){
            topping.classList.add('move6');
        }
    });

    // Se recupera el nombre de la bebida
    const newName = document.querySelector('#new-drink-name').value;
    //console.log(newName);

    // Se recupera el precio total

    // Se manda el nuevo producto a la base de datos
    axios.post('http://localhost:3000/api/products', {
        nombre: newName,
        ingredientes: recipe,
        precio: precioTotal
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

    const result = document.querySelector('.drink-result');
    const drink = document.querySelector('.drink-glass');

    drink.classList.add('desaparecer');
    result.classList.add('aparecer');

}

// Funcionalidad para mostrar los ingredientes en stock
function updateIngredients(){
    // Recuperar los contenedores
    const section1 = document.querySelector('#topping');
    const section2 = document.querySelector('#fruits');
    const section3 = document.querySelector('#syrup');

    let section = '';
    axios.get(`http://localhost:3000/api/ingredients`)
        .then(response => {
            const datos = response.data;
            datos.forEach(data =>{
                if(data.categoria === 'Topping'){
                    // Recuperar el contenedor para mostrar los ingredientes
                    section = section1;
                }
                else if(data.categoria === 'Frutas'){
                    // Recuperar el contenedor para mostrar los ingredientes
                    section = section2;
                }
                else if(data.categoria === 'Salsas y Jarabes'){
                    // Recuperar el contenedor para mostrar los ingredientes
                    section = section3;
                }
    
                const topping = document.createElement('article');
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const label = document.createElement('p');
            
                console.log(data.ingrediente);
                img.src = `images/ingredientes/${data.ingrediente}.png`;

                img.alt = 'Topping';
            
                figure.appendChild(img);
            
                label.textContent = data.ingrediente;
                label.classList.add('label');
            
                topping.classList.add('topping');
                topping.appendChild(figure);
                topping.appendChild(label);
    
                if (data.cantidad <= 0){
                    topping.classList.add('disable');
                }
    
                section.appendChild(topping);
            });

            const toppings = document.querySelectorAll('.ingredient');
            toppings.forEach(option =>{
                option.addEventListener('click', desplegar);
            });

            const ingredients = document.querySelectorAll('.topping');
            ingredients.forEach(ingredient =>{
                if(!ingredient.classList.contains('disable')){
                    ingredient.addEventListener('click', addIngredient);
                }
            });

            const createBtn = document.getElementById('create');
            createBtn.addEventListener('click', mixIngredients);
        })
        .catch(error => {
            console.log(error);
        });
}

updateIngredients();