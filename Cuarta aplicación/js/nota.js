function promedio() {
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var respuesta = document.getElementById("respuesta");
    
    var sumaNotas = (parseFloat(nota1) +parseFloat (nota2) +parseFloat (nota3));
    var promedio = sumaNotas/3;

    if (promedio >= 3.0 ){
        respuesta.innerHTML = "Felicitaciones "+ nombre + ",<font color=green>su nota es "+ promedio+ ",</font>"+"pasaste la materia de " +materia+".";
    } else{
        respuesta.innerHTML = "Lo siento "+ nombre + ",<font color=red>su nota es  "+ promedio+ ",</font>" + "no pasaste la materia de " +materia+".";

    }
}