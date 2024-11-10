document.addEventListener("DOMContentLoaded", function () {
  
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
      
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        if (name && email && password) {
           
            const user = {
                name: name,
                email: email,
                password: password
            };

            
            localStorage.setItem("user", JSON.stringify(user));

            alert("Usuario registrado con éxito.");
            window.location.href = "../Sign-in/sign-in.html?registered=true";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});