const cursosContainerCarrito = document.querySelector('.container__cart-lesson-items');

function crearCursos() {
    cursosContainerCarrito.innerHTML = "";
    const cursos = JSON.parse(sessionStorage.getItem('cursos'));
    if (cursos) {
        cursos.forEach(curso => { 
            const nuevoCurso = document.createElement('li');
            nuevoCurso.classList = 'lesson__item-cart';
            nuevoCurso.innerHTML = generarContenidoDeCurso(curso);
            cursosContainerCarrito.appendChild(nuevoCurso);
            nuevoCurso.getElementsByTagName('button')[1].addEventListener('click', () => {
                agregarCursoACarrito(curso);
                actualizarNumeroCarrito();
                crearCursos();
                calcularTotalDelCarrito();
            })
            nuevoCurso.getElementsByTagName('button')[0].addEventListener('click', () => {
                restarAlCarrito(curso);
                actualizarNumeroCarrito();
                crearCursos();
                calcularTotalDelCarrito();
                sePuedeContinuarEnCarrito();
                revisarMensajeDeCarrito();
            }
            );
        });
    }
}

function generarContenidoDeCurso(curso) {

    /* Mandamos un curso por parametro y dinamicamente
crea el contenido con la informacion de este*/
    let precioConMiles = curso.precio.toLocaleString('es-ES');

    return `<div class="container__cart-item">

    <img src="${curso.img}" alt="">

    <div class="container__cart-information">
        <div class="container__cart-information-top">
        <h2 class="lesson__title-cart">${curso.nombre}</h2>

        <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="lesson__link-cart">Ver detalle</a>
        </div>

        <div class="container__cart-information-bottom">
            <span class="item__price-cart">$${precioConMiles}</span>

            <div class="container__cart-button">
                <button class="button__minus">-</button>
                <span class="item__count">${curso.cantidad}</span>
                <button class="button__plus">+</button>
            </div>

        </div>
    </div>

    </div>`;
}

crearCursos();