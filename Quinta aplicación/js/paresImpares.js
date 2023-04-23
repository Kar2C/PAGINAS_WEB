function validar() {
    var numero = document.getElementById('numero').value;

    if ((numero % 2 == 0 && numero > 0)||(numero==0)) {
        document.getElementById('area').value = "El número es par";
    } else if (numero % 1 != 0 && numero > 0) {
        document.getElementById('area').value = "Debe ingresar un número entero";
    }
    else if (numero < 0 && numero % 1 != 0 ) {
        document.getElementById('area').value = "Los números deben ser enteros positivos";
    } else if (numero < 0 ) {
        document.getElementById('area').value = "EL número ingresado debe ser positivo";
    }
    else {
        document.getElementById('area').value = "El número es impar";
    }
}