const cursosContainer = document.querySelector('.lesson__items');

function crearCursos(cursos) {

    if (cursos) {
        cursos.forEach(curso => {
            const nuevoCurso = document.createElement('div');
            nuevoCurso.classList = 'lesson__item';
            nuevoCurso.innerHTML = generarContenidoDeCurso(curso);
            cursosContainer.appendChild(nuevoCurso);
            nuevoCurso.getElementsByTagName('button')[0].addEventListener('click', () => {agregarCursoACarrito(curso)
                crearCursos();
                calcularTotalDelCarrito();
                revisarMensajeDeCarrito();
            });
        });
    }
}

function generarContenidoDeCurso(curso) {

    /* Mandamos un curso por parametro y dinamicamente
crea el contenido con la informacion de este*/

    return `<a href="#" class="container__img-link"><img src="${curso.img}" alt=""></a>
<div class="container__information">
<div class="container__mid-information">
    <a href="" class="lesson__title">${curso.nombre}</a>
    
    <p class="lesson__description">${curso.descripcion}</p>

    <a href="#" class="lesson__link">Ver detalle</a>
</div>

<div class="container__bottom-information">
    <span class="lesson__hours">${curso.horas}hs</span>

    <div class="container__price">
        <span class="lesson__price">$ ${curso.precio}</span>

        <button class="lesson__button-buy">Añadir al carrito</button>
    </div>
</div>
</div>
`;
}
crearCursos(cursos);