const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const modal = document.getElementById('modal');

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tarjeta: /^\d{16}$/, // 16 caracteres
    mes: /^(1[0-2]|[1-9])$/,
    anio: /^(?:[1-9][0-9]{3})$/,
    cvv: /^\d{3}$/
}
const campos = {
    email: false,
    numeroTarjeta: false,
    mes: false,
    anio: false,
    cvv: false
}
const errores = {
    email: 'El email debe contener un formato válido. Asegúrate de incluir un "@" y un dominio, como ejemplo@dominio.com',
    numeroTarjeta: 'El número de tarjeta de crédito debe contener 16 dígitos, sin espacios ni guiones.'
}


function validarCampo(expresion, input, inputValue, campo) {
    if (expresion.test(inputValue)) {
        input.classList.add('formulario__correcto');
        input.classList.remove('formulario__incorrecto');
        campos[campo] = true;
    } else {
        input.classList.add('formulario__incorrecto');
        input.classList.remove('formulario__correcto');
        campos[campo] = false;
    }

}

function validarFormulario(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    switch (inputName) {
        case 'email':
            const pErrorEmail = document.querySelector('.input__error-email');
            const email = document.getElementById('email');
            validarCampo(expresiones.correo, email, inputValue, 'email');
            if (!campos.email) {
                pErrorEmail.innerText = errores.email;
            } else {
                pErrorEmail.innerText = '';
                const email = document.getElementById('JS-main__orden-email').innerText = inputValue;
            }
            break;
        case 'credit-card':
            const pErrorCreditCard = document.querySelector('.input__error-credit-card');
            const numeroTarjeta = document.getElementById('credit-card');
            validarCampo(expresiones.tarjeta, numeroTarjeta, inputValue, 'numeroTarjeta');

            if (!campos.numeroTarjeta) {
                pErrorCreditCard.innerText = errores.numeroTarjeta;
            } else {
                pErrorCreditCard.innerText = '';
            }

            break;
        case 'fecha-expiracion-mes':
            const expiracionMes = document.getElementById('fecha-expiracion-mes');
            validarCampo(expresiones.mes, expiracionMes, inputValue, 'mes');
            break;
        case 'fecha-expiracion-anio':
            const expiracionAnio = document.getElementById('fecha-expiracion-anio');
            validarCampo(expresiones.anio, expiracionAnio, inputValue, 'anio');
            break;
        case 'cvv':
            const cvv = document.getElementById('cvv');
            validarCampo(expresiones.cvv, cvv, inputValue, 'cvv');
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//Cuando levanto la tecla
    input.addEventListener('blur', validarFormulario); //Si hago click fuera del input
})

function actualizarDatosModal() {
    const fecha = document.getElementById('JS-main__orden-date');
    fecha.innerText = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    const precio = document.getElementById('JS-main__orden-total').innerText = '$' + JSON.parse(sessionStorage.getItem('totalCarrito')).toLocaleString();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.email && campos.numeroTarjeta && campos.mes && campos.anio && campos.cvv) {

        actualizarDatosModal();

        modal.showModal();
        const form__status = document.getElementById('form__status');
        sessionStorage.removeItem('cursos');
        const closeModal = document.getElementById('modal__link').addEventListener('click', () => {
            formulario.submit();
        })
    } else {
        const form__status = document.getElementById('form__status');
        form__status.classList.add('error');
        form__status.innerText = 'Por favor asegurese de completar todos los campos.';
    }
})