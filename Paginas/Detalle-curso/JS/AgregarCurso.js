const buttonComprar = document.getElementById('JS-button-comprar');
const id = new URL(location.href).searchParams.get('idCurso');
const cursoAgregar = cursos.find(curso => curso.id == id);


buttonComprar.addEventListener('click', () => {
    agregarCursoACarrito(cursoAgregar);
});
