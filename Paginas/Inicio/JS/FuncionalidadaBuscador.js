/* Input donde se va a escribir lo que quiero buscar*/
const inputBuscador = document.querySelector('.header__center-input');
/* Cursos por los cuales voy a iterar para obtener los nombres y comparar*/
const cursosElement = cursos;
/*ul en donde voy a meter o eliminar los elementos que coincidan*/
const ul = document.getElementById('JS-input__resultados');
const removeInputText = document.getElementById('JS-remove-input-text');


inputBuscador.addEventListener('click', e => {
    ul.style.display = 'flex';
})

/*Agrego escuchador para obtener por cada letra ingresada la palabra que se va formando */
inputBuscador.addEventListener('keyup', (e) => {

    /*Obtengo la palabra formada */
    const inputValue = inputBuscador.value.toLowerCase();

    /*Pregunto si es distinto de vacio(Una cadena vacia es siempre una subcadena de cualquier elemento) */
    if (inputValue != '') {

        removeInputText.style.display = 'block';

        /*Recorro todos los cursos para obtener el nombre y comparar */
        cursosElement.forEach(curso => {
            const nombreCurso = curso.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            /*Obtengo las sugerencias actuales de mi ul */
            const sugerenciasActuales = Array.from(ul.children);

            actualizarSugerencias(sugerenciasActuales, inputValue);
            crearSugerencias(curso, nombreCurso, inputValue, sugerenciasActuales)
        })

        /*Si es vacio limpio mi ul borrando todos los elementos*/
    } else {
        ul.innerHTML = '';
        removeInputText.style.display = 'none';
    }
})

removeInputText.addEventListener('click', e => {
    inputBuscador.value = "";
    ul.innerHTML = '';
    removeInputText.style.display = 'none';
})

document.addEventListener('click', e => {
    /*Devuelve true si inputBuscador contiene a e.target o es el mismo elemento */
    if (!inputBuscador.contains(e.target) && !ul.contains(e.target)) {
        ul.style.display = 'none';
    }
})


/*Pregunto si el nombre de mis cursos incluye lo que se ingresa */
function crearSugerencias(curso, nombreCurso, inputValue, sugerenciasActuales) {
    if (nombreCurso.includes(inputValue)) {
        /*Creo un elemento */
        const nuevaSugerencia = document.createElement('li');
        nuevaSugerencia.innerHTML = `<a href="/Paginas/Detalle-curso/detalle-curso.html?idCurso=${curso.id}">${nombreCurso}</a>`;

        /*Analizo si ya existe para no agregarlo mas de una vez */
        const yaExiste = sugerenciasActuales.some(item => item.textContent === nombreCurso)
        if (!yaExiste) {
            ul.appendChild(nuevaSugerencia);
        }
    }
}

/*Recorro las sugerencias y si encuentro sugerencias que dejan 
de coincidir con lo que se ingresa las elimina */
function actualizarSugerencias(sugerenciasActuales, inputValue) {

    sugerenciasActuales.forEach(sugerencia => {
        if (!sugerencia.textContent.includes(inputValue)) {
            ul.removeChild(sugerencia);
        }
    })
}