function validar() {
    var texto = document.getElementById('texto').value;
    var respuesta = document.getElementById('respuesta');

    if (isNaN(texto)) {
        respuesta.textContent = "TEXTO";
    } else {
        respuesta.textContent = "NÚMERO";
    }
}

