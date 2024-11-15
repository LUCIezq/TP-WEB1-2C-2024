const formulario = document.getElementById('form');
const form__state = document.getElementById('form-state');


function sePuedeIniciarSesion() {
    const email = document.getElementById('email').value;
    const contrasenia = document.getElementById('password').value;
    const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));


    if (usuarios) {
        const usuarioBuscado = usuarios.find(usuario => usuario.email === email);

        if (usuarioBuscado && contrasenia === usuarioBuscado.contrasenia) {
            return true;
        }
    }
    form__state
    return false;

}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (sePuedeIniciarSesion()) {
        formulario.submit();
    } else {
        form__state.style.textAlign = ' center';
        form__state.classList.add('form__state--activo');
    }

})