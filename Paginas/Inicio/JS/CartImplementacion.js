function restarAlCarrito(cursoBuscado) {
    const memoria = JSON.parse(sessionStorage.getItem('cursos'));
    const indiceDeCurso = memoria.findIndex(curso => curso.id === cursoBuscado.id);
    if (memoria[indiceDeCurso].cantidad === 1) {
        memoria.splice(indiceDeCurso, 1);
    } else {
        memoria[indiceDeCurso].cantidad--;
    }
    sessionStorage.setItem('cursos', JSON.stringify(memoria));
}

function agregarCursoACarrito(producto) {
    const memoria = JSON.parse(sessionStorage.getItem('cursos'));

    if (!memoria) {
        const nuevoCurso = getNuevoProductoParaMemoria(producto);
        sessionStorage.setItem('cursos', JSON.stringify([nuevoCurso]));
    } else {
        const indiceDeCurso = memoria.findIndex(curso => curso.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceDeCurso === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        } else {
            nuevaMemoria[indiceDeCurso].cantidad++;
        }
        sessionStorage.setItem('cursos', JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}

/** Toma un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(curso) {
    const nuevoCurso = curso;
    nuevoCurso.cantidad = 1;
    return nuevoCurso;
}

const cuentaCarrito = document.getElementById('cart-count');
const numeroDentroDeCarrito = document.querySelector('.js-container__cart-count');
const numeroDentroDeCarritoBottom = document.querySelector('.container__cart-bottom-right');
const inputText = document.querySelector('.container__cart-bottom-input-element');
const descuento = 0.30;
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(sessionStorage.getItem('cursos'));
    if (memoria) {
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
        cuentaCarrito.innerText = cuenta;
        numeroDentroDeCarrito.innerHTML = cuenta;
        numeroDentroDeCarritoBottom.innerText = cuenta;
    }
}

function calcularTotalDelCarrito() {
    const total = document.querySelector('.container__cart-bottom-total');
    let descuentoSinTotal = document.querySelector('.container__cart-descuentos-price');
    const carrito = JSON.parse(sessionStorage.getItem('cursos'));
    let cuenta = 0;
    if (carrito) {
        carrito.forEach(curso => {
            cuenta += curso.cantidad * curso.precio;
        });
    }

    if (inputText.value != '') {
        cuenta = cuenta * (1 - descuento);
        descuentoSinTotal.innerText = '-$' + Math.round(cuenta * descuento).toLocaleString('es-ES');
    } else {
        descuentoSinTotal.innerText = '$0';
    }
    total.innerText = '$' + Math.round(cuenta).toLocaleString('es-ES');
    sessionStorage.setItem('totalCarrito', JSON.stringify(cuenta));
}
calcularTotalDelCarrito();

actualizarNumeroCarrito();

const mensaje = document.querySelector(".js-container__cart-empty");
const containerCursos = document.getElementById('JS-container__cart-lesson-items');

function revisarMensajeDeCarrito() {
    const cursos = JSON.parse(sessionStorage.getItem('cursos'));
    mensaje.classList.toggle('oculto', cursos && cursos.length > 0);
    containerCursos.classList.toggle('oculto', !(cursos && cursos.length > 0))
}

revisarMensajeDeCarrito();

const regex = /^[a-zA-Z0-9]+$/;
const buttonCarritoAplicar = document.querySelector('.button__cuppon');
const cartErrorParrafo = document.querySelector('.cart__error-description');
buttonCarritoAplicar.addEventListener('click', () => {
    validarCupon();
});

const cuponContainer = document.querySelector('.cupon__container');
const cuponText = document.getElementById('js-cupon__description');
const cuponClose = document.getElementById('js-cupon__close')
const descuentoAAplicar = document.getElementById('descuento');

function validarCupon() {
    if (inputText.value == "" || inputText.value.match(regex) === null) {
        inputText.classList.add('container__cart-bottom-input-element-error');
        cartErrorParrafo.innerText = 'Código de cupón invalido.';
        cartErrorParrafo.style.color = 'red';
    } else {
        inputText.classList.remove('container__cart-bottom-input-element-error');
        cartErrorParrafo.innerText = '';
        cuponContainer.classList.add('visible');
        cuponText.innerText = inputText.value;
        inputText.setAttribute('readonly', true);
        inputText.classList.add('container__cart-bottom-input-element-no-modify');
        calcularTotalDelCarrito();
        descuentoAAplicar.innerText = '[30%]'
    }
}

cuponClose.addEventListener('click', () => {
    cuponContainer.classList.remove('visible');
    inputText.classList.remove('container__cart-bottom-input-element-no-modify');
    inputText.value = '';
    inputText.removeAttribute('readonly');
    descuentoAAplicar.innerText = '[0%]'
    calcularTotalDelCarrito();
})


function sePuedeContinuarEnCarrito() {
    const button__continuar = document.getElementById('JS-button__continuar');
    const cursosEnCarrito = JSON.parse(sessionStorage.getItem('cursos'));

    if (!cursosEnCarrito || cursosEnCarrito.length == 0) {
        button__continuar.style.cursor = 'not-allowed';
        button__continuar.addEventListener('click', preventContinuar);

    } else {
        button__continuar.style.cursor = 'pointer';
        button__continuar.removeEventListener('click', preventContinuar);

    }
}

function preventContinuar(e) {
    e.preventDefault();
}

sePuedeContinuarEnCarrito();
