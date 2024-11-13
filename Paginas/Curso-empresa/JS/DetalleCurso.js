const idCurso = sessionStorage.getItem('idCurso');
sessionStorage.removeItem('idCurso');
console.log(idCurso);

const cursobuscado = cursos.find(curso => curso.id === idCurso);

