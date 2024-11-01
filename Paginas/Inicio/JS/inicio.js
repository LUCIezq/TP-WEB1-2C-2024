let contadorGlobal = 0;
const contador__carrito = document.getElementById('cart-count');
const container = document.querySelectorAll('.lesson__item-information-bottom-button-price');
let contadorCarritoDesplegable = document.querySelector('.js-container__cart-count');

container.forEach(element => {

    const button__buy = element.querySelector('.lesson__item-button');
    const button__count_container = element.querySelector('.lesson__item-buttons-contanier');
    const button__count__minus = element.querySelector('.button__price-minus');
    const button__count = element.querySelector('.button__price-count');
    const button__count__plus = element.querySelector('.button__price-plus');

    let contadorPorCurso = 0;

    mouseOverSobreELBotonComprar(button__buy, button__count_container);

    button__count_container.addEventListener('mouseleave', e => {
        if (contadorPorCurso == 0) {
            button__buy.style.display = 'block';
            button__count_container.style.display = 'none';
        }
    });

    button__count__minus.addEventListener('click', e => {
        actualizarEstadoBoton(button__count__minus, contadorPorCurso)
        actualizarEstadoBoton(button__count__plus, contadorPorCurso)
        decrementarContadorPorCurso(contadorPorCurso, button__count);
    });

    button__count__plus.addEventListener('click', e => {
        actualizarEstadoBoton(button__count__minus, contadorPorCurso);
        actualizarEstadoBoton(button__count__plus, contadorPorCurso);
        incrementarContadorPorCurso(contadorPorCurso, button__count);
    });
});

function incrementarContadorPorCurso(contadorPorCurso, button__count) {
    if (contadorPorCurso < 5) {
        contadorGlobal++;
        button__count.textContent = ++contadorPorCurso;
        actualizarContadorCarrito(contadorGlobal);
    }
    return contadorPorCurso;
}
function decrementarContadorPorCurso(contadorPorCurso, button__count) {
    if (contadorPorCurso > 0) {
        contadorGlobal--;
        button__count.textContent = --contadorPorCurso;
        actualizarContadorCarrito(contadorGlobal);
    }
    return contadorPorCurso;
}
function mouseOverSobreELBotonComprar(button__buy, button__count_container) {
    button__buy.addEventListener('mouseover', e => {
        button__buy.style.display = 'none';
        button__count_container.style.display = 'flex';
    });
}
function  actualizarContadorCarrito(contadorGlobal) {
    contador__carrito.textContent = contadorGlobal;
    contadorCarritoDesplegable.textContent = contadorGlobal;
}
function actualizarEstadoBoton(buton, contadorPorCurso) {

    const menos = buton.classList.contains('button__price-minus');
    const mas = buton.classList.contains('button__price-plus');

    if (menos) {
        actualizarBotonMenos(buton, contadorPorCurso);
    }
    if (mas) {
        actualizarBotonMas(buton, contadorPorCurso);
    }
}
function actualizarBotonMenos(buton, contadorPorCurso) {
    if (contadorPorCurso > 0) {
        buton.classList.add('button__price-minus-active');
    } else {
        buton.classList.remove('button__price-minus-active');
    }
}
function actualizarBotonMas(buton, contadorPorCurso) {
    if (contadorPorCurso == 5) {
        buton.classList.add('button__price-plus-desactive');
    } else {
        buton.classList.remove('button__price-plus-desactive');
    }
}