function validarFormularios() {
    let usuario = getElementById("usuario").value;
    let contraseña = getElementById("contraseña").value;


if (usuario == null || usuario.legth == 0 ) {
    alert(
        "Error el campo usuario no debe estar vacio"
    );
    return false;
}

if (contraseña == null || contraseña.legth == 0 ) {
    alert(
        "Error el campo contraseña no debe estar vacio"
    );
    return false;   
}

return true;
}
