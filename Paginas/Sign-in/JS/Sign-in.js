const formulario = document.getElementById('form');
const form__state = document.getElementById('form-state');
form__state.style.textAlign = 'center';


function sePuedeIniciarSesion() {
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('password').value;
    const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));


    if (usuarios) {
        const usuarioBuscado = usuarios.find(usuario => usuario.email === email);

        if (usuarioBuscado) {
            if (contrasenia === usuarioBuscado.contrasenia) {
                usuarioBuscado.estaLogueado = true;
                sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
                return true;
            } else {
                form__state.classList.add('form__state--activo')
                form__state.innerText = 'La contraseña ingresada es incorrecta. Por favor, intenta nuevamente.'
            }
        } else {
            form__state.classList.add('form__state--activo')
            form__state.innerText = 'El correo electrónico ingresado no está registrado. Por favor, verifica los datos o crea una cuenta nueva.';
        }
    }else{
        form__state.classList.add('form__state--activo')
        form__state.innerText = 'El correo electrónico ingresado no está registrado. Por favor, verifica los datos o crea una cuenta nueva.';
    }
    return false;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (sePuedeIniciarSesion()) {
        formulario.submit();
    }
})