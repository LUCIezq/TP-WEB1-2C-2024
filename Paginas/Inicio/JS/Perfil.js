const buttons = document.getElementById('buttons');
const perfil__container = document.getElementById('perfil__container');
const perfil__icon = document.getElementById('perfil');
const perfil__content = document.getElementById('perfil__content');
const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));


perfil__icon.addEventListener('mouseover', () => {
    perfil__content.classList.add('dropdown__header--visible');
})
perfil__content.addEventListener('mouseleave', () => {
    perfil__content.classList.remove('dropdown__header--visible');
})

function seLogueo() {
    if (usuarios) {
        const user = usuarios.find(usuario => usuario.estaLogueado == true);

        if (user) {
            buttons.classList.add('buttons--hidden');
            perfil__container.classList.add('dropdown__header--visible');
            modificarDatos(user);
        } else {
            buttons.classList.remove('buttons--hidden');
            perfil__container.classList.remove('dropdown__header--visible');
        }
    }
}

function modificarDatos(user) {

    if (user) {
        const nombre = user.nombre;
        perfil__icon.innerText = nombre.charAt(0);
        const perfil__iconContent = document.getElementById('perfil-dropdown').innerText = nombre.charAt(0);
        const name = document.getElementById('name');
        name.innerText = nombre;
        const emailAdress = document.getElementById('emailPerfil');
        emailAdress.innerText = user.email;
    }
}


const cerrarSesion = document.querySelectorAll('.log__out')
cerrarSesion.forEach(item => {
    item.addEventListener('click', () => {
        const user = usuarios.find(usuario => usuario.estaLogueado == true);
        user.estaLogueado = false;
        sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
        sessionStorage.removeItem('usuarioLogueado');
        seLogueo();
    })
})

perfil__content.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown__perfil');
    dropdown.classList.toggle('dropdown__perfil--active');
})


seLogueo();

const personalCursos = document.getElementById('personal-cursos');
const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

if (usuarioLogueado && personalCursos) {
    if (usuarioLogueado.cursos.length > 0) {
        personalCursos.classList.add('personal__cursos--hidden');
    } else {
        personalCursos.classList.remove('personal__cursos--hidden');
    }
}
if (usuarioLogueado) {
    const usuarioText = document.getElementById('usuario');
    usuarioText.value = usuarioLogueado.nombre;
    const emailText = document.getElementById('email');
    emailText.value = usuarioLogueado.email;
    const fotoDePerfil = document.getElementById('fotoDePerfil');
    fotoDePerfil.innerText = usuarioLogueado.nombre.charAt(0);
}
