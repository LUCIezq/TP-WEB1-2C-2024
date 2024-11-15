const formulario = document.getElementById('form');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const contrasenia = document.getElementById('password');
const contraseniaRepite = document.getElementById('passwordRepite');
const confirmarFormulario = document.getElementById('formButton');

const regexs = {
    name: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
    email: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
}

const validaciones = {
    name: false,
    email: false,
    password: false,
}

function cumpleConLosRequisitos(inputContent, inputType) {
    const formState = document.querySelector(`#container-${inputType} p`);
    if (regexs[inputType].test(inputContent)) {
        validaciones[inputType] = true;
        formState.classList.remove('form__state--activo');
        return true;
    } else {
        formState.classList.add('form__state--activo');
    }
    validaciones[inputType] = false;
    return false;
}

function validarPassword() {
    const formState = document.querySelector(`#container-password p`);
    if (contrasenia.value === contraseniaRepite.value) {
        formState.classList.remove('form__state--activo');
        validaciones.password = true;
    } else {
        formState.classList.add('form__state--activo');
        validaciones.password = false;
    }
}

function validarInput(e) {
    const inputContent = e.target.value;
    const inputType = e.target.name;

    switch (inputType) {

        case 'name':
            cumpleConLosRequisitos(inputContent, inputType)
            break;
        case 'email':
            cumpleConLosRequisitos(inputContent, inputType);
            break;
        case 'password':
            // cumpleConLosRequisitos(inputContent, inputType);
            validarPassword();
            break;
        case 'passwordRepite':
            // cumpleConLosRequisitos(inputContent, inputType);
            validarPassword();
            break;
    }
}

const inputElements = document.querySelectorAll('form input');

inputElements.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validarInput(e);
    });
    input.addEventListener('blur', (e) => {
        validarInput(e);
    });
})

function seEncuentranDatosRegistrado(user) {
    const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));
    if (usuarios) {
        return usuarios.find(usuario => usuario.email === user.email);
    }
    return false;
}

function cargarUsuario(user) {
    const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));

    if (!usuarios) {
        sessionStorage.setItem('usuarios', JSON.stringify([user]));
    } else {
        if (!seEncuentranDatosRegistrado(user)) {
            usuarios.push(user);
            sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }
}

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const stateForm = document.getElementById('form__state-global');
    stateForm.classList.add('form__state--activo');
    stateForm.style.textAlign = 'center';

    if (validaciones.name && validaciones.email && validaciones.password) {
        let user = new Usuario(nombre.value, email.value, password.value);
        if (!seEncuentranDatosRegistrado(user)) {
            cargarUsuario(user);
            formulario.submit();
        } else {
            stateForm.innerText = 'El email ya se encuentra en uso.'
        }

    } else {
        stateForm.innerText = 'Asegurese de completar todos los campos correctamente.'
    }
})

