function validar() {
    var texto = document.getElementById('texto').value;

    if (typeof texto == 'string') {
        document.getElementById('area').value="El texto ingresado: "+texto+ " es de tipo texto";
    } else if (typeof texto == 'number'){
        document.getElementById('area').value="El texto ingresado: "+texto+ " es de tipo número";
    }
    
}

