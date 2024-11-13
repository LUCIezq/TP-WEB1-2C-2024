const fomulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input,textarea');


function validarNombre(nombre) {
    return nombre === '';
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    text: false
}

function validarCampo(e) {
    let textContent = e.target.value;
    const inputType = e.target.name;
    const input = e.target;

    switch (inputType) {
        case 'nombre':
            const errorName = document.getElementById('error-name');
            errorName.classList.add('input__error');
            if (validarNombre(textContent)) {
                errorName.innerText = 'El nombre no puede estar vacio.'
                campos.nombre = false;
                input.classList.remove('input__check');
            } else {
                errorName.innerText = ''
                campos.nombre = true;
                input.classList.add('input__check');
            }

            break;
        case 'apellido':
            const errorApellido = document.getElementById('error-apellido');
            errorApellido.classList.add('input__error');
            if (validarNombre(textContent)) {
                errorApellido.innerText = 'El apellido no puede estar vacio.'
                campos.apellido = false;
                input.classList.remove('input__check');
            } else {
                errorApellido.innerText = ''
                campos.apellido = true;
                input.classList.add('input__check');
            }
            break;
        case 'email':
            const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const errorMail = document.getElementById('error-mail');
            errorMail.classList.add('input__error')
            if (regexMail.test(textContent)) {
                errorMail.innerText = '';
                campos.email = true;
                input.classList.add('input__check');
            } else {
                errorMail.innerText = 'El email debe contener un formato válido. Asegúrate de incluir un "@" y un dominio, como ejemplo@dominio.com.';
                campos.email = false;
                input.classList.remove('input__check');
            }
            break;
        case 'telefono':
            const regexTelefono = /^\d{4}-?\d{4}$/;
            const errorTelefono = document.getElementById('error-telefono');
            errorTelefono.classList.add('input__error')
            if (regexTelefono.test(textContent)) {
                errorTelefono.innerText = ''
                input.classList.add('input__check');
                if (!textContent.includes('-')) {
                    textContent.value = textContent.slice(0, 4) + '-' + textContent.slice(4);
                }
                campos.telefono = true;
            } else {
                errorTelefono.innerText = 'Número de teléfono inválido.'
                input.classList.remove('input__check');
                campos.telefono = false;
            }
            break;
        case 'mensaje':
            const cantidadCaracteres = textContent.length || 0;
            const caracteresActuales = document.getElementById('caracteres-actuales');
            caracteresActuales.innerText = cantidadCaracteres;
            const container = document.getElementById('caracteres__container')
            const errorText = document.getElementById('error__text');
            errorText.classList.add('input__error');


            if (cantidadCaracteres > 100) {
                caracteresActuales.classList.add('input__error')
                errorText.innerText = 'Se ha superado la cantidad maxima de 100 caracteres.'
                campos.text = false;
            } else {
                caracteresActuales.classList.remove('input__error')
                errorText.innerText = ''
                campos.text = true;
            }

            break;
    }
}


inputs.forEach(input => {
    input.addEventListener('keyup', validarCampo);
    input.addEventListener('blur', validarCampo);
})

fomulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre && campos.apellido && campos.email && campos.telefono && campos.text) {
        fomulario.submit();
        errorForm.innerText = '';
    } else {
        const errorForm = document.getElementById('form__error');
        errorForm.classList.add('input__error')
        errorForm.innerText = 'Asegurese de completar todos los campos.'
    }
})




