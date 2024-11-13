const items = document.querySelectorAll('.lesson__name');

items.forEach(item => {
    const nombreCurso = item.textContent.trim();
    const cursoBuscado = cursos.find(curso => curso.nombre == nombreCurso);
   
    if (cursoBuscado) {
        const content = document.createElement('div');
        content.classList.add('pop__up');
        content.innerHTML = crearContenido(cursoBuscado);
        const container = item.parentNode;
        container.appendChild(content);

        item.addEventListener('click', () => {
            content.classList.toggle('visible')
        })

       

    }

})

function crearContenido(curso) {
    const precio = curso.precio.toLocaleString();
    return `<h1 class="curso__nombre">${curso.nombre}</h1>
        <div class="curso__detalles">
        <span>${curso.horas} hs</span>
        <span>$${precio}</span>
        </div>
        <a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}" class="curso__link">Ver detalle</a>
`;
}