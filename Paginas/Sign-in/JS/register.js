document.addEventListener("DOMContentLoaded", function () {
  
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
      
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioExistente = usuarios.some(usuario => usuario.email === email);
    
        if (usuarioExistente) {
            alert("El correo electrónico ya está registrado. Por favor, utiliza otro.");
            return;

        } else if (name && email && password) {
           
            const usuario = {
                name: name,
                email: email,
                password: password
            };

            usuarios.push(usuario);

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Usuario registrado con éxito.");
            window.location.href = "../Sign-in/sign-in.html?registered=true";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});