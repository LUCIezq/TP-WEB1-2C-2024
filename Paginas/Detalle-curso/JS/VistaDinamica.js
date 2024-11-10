const url = new URL(location.href);
const idCurso = url.searchParams.get('idCurso');
const cursoBuscado = cursos.find(curso => curso.id === parseInt(idCurso));

const docenteDinamico = document.getElementById('JS-docente__name');
const docenteDescripcionDinamico = document.getElementById('JS-docente__biography');

if (cursoBuscado) {
    /*Asignamos la imagen al curso*/
    const fotoCurso = document.getElementById('JS-foto__curso');
    const urlImg = cursoBuscado.img;
    fotoCurso.src = urlImg;

    /*Asignamos el titulo al curso*/
    const titulo = document.getElementById('JS-titulo__principal');
    titulo.innerText = cursoBuscado.nombre;

    /*Asignamos el precio al curso*/
    const precio = document.getElementById('JS-precio__curso');
    precio.innerText = cursoBuscado.precio.toLocaleString();

    /*Asignamos las horas al curso*/
    const horas = document.getElementById('JS-horas__curso');
    horas.innerText = cursoBuscado.horas + ' hs';

    /*Asignamos la descripcion al curso*/
    const descripcion = document.getElementById('JS-descripcion__curso');
    descripcion.innerText = cursoBuscado.descripcion;

    /*Asignamos la informacion del docente*/
    docenteDinamico.innerText = cursoBuscado.profesor.nombre + ' ' + cursoBuscado.profesor.apellido;
    docenteDescripcionDinamico.innerText = cursoBuscado.profesor.informacion;


}
const cursosContainer = document.querySelector('.lesson__items');

function crearCursos(cursos) {

    if (cursos) {
        cursos.forEach(curso => {
            const nuevoCurso = document.createElement('div');
            nuevoCurso.classList = 'lesson__item';
            nuevoCurso.innerHTML = generarContenidoDeCurso(curso);
            cursosContainer.appendChild(nuevoCurso);
            nuevoCurso.getElementsByTagName('button')[0].addEventListener('click', () => {
                agregarCursoACarrito(curso)
                crearCursos();
                calcularTotalDelCarrito();
                revisarMensajeDeCarrito();
                sePuedeContinuarEnCarrito();
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

/*filtro para mostrar los cursos excepto en el cual me encuentro*/
const cursosFiltrados = cursos.filter(curso => curso != cursoBuscado);
crearCursos(cursosFiltrados);