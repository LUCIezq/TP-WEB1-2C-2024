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

const personalCursos = document.getElementById('personal-cursos');
const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

if (usuarioLogueado && personalCursos) {
    if (usuarioLogueado.cursos.length > 0) {
        personalCursos.classList.add('personal__cursos--hidden');
    } else {
        personalCursos.classList.remove('personal__cursos--hidden');
    }
}

if (usuarioLogueado) {
    const usuarioText = document.getElementById('usuario');
    usuarioText.value = usuarioLogueado.nombre;
    const emailText = document.getElementById('email');
    emailText.value = usuarioLogueado.email;
    const fotoDePerfil = document.getElementById('fotoDePerfil');
    fotoDePerfil.innerText = usuarioLogueado.nombre.charAt(0);
}

