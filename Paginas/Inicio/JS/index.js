const cursosContainerIndex = document.querySelector('.lesson__items');

function crearCursos(cursos) {

    if (cursos) {
        cursos.forEach(curso => {
            const nuevoCurso = document.createElement('div');
            nuevoCurso.classList = 'lesson__item';
            nuevoCurso.innerHTML = generarContenidoDeCurso(curso);
            cursosContainerIndex.appendChild(nuevoCurso);
            nuevoCurso.getElementsByTagName('button')[0].addEventListener('click', () => {
                agregarCursoACarrito(curso)
                crearCursos();
                calcularTotalDelCarrito();
                revisarMensajeDeCarrito();
            });
        });
    }
}

function generarContenidoDeCurso(curso) {

    let precioConMiles = curso.precio.toLocaleString('es-ES');//formate con miles 1000 = 1.000

    /* Mandamos un curso por parametro y dinamicamente
crea el contenido con la informacion de este*/

    return `<a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="container__img-link"><img src="${curso.img}" alt=""></a>
<div class="container__information">
<div class="container__mid-information">
    <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="lesson__title">${curso.nombre}</a>
    
    <p class="lesson__description">${curso.descripcion}</p>

    <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="lesson__link">Ver detalle</a>
</div>

<div class="container__bottom-information">
    <span class="lesson__hours">${curso.horas}hs</span>

    <div class="container__price">
        <span class="lesson__price">$${precioConMiles}</span>

        <button class="lesson__button-buy">Añadir al carrito</button>
    </div>
</div>
</div>
`;
}

crearCursos(cursos);