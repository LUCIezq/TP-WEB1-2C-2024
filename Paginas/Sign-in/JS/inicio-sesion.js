document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Inicio de sesión exitoso.");
            window.location.href = "../../index.html";
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    });
});
