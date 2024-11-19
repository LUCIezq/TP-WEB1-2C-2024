const cursosContainer = document.getElementById('lessons__container');
const usuario = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

function generarContenidoDeCurso(curso) {


    return `<a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="container__img-link"><img src="${curso.img}" alt=""></a>
<div class="container__information">
    <div class="container__mid-information">
        <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="lesson__title">${curso.nombre}</a>
    
        <p class="lesson__description">${curso.descripcion}</p>

         <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="lesson__link">Ver detalle</a>
    </div>

    <div class="container__bottom-information">
        <span class="lesson__hours">${curso.horas}hs</span>
    </div>
</div>
`;
}

if (usuario) {
    const cursos = usuario.cursos;
    cursos.forEach(curso => {
        const item = document.createElement('li');
        item.innerHTML = generarContenidoDeCurso(curso);
        item.classList.add('lesson__item');
        cursosContainer.appendChild(item);
    })

}
