const buttonsPerfil = document.querySelectorAll('.edit__button');

buttonsPerfil.forEach(button => {
    const inputTarget = button.getAttribute('name');

    button.addEventListener('click', e => {
        const input = document.getElementById(inputTarget);

        if (input.hasAttribute('readonly')) {
            input.removeAttribute('readonly');
            input.classList.add('input__active');
        }
    })
})