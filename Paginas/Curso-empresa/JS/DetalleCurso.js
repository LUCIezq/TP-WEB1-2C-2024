const idCurso = sessionStorage.getItem('idCurso');
const cursobuscado = cursos.find(curso => curso.id == idCurso);
const form = document.getElementById('form');
let id = 0;
let total = document.getElementById('lesson-price');

const modal_empresa = document.querySelector("#modal_empresa-js");
const content_tbody = document.getElementById("table-information");
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
          <label for="Nombre${id}" class="form__label">Nombre</label>
          <input type="text" class="form__input" id="Nombre${id}" name="nombre${id}" required placeholder="Ezequiel">
        </div>

        <div class="div__container-input">
          <label for="Apellido${id}" class="form__label">Apellido</label>
          <input type="text" class="form__input" id="Apellido${id}" name="apellido${id}" required placeholder="Luci">
        </div>

        <div class="div__container-input">
          <label for="Dni${id}" class="form__label">DNI</label>
          <input type="text" class="form__input" id="Dni${id}" name="dni${id}" required placeholder="44861881">
        </div>

        <div class="div__container-input">
          <label for="email${id}" class="form__label">Email</label>
          <input type="email" class="form__input" id="email${id}" name="email${id}" required placeholder="alguien@gmail.com">
        </div>

        <div class="div__container-input">
          <label for="telefono${id}" class="form__label">Telefono</label>
          <input type="number" class="form__input" id="telefono${id}" name="telefono${id}" required placeholder="1153173959">
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


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const count = document.querySelectorAll('.container__form').length;
    console.log(data);
    for (let i = 0; i < count; i++) {
        const indice = String(i);
        const item = document.createElement('tr');
        item.innerHTML =
            `<td>${(i + 1)}</td>
        <td>${(data['nombre' + indice])}</td>
        <td>${(data['apellido' + indice])}</td>
        <td>${(data['dni' + indice])}</td>
        <td>${(data['email' + indice])}</td>
        <td>${(data['telefono' + indice])}</td>`;

        content_tbody.appendChild(item);
    }
    modal_empresa.classList.add('modal_empresa--visible');

    const closeModal = document.getElementById('close-modal').addEventListener('click', () => {
        modal_empresa.classList.remove('modale_empresa--visible');
        form.submit();
    })

})


crearCampo();
deleteCampo();
calcularPrecioTotal();
