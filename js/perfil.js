let perfilNombre = document.getElementById("nombre");
let perfilMail = document.getElementById("mail");
let perfilTelefono = document.getElementById("telefono");
let perfilCiudad = document.getElementById("ciudad");


perfilNombre.value = "Juan Sosa";
perfilMail.value = "juan@gmail.com";
perfilTelefono.value = "123456789";
perfilCiudad.value = "CABA";




let perfilForm = document.getElementById("perfil-form");

perfilForm.addEventListener("submit", function(event){
    event.preventDefault();
    let nombreInput = perfilNombre.value;

    let mailInput = perfilMail.value;
    let telefonoInput = perfilTelefono.value;
    let ciudadInput = perfilCiudad.value;

    if(nombreInput=== "" || mailInput === "" || telefonoInput === "" || ciudadInput=== ""){
        let mensaje = document.getElementById("mensaje");
        mensaje.classList.remove("texto-verde");
        mensaje.classList.add("texto-rojo");
        mensaje.innerHTML = "Por favor complete todos los campos";
    }else{
        perfilNombre.value = nombreInput;
        perfilMail.value = mailInput;
        perfilTelefono.value = telefonoInput;
        perfilCiudad.value = ciudadInput;

        mensaje.classList.remove("texto-rojo");
        mensaje.classList.add("texto-verde");
        mensaje.innerHTML = "Cambios guardados correctamente";
    }
});