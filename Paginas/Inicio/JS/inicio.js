const contador__carrito = document.getElementById('cart-count');
const courses = document.querySelectorAll('.lesson__item');
const lesson__item__buy = document.getElementById('lesson__button-buy');
const container__button__buy = document.getElementById('container__button-buy');

const button__buy__minus = document.getElementById('button_buy-minus');
const button__buy__count = document.getElementById('button_buy-count');
const button__buy__plus = document.getElementById('button_buy-plus');


let contador = 0;

button__buy__minus.addEventListener('click', e => {

    if(contador>0){
        contador--;
        button__buy__count.textContent = contador;
        actualizarTextContentContador(contador);

    }

})

button__buy__plus.addEventListener('click', e => {
    if(contador<10){
        contador++;
        button__buy__count.textContent = contador;
        actualizarTextContentContador(contador);
    }
})

lesson__item__buy.addEventListener('mouseover', e => {
    lesson__item__buy.style.display = "none";
    container__button__buy.style.display = "flex";
})

container__button__buy.addEventListener('mouseleave', e => {
    lesson__item__buy.style.display = "block";
    container__button__buy.style.display = "none";
})



function actualizarTextContentContador(contador) {
    contador__carrito.textContent = contador;
    sessionStorage.setItem('contadorCarrito', contador);
}

window.onload = function () {
    contador= sessionStorage.getItem('contadorCarrito');

    if (contador) {
        contador__carrito.textContent = contador;
        button__buy__count.textContent = contador;
    }
}