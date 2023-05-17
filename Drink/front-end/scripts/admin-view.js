// Arreglo provisional
const PRODUCTS = [
    {
        id: 1,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 100
    },
    {
        id: 2,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    },
    {
        id: 1,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 100
    },
    {
        id: 2,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Berry Blender',
        ingredientes: 'Zarzamora, Crema Batida, Café Expresso',
        precio: 150
    }
];

// Funcionalidad para mostrar los ingredientes en stock
function updateProducts(){
    // Recuperar el contenedor
    const section = document.querySelector('.new-drinks');

    section.innerHTML = '';

    PRODUCTS.forEach((event) =>{
        const product = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const price = document.createElement('p');
    
        img.src = 'images/mis_drink.png';
        img.alt = 'Nueva Bebida';
    
        figure.appendChild(img);
    
        name.textContent = event.nombre;
        name.classList.add('drink-name');

        price.textContent = '$' + event.precio;
        price.classList.add('price');
    
        product.classList.add('product');
        product.appendChild(figure);
        product.appendChild(name);
        product.appendChild(price);

        section.appendChild(product);
    });
}

updateProducts();