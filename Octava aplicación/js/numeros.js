function validacion() {

    const numeros = document.getElementById("numero").value;
    const numerosGuardados = numeros.split(",");
    const pares = numerosGuardados.filter(numero => numero % 2 == 0);
    const impares = numerosGuardados.filter(numero => numero % 2 != 0);
    const enteros = numerosGuardados.filter(numero => numero % 1 != 0);

    if (pares.lenght != 0) {
        respuesta.innerHTML = "<font color=blue> Es un número par: </font>" + pares.join(", ");
    } 
    if (impares.length != 0) {
        for (index = 0; index < impares.length; index++) {
            if (isNaN(impares[index])) {
                impares[index] = " ";
            }
        }
        segResult.innerHTML = "<font color=green> Es un número impar: </font>" + impares.join(", ");
    } 
    if (enteros.lenght != 0) {
        terResult.innerHTML = "<font color=red> No es un número entero </font>" + enteros.join(", ");
    }
}




