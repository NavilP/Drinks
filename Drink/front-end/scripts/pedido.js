function pedido(data){
    const idContainer = document.querySelector('.id-drink');
    const productContainer = document.querySelector('.product');
    const recipeContainer = document.querySelector('.recipe');
    const priceContainer = document.querySelector('.price');

    idContainer.textContent = data.idproducto;
    productContainer.textContent = data.nombre;
    recipeContainer.textContent = data.ingredientes;
    priceContainer.textContent = data.precio;
}