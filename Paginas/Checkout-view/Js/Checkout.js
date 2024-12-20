const cursosContainerCarrito = document.querySelector('.checkout__list-visible');

function crearCursos() {
    cursosContainerCarrito.innerHTML = "";
    const cursos = JSON.parse(sessionStorage.getItem('cursos'));
    if (cursos) {
        cursos.forEach(curso => {
            const nuevoCurso = document.createElement('div');
            nuevoCurso.classList = 'lesson__item-cart';
            nuevoCurso.innerHTML = generarContenidoDeCurso(curso);
            cursosContainerCarrito.appendChild(nuevoCurso);
        });
    };
}

const montoAPagar = document.querySelector('.checkout__total-price');
montoAPagar.innerText = '$' + Math.round(JSON.parse(sessionStorage.getItem('totalCarrito'))).toLocaleString();

function generarContenidoDeCurso(curso) {

    /* Mandamos un curso por parametro y dinamicamente
crea el contenido con la informacion de este*/
    let precioConMiles = curso.precio.toLocaleString('es-ES');

    return `<div class="container__cart-item">

    <div class="container__cart-information">
        <div class="container__cart-information-top">
        <h2 class="lesson__title-cart">${curso.nombre}</h2>

        <div class="container__cart-information-bottom">
            <span class="item__price-cart">$${precioConMiles} x ${curso.cantidad}</span>
        </div>
    </div>

    </div>`;
}

crearCursos();


