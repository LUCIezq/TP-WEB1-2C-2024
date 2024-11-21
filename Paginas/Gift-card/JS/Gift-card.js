// Form Gift-card
let buttonInputSelector = document.querySelector("#giftcard__button-js");

// Input nombre
let nombreInputSelector = document.querySelector("#gift-card__nombre-js");
let nombreCardSelector = document.querySelector(".tarjeta__destinatario");
let divErrorNombreSelector = document.querySelector("#error__nombre-js")

nombreInputSelector.addEventListener("keyup", (event) => {
    let nombreCard = event.target.value;
    let regExp = /[^a-zA-Z ]/g;

    if (regExp.test(nombreInputSelector.value)) {
        divErrorNombreSelector.innerHTML = "Formato incorrecto, solo letras.";
    } else {
        divErrorNombreSelector.innerHTML = "";
        if (nombreInputSelector.value.length >= 1 && nombreInputSelector.value.length <= 12) {
            nombreCardSelector.innerHTML = nombreCard;
        } else if (nombreInputSelector.value.length > 12) {
            divErrorNombreSelector.innerHTML = "Limite de caracteres excedido.";
        } else if (nombreInputSelector.value == "") {
            nombreCardSelector.innerHTML = "DESTINATARIO";
        }
    }
})

// Input color
let colorInputSelectores = document.querySelectorAll("input[name='color']");
let colorCardSelector = document.getElementById("#giftcard__tarjeta__color-js");
let colorDestinattarioSelector = document.querySelector(".tarjeta__destinatario");

let colorCard = () => {
    let color = document.querySelector("input[name='color']:checked").value;
    colorDestinattarioSelector.style.color = color;
}
colorInputSelectores.forEach(colorInputSelector => {
    colorInputSelector.addEventListener("change", colorCard);
});

// Input tamaño de fuente
let tamanioFuenteInputSelectores = document.querySelectorAll("input[name='tamanio']");
let tamanioFuenteClaseSelector = document.querySelector(".tarjeta__destinatario");

let tamanioFuenteCard = () => {
    let tamanioFuente = document.querySelector("input[name='tamanio']:checked").value;
    tamanioFuenteClaseSelector.style.fontSize = tamanioFuente;
}

tamanioFuenteInputSelectores.forEach(tamanioFuenteInputSelector => {
    tamanioFuenteInputSelector.addEventListener("change", tamanioFuenteCard);
});

// Input monto
let montoInputSelector = document.querySelector("#monto-js");
let montoCardSelector = document.querySelector(".tarjeta__precio-js");
let divErrorMontoSelector = document.querySelector("#error__monto-js")

montoInputSelector.addEventListener("keyup", (event) => {
    let montoCard = event.target.value;
    let regExp = /[^0-9]/g;

    if (regExp.test(montoInputSelector.value)) {
        divErrorMontoSelector.innerHTML = "Formato incorrecto, solo números.";
        buttonInputSelector.style.opacity = "50%";
        buttonInputSelector.disabled = true;
    } else {
        divErrorMontoSelector.innerHTML = "";
        buttonInputSelector.style.opacity = "100%";
        buttonInputSelector.disabled = false;
        if (montoInputSelector.value.length >= 1 && montoInputSelector.value.length <= 5) {
            montoCardSelector.innerHTML = montoCard;
        } else if (montoInputSelector.value.length > 5) {
            divErrorMontoSelector.innerHTML = "Limite de caracteres excedido.";
        } else if (montoInputSelector.value == "") {
            montoCardSelector.innerHTML = "00000";
        }
    }
})

// Input ubicacion
let ubicacionInputSelectores = document.querySelectorAll("input[name='ubicacion']");
let ubicacionClaseSelector = document.querySelector(".tarjeta__precio");

let ubicacionCard = () => {
    let ubicacion = document.querySelector("input[name='ubicacion']:checked").value;
    ubicacionClaseSelector.style.top = "revert";
    ubicacionClaseSelector.style.bottom = "revert";
    ubicacionClaseSelector.style.rigth = "revert";
    ubicacionClaseSelector.style.left = "revert";

    if (ubicacion == "abajoizquierda") {
        ubicacionClaseSelector.style.bottom = "0";
        ubicacionClaseSelector.style.left = "0";
    } else if (ubicacion == "arribaizquierda") {
        ubicacionClaseSelector.style.top = "0";
        ubicacionClaseSelector.style.left = "0";
    } else {
        ubicacionClaseSelector.style.bottom = "0";
        ubicacionClaseSelector.style.rigth = "0";
    }
}

ubicacionInputSelectores.forEach(ubicacionInputSelector => {
    ubicacionInputSelector.addEventListener("change", ubicacionCard);
});

// Input fondo
let fondoInputSelectores = document.querySelectorAll("input[name='fondo']");
let fondoClaseSelector = document.querySelector(".giftcard__tarjeta");

let fondoCard = () => {
    let color = document.querySelector("input[name='fondo']:checked").value;
    fondoClaseSelector.style.backgroundColor = color;
}
fondoInputSelectores.forEach(fondoInputSelector => {
    fondoInputSelector.addEventListener("change", fondoCard);
});

let id=1;

buttonInputSelector.addEventListener('click', () => {
    
    const gift = {
        id:id++,
        nombre: 'Gift card para [' + nombreInputSelector.value + ']',
        precio: montoInputSelector.value,
        tipo: 'GiftCard'
    }
    agregarCursoACarrito(gift);
})