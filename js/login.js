let usuario = {
    nombre: "Juan2023",
    password:"12345"

}

let login = document.getElementById("login-form");
login.addEventListener("submit", function(event){
    event.preventDefault();
    let usuarioInput = document.getElementById("usuario");
    let passwordInput = document.getElementById("password");

    if(usuarioInput.value === usuario.nombre && passwordInput.value === usuario.password){
        window.location.href = "perfil.html";
    }else if(usuarioInput.value != usuario.nombre){
        
        let error = document.getElementById("error");
        error.innerHTML = "Usuario incorrecto";
    }
    else if(passwordInput.value != usuario.password){
        
        let error = document.getElementById("error");
        error.innerHTML = "Contraseña incorrecta";
    }
    else{
        let error = document.getElementById("error");
        error.innerHTML = "Usuario y contraseña incorrectos";
    }
});