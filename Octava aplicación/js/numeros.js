function validacion() {

    const numeros = document.getElementById("numero").value;
    const numerosGuardados = numeros.split(",");
    const pares = numerosGuardados.filter(numero => numero % 2 == 0 && numero % 1 == 0);
    const impares = numerosGuardados.filter(numero => (numero % 2 != 0 && numero % 1 == 0));
    const enteros = numerosGuardados.filter(numero => numero % 1 != 0);

    if (pares.lenght != 0) {
        respuesta.innerHTML = pares.join(", ") + "<font color=blue> son un número par </font>";
    } 
    if (impares.length != 0) {
        for (index = 0; index < impares.length; index++) {
            if (isNaN(impares[index])) {
                impares[index] = " ";
            }
        }
        segResult.innerHTML = impares.join(", ")  +"<font color=green> son un número impar </font>" ;
    } 
    if (enteros.lenght != 0) {
        terResult.innerHTML = enteros.join(", ") + "<font color=red> no son un número entero </font>" ;
    }
}




