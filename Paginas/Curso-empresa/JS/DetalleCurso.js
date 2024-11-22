const idCurso = sessionStorage.getItem('idCurso');
const cursobuscado = cursos.find(curso => curso.id == idCurso);
const form = document.getElementById('form');
let id = 0;
let total = document.getElementById('lesson-price');

if (cursobuscado) {
    const h2title = document.getElementById('h2-title').innerText = cursobuscado.nombre;
}

const addPerson = document.getElementById('addPersona');

function crearCampo() {
    const item = document.createElement('div');
    item.classList.add('container__form');
    item.setAttribute('id', String(id));
    item.innerHTML = `
     <div class="div__container-input">
          <label for="Nombre" class="form__label">Nombre</label>
          <input type="text" class="form__input" id="Nombre" name="nombre" required placeholder="Ezequiel">
        </div>

        <div class="div__container-input">
          <label for="Apellido" class="form__label">Apellido</label>
          <input type="text" class="form__input" id="Apellido" name="apellido" required placeholder="Luci">
        </div>

        <div class="div__container-input">
          <label for="Dni" class="form__label">DNI</label>
          <input type="text" class="form__input" id="Dni" name="dni" required placeholder="44861881">
        </div>

        <div class="div__container-input">
          <label for="email" class="form__label">Email</label>
          <input type="email" class="form__input" id="email" name="email" required placeholder="alguien@gmail.com">
        </div>

        <div class="div__container-input">
          <label for="telefono" class="form__label">Telefono</label>
          <input type="number" class="form__input" id="telefono" name="telefono" required placeholder="1153173959">
        </div>

        <img src="./Assets/minus.svg" alt="" class="delete__user" value ='${id}'>
   `;
    form.appendChild(item);
    id++;
    calcularPrecioTotal();
}

function calcularPrecioTotal() {
    const campos = document.querySelectorAll('.container__form');
    let suma = 0;
    campos.forEach(campo => {
        suma += cursobuscado.precio;
    })
    total.innerText = suma.toLocaleString();
}

addPerson.addEventListener('click', () => {
    crearCampo();
    deleteCampo();
});

function deleteCampo() {
    const buttonDelete = document.querySelectorAll('#form img');

    buttonDelete.forEach(button => {
        const value = button.getAttribute('value');

        button.addEventListener('click', () => {
            if (parseInt(value) == 0) {

                const inputs = document.querySelectorAll('.div__container-input input');

                inputs.forEach(input => {
                    input.value = '';
                })

            } else {
                const nodo = document.getElementById(value);
                form.removeChild(nodo);
                calcularPrecioTotal()
            }
        })
    })
}
crearCampo();
deleteCampo();
calcularPrecioTotal();
