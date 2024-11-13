const inputs = document.querySelectorAll(".container__right-input--second-view");


// CAMBIO DE INPUT AUTOMATICO -ADELANTE
console.log(inputs.length);

for (let i = 0; i < inputs.length; i++) {

  inputs[i].addEventListener('input', e => {
    if (i < inputs.length - 1 && inputs[i].value.length != 0) {
      inputs[i + 1].focus();
    }
  })
}

//ACTUALZIAR EMAIL

const email = document.getElementById("email");
const emailView = document.getElementById("email-view");
const updateButton = document.getElementById("update-button");

function cambiarTexto() {
  emailView.textContent = email.value;
}

updateButton.addEventListener("click", cambiarTexto);


//Cambiar clase active

// const cards = document.querySelectorAll('.container__left-element');
// const buttons = document.querySelectorAll('.container__right-button');

// let index = 0;

// cards.forEach(card => {


//   buttons[index].addEventListener('click', e => {

//     card.classList.add('container__left-element--active');

//   })

//   index++;
// });
const firstPassword = document.getElementById('firstPassword');
const secondePassword = document.getElementById('secondPassword');
const pError = document.getElementById('passwordIncorrect');
const form = document.getElementById('formPassword');

function validarContrasenia() {
  if (firstPassword.value != secondePassword.value) {
    pError.classList.add('input__error');
    pError.innerText = 'Las contraseñas deben coincidir.';
    return false;
  } else {
    pError.innerText = '';
    return true;
  }
}

firstPassword.addEventListener('keyup', validarContrasenia);
secondePassword.addEventListener('keyup', validarContrasenia);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validarContrasenia()) {
    form.submit();
  }
})




