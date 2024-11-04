const container_cart_background = document.getElementById('js-container__cart-background');
const carrito_icon = document.getElementById('header__right-icon-cart-label');
const icon_close = document.getElementById('js-container__cart-header-close');

function mostrarCarrito() {
    container_cart_background.style.display = 'block';
}

function cerrarCarrito() {
    container_cart_background.style.display = 'none';
}

carrito_icon.addEventListener('click', mostrarCarrito);
icon_close.addEventListener('click', cerrarCarrito);

const linkCarrito = document.querySelector('.js-container__cart-empty-link');

linkCarrito.addEventListener('click', () => {
    container_cart_background.style.display = 'none';
})