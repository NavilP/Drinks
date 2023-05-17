// Arreglo provisional
const INGREDIENTES = [
    {
        id: '1',
        nombre: 'Berry Blender',
        precio: 100
    },
    {
        ingrediente: 'nueces',
        categoria: 'Topping',
        precio: 5,
        cantidad: 0
    }
];

// Funcionalidad para mostrar los ingredientes en stock
function updateIngredients(){
    // Recuperar los contenedores
    const section1 = document.querySelector('#topping');
    const section2 = document.querySelector('#fruits');
    const section3 = document.querySelector('#syrup');

    INGREDIENTES.forEach((event) =>{
        let section = '';

        if(event.categoria === 'Topping'){
            // Recuperar el contenedor para mostrar los ingredientes
            section = section1;
        }
        else if(event.categoria === 'Frutas'){
            // Recuperar el contenedor para mostrar los ingredientes
            section = section2;
        }
        else if(event.categoria === 'Salsas y Jarabes'){
            // Recuperar el contenedor para mostrar los ingredientes
            section = section3;
        }

        const topping = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const label = document.createElement('p');
    
        img.src = 'images/blueberries.png';
        img.alt = 'Topping';
    
        figure.appendChild(img);
    
        label.textContent = event.ingrediente;
        label.classList.add('label');
    
        topping.classList.add('topping');
        topping.appendChild(figure);
        topping.appendChild(label);

        if (event.cantidad <= 0){
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
}

updateIngredients();