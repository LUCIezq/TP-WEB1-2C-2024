// document.addEventListener("DOMContentLoaded", function () {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (isLoggedIn === "true") {
        
//         const botonIniciarSesion = document.querySelector(".header__right-button-login");
//         const botonRegistrarse = document.querySelector(".header__right-button-register");
    
            botonIniciarSesion.remove();
            botonRegistrarse.remove();
            
            let perfilRuta;
            if (window.location.pathname.includes("/Paginas/")) {
                
                perfilRuta = "../Perfil/perfil.html";
            } else {
                
                perfilRuta = "./Paginas/Perfil/perfil.html";
            }

            const perfilHTML = `<a class="header__right-button-register button" href="${perfilRuta}">Perfil</a>`;

//             const headerRightButtons = document.querySelector(".header__right-buttons");
//             headerRightButtons.insertAdjacentHTML("beforeend", perfilHTML);
//         }
//     }
// );


