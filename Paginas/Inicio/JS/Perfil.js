// const perfil__icon = document.getElementById('perfil__icon');
// const perfil__content = document.getElementById('perfil__content');


// perfil__icon.addEventListener('mouseover', () => {
//     perfil__content.classList.add('dropdown__header--visible');
// })

// perfil__content.addEventListener('mouseleave', () => {
//     perfil__content.classList.remove('dropdown__header--visible');

// })

// const buttons = document.getElementById('buttons');
// const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));

// if (estaLogueado) {
//     buttons.classList.add('buttons--hidden');
//     perfil__icon.classList.add('dropdown__header--visible');
// } else {
//     buttons.classList.remove('buttons--hidden');
//     perfil__icon.classList.remove('dropdown__header--visible');
// }

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