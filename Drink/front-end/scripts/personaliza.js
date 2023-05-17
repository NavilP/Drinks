//Funcionalidad para mostrar toppings
const toppings = document.querySelectorAll('.ingredient');

function desplegar(event){
    const topping = document.querySelector('.toppings');
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

toppings.forEach(option =>{
    option.addEventListener('click', desplegar);
})

//Funcionalidad para agregar ingredientes a la bebida
const ingredients = document.querySelectorAll('.topping');
let numTopping = 0;

function addIngredient(event){
    if(numTopping < 6){
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

ingredients.forEach(ingredient =>{
    ingredient.addEventListener('click', addIngredient);
});

//Funcionalidad para mezclar ingredientes
function mixIngredients(){
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

    const result = document.querySelector('.drink-result');
    const drink = document.querySelector('.drink-glass');

    drink.classList.add('desaparecer');
    result.classList.add('aparecer');

}

const createBtn = document.getElementById('create');
createBtn.addEventListener('click', mixIngredients);