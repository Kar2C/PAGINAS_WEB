function validacion() {

    const numeros = document.getElementById("numero").value;
    const numerosGuardados = numeros.split(",");
    const pares = numerosGuardados.filter(numero => numero % 2 == 0);
    const impares = numerosGuardados.filter(numero => numero % 2 != 0);
    const enteros = numerosGuardados.filter(numero => numero % 1 != 0);

    if (pares.lenght != 0) {
        respuesta.innerHTML = "<font color=red> Los números pares que usted ingreso son: </font>" + pares.join(", ");
    } else {
        respuesta.innerHTML = "No existen números pares en los que usted ingreso";
    }
    if (impares.length != 0) {
        for (index = 0; index < impares.length; index++) {
            if (isNaN(impares[index])) {
                impares[index] = " ";
            }
        }
        segResult.innerHTML = "<font color=green>Los números impares que usted ingreso son: </font>" + impares.join(", ");
    } else {
        segResult.innerHTML = "No hay números impares en los que usted ingreso"
    }
    if (enteros.lenght != 0) {
        terResult.innerHTML = "<font color=blue> No hay números enteros </font>" + enteros.join(", ");
    }
}




