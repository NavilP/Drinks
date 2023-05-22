// Funcionalidad para mostrar los ingredientes en stock
function updateProducts() {
    // Recuperar el contenedor
    const section = document.querySelector('.new-drinks');

    section.innerHTML = '';

    /*PRODUCTS.forEach((event) =>{
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
    });*/
    axios.get(`http://localhost:3000/api/products`)
        .then(response => {
            const datos = response.data;
            // Crear los nuevo elementos HTML
            let cont = 0;
            datos.forEach(data => {
                if (cont < 8) {
                    const product = document.createElement('article');
                    const figure = document.createElement('figure');
                    const img = document.createElement('img');
                    const name = document.createElement('p');
                    const price = document.createElement('p');

                    img.src = 'images/mis_drink.png';
                    img.alt = 'Nueva Bebida';

                    figure.appendChild(img);

                    name.textContent = data.nombre;
                    name.classList.add('drink-name');

                    price.textContent = '$' + data.precio;
                    price.classList.add('price');

                    product.classList.add('product');
                    product.appendChild(figure);
                    product.appendChild(name);
                    product.appendChild(price);

                    section.appendChild(product);
                    cont = cont + 1
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
}

updateProducts();

// Funcionalidad para buscar productos
const search = document.querySelector('#select');
search.addEventListener('click', () => {
    const searchInput = document.querySelector('.search');
    searchInput.classList.remove('hide');

    const searchBtn = document.querySelector('.search-btn');
    searchBtn.classList.remove('hide');

    searchBtn.addEventListener('click', ()=>{
        let id = searchInput.value;

        axios.get(`http://localhost:3000/api/products/${id}`)
        .then(response => {
            if (response.data === 'Ingrediente no encontrado'){
                const section = document.querySelector('.product-search');

                section.innerHTML = '';

                const msj = document.createElement('p');

                msj.textContent = `No se econtró el producto con id ${id}`;

                section.appendChild(msj);
                section.classList.remove('hide');
            }
            else {
                const section = document.querySelector('.product-search');
                section.innerHTML = '';

                const data = response.data;
                // Crear los nuevo elementos HTML
                const product = document.createElement('article');
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const name = document.createElement('p');
                const recipe = document.createElement('p');
                const price = document.createElement('p');

                img.src = 'images/mis_drink.png';
                img.alt = 'Nueva Bebida';

                figure.appendChild(img);

                name.textContent = data.nombre;
                name.classList.add('drink-name-s');

                recipe.textContent = data.ingredientes;
                recipe.classList.add('ingredients-s');

                price.textContent = '$' + data.precio;
                price.classList.add('price-s');

                product.classList.add('product-s');
                product.appendChild(figure);
                product.appendChild(name);
                product.appendChild(recipe);
                product.appendChild(price);

                section.appendChild(product);
                section.classList.remove('hide');
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
});