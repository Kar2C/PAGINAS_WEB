function validar(){

    var nombre= document.getElementById('nombre').value;
    var edad= document.getElementById('edad').value;
    var respuesta= document.getElementById('respuesta');


    if (edad >= 18 ){
        respuesta.innerHTML = "Hola "+ nombre+ ", eres mayor de edad"
    } else if (edad >0 && edad <18){
        respuesta.innerHTML = "Hola "+ nombre+ ", no eres mayor de edad"
    } else {
        respuesta.innerHTML = nombre+", esta no es una edad valida"
    }

}