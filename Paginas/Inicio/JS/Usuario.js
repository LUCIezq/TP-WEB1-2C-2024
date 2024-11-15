class Usuario {
    constructor(nombre, email, contrasenia) {
        this._nombre = nombre;
        this._email = email;
        this._contrasenia = contrasenia;
    }

    get email() {
        return this._email;
    }
}