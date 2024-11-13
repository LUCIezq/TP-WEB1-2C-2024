function alternarPassword(){
    const eyePassword = document.getElementById('JS-password-eye');

    eyePassword.addEventListener('click', () => {
        const password = document.getElementById('password');
    
        if (password.type == 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    })
    
}

alternarPassword();