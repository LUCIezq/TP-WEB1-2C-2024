let contadorGlobal = parseInt(sessionStorage.getItem('contadorGlobal')) || 0;
const contador__carrito = document.getElementById('cart-count');
const container = document.querySelectorAll('.lesson__item-information-bottom-button-price');
let contadorCarritoDesplegable = document.querySelector('.js-container__cart-count');

contador__carrito.textContent = contadorGlobal;
contadorCarritoDesplegable.textContent = contadorGlobal;


container.forEach(element => {

    const button__buy = element.querySelector('.lesson__item-button');
    const button__count_container = element.querySelector('.lesson__item-buttons-contanier');
    const button__count__minus = element.querySelector('.button__price-minus');
    const button__count = element.querySelector('.button__price-count');
    const button__count__plus = element.querySelector('.button__price-plus');

    let contadorPorCurso = parseInt(sessionStorage.getItem('contadorPorCurso')) || 0;

    mouseOverSobreELBotonComprar(button__buy, button__count_container);
    actualizarEstadoBotonMinus(button__count__minus, contadorPorCurso);

    button__count_container.addEventListener('mouseleave', e => {
        if (contadorPorCurso == 0) {
            button__buy.style.display = 'block';
            button__count_container.style.display = 'none';
        }
    });

    button__count__minus.addEventListener('click', e => {
        contadorPorCurso = decrementarContadorPorCurso(contadorPorCurso, button__count);
        actualizarEstadoBotonMinus(button__count__minus, contadorPorCurso);
        actualizarEstadoBotonPlus(button__count__plus, contadorPorCurso);
        setearContadorPorCurso(contadorPorCurso);

    });

    button__count__plus.addEventListener('click', e => {
        contadorPorCurso = incrementarContadorPorCurso(contadorPorCurso, button__count);
        actualizarEstadoBotonMinus(button__count__minus, contadorPorCurso);
        actualizarEstadoBotonPlus(button__count__plus, contadorPorCurso);
        setearContadorPorCurso(contadorPorCurso);
    });

});

function setearContadorPorCurso(contadorPorCurso) {
    sessionStorage.setItem('contadorPorCurso', contadorPorCurso);
}

function setearContadorGlobal() {
    sessionStorage.setItem('contadorGlobal', contadorGlobal);
}

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

function actualizarContadorCarrito(contadorGlobal) {
    contador__carrito.textContent = contadorGlobal;
    setearContadorGlobal();
    contadorCarritoDesplegable.textContent = contadorGlobal;
}

function actualizarEstadoBotonMinus(buton, contadorPorCurso) {

    if (buton.classList.contains('button__price-minus') && contadorPorCurso == 0) {
        buton.style.color = '#00000070';
        buton.style.cursor = 'default';
    } else {
        buton.style.color = '#000000';
        buton.style.cursor = 'Pointer';
    }
}

function actualizarEstadoBotonPlus(buton, contadorPorCurso) {

    if (buton.classList.contains('button__price-plus') && contadorPorCurso == 5) {
        buton.style.color = '#00000070';
        buton.style.cursor = 'default';
    } else {
        buton.style.color = '#000000';
        buton.style.cursor = 'Pointer';
    }
}


const container_cart_background = document.getElementById('js-container__cart-background');
const container_cart_hover = document.getElementById('js-container__cart');
const carrito_icon = document.getElementById('header__right-icon-cart-label');
const icon_close = document.getElementById('js-container__cart-header-close');

carrito_icon.addEventListener('mouseover', e => {
    container_cart_background.style.width = '100%';
})
container_cart_hover.addEventListener('mouseleave', e => {
    container_cart_background.style.width = '0%';
})

icon_close.addEventListener('click', e => {
    container_cart_background.style.width = '0%';
})