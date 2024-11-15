const formulario = document.getElementById('form');
const form__state = document.getElementById('form-state');
form__state.style.textAlign = 'center';


function mostrarEstado(usuario) {
    form__state.classList.add('form__state--activo');

    if (usuario) {
        form__state.innerText = 'La contraseña ingresada es incorrecta. Por favor, intenta nuevamente.';
    }
    form__state.innerText = 'El correo electrónico ingresado no está registrado. Por favor, verifica los datos o crea una cuenta nueva.';
}

function sePuedeIniciarSesion() {
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('password').value;
    const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));


    if (usuarios) {
        const usuarioBuscado = usuarios.find(usuario => usuario.email === email);

        if (usuarioBuscado) {
            if (contrasenia === usuarioBuscado.contrasenia) {
                sessionStorage.setItem('estaLogueado', JSON.stringify(true));
                return true;
            } else {
                mostrarEstado(usuarioBuscado);
            }
        }
    }
    mostrarEstado(usuarios);
    return false;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (sePuedeIniciarSesion()) {
        formulario.submit();
    }
})