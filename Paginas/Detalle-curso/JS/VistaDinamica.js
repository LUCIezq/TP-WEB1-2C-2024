const url = new URL(location.href);
const idCurso = url.searchParams.get('idCurso');
const cursoBuscado = cursos.find(curso => curso.id === parseInt(idCurso));

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
}

