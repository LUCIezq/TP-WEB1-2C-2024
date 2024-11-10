const container_cart_background = document.getElementById('js-container__cart-background');
const carrito_icon = document.getElementById('header__right-icon-cart-label');
const icon_close = document.getElementById('js-container__cart-header-close');
const body = document.body;

function mostrarCarrito() {
    container_cart_background.style.display = 'block';
    body.classList.add('body__no-scroll');
}

function cerrarCarrito() {
    container_cart_background.style.display = 'none';
    body.classList.remove('body__no-scroll');
}

carrito_icon.addEventListener('click', mostrarCarrito);
icon_close.addEventListener('click', cerrarCarrito);



const linkCarrito = document.querySelector('.js-container__cart-empty-link');

linkCarrito.addEventListener('click', () => {
    container_cart_background.style.display = 'none';
    body.classList.remove('body__no-scroll');
})


