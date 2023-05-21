// Funcionalidad para mostrar los ingredientes en stock
function updateProducts(){
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
                if (cont < 8){
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