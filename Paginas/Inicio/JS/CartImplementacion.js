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
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(sessionStorage.getItem('cursos'));
    if (memoria) {
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
        cuentaCarrito.innerText = cuenta;
        numeroDentroDeCarrito.innerHTML = cuenta;
        numeroDentroDeCarritoBottom.innerText = cuenta;
    }
}
const total = document.querySelector('.container__cart-bottom-total');
function calcularTotalDelCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem('cursos'));
    let cuenta = 0;
    if (carrito) {
        carrito.forEach(curso => {
            cuenta += curso.cantidad * curso.precio;
        });
        total.innerText = '$' + cuenta;
    }

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
buttonCarritoAplicar.addEventListener('click', validarCupon);


function validarCupon() {
    const inputText = document.querySelector('.container__cart-bottom-input-element');
    if (inputText.value == "" || inputText.value.match(regex) === null) {
        inputText.classList.add('container__cart-bottom-input-element-error');
        cartErrorParrafo.innerText = 'Código de cupón invalido.';
        cartErrorParrafo.style.color = 'red';
    } else {
        cartErrorParrafo.innerText = "Código de cupón valido.";
        inputText.classList.remove('container__cart-bottom-input-element-error');
        cartErrorParrafo.style.color = 'green';
    }
}
