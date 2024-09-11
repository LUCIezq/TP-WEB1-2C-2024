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

const cards = document.querySelectorAll('.container__left-element');
const buttons = document.querySelectorAll('.container__right-button');

let index = 0;

cards.forEach(card => {

  buttons[index].addEventListener('click', e => {

    card.classList.add('container__left-element--active');

  })

  index++;
});


