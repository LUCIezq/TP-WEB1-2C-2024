const buttons = document.getElementById('buttons');
const perfil__container = document.getElementById('perfil__container');
const perfil__icon = document.getElementById('perfil');
const perfil__content = document.getElementById('perfil__content');

perfil__icon.addEventListener('mouseover', () => {
    perfil__content.classList.add('dropdown__header--visible');
})
perfil__content.addEventListener('mouseleave', () => {
    perfil__content.classList.remove('dropdown__header--visible');
})

const estaLogueado = sessionStorage.getItem('estaLogueado');

if (estaLogueado) {
    buttons.classList.add('buttons--hidden');
    perfil__container.classList.add('dropdown__header--visible');
} else {
    buttons.classList.remove('buttons--hidden');
    perfil__container.classList.remove('dropdown__header--visible');
}

const usuarios = JSON.parse(sessionStorage.getItem('usuarios'));
const email = url.searchParams.get('email');
const user = usuarios.find(usuario => usuario.email == email);

if (usuarios) {
    const nombre = user.nombre;
    perfil__icon.innerText = nombre.charAt(0);
    const perfil__iconContent = document.getElementById('perfil-dropdown').innerText = nombre.charAt(0);
    const name = document.getElementById('name');
    name.innerText = nombre;
    const emailAdress = document.getElementById('email');
    emailAdress.innerText = email;
}

