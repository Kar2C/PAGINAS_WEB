function validar(){
    var nombre=document.getElementById('nombre').value;

    if(nombre==""){
        document.getElementById('area').value="Campo en blanco";
        document.getElementById('nombre').style.borderColor = "blue";
    }else if(!isNaN(nombre)){
        document.getElementById('area').value="No se pueden ingresar números";
        document.getElementById('nombre').style.borderColor = "yellow";
        document.getElementById('nombre').style.backgroundColor = "gray";
    }else{
        procesar(nombre);
    }
}

function procesar(nombre){
    // var cantidad = nombre.length;
    // var nombre_mayus = nombre.toUpperCase();
    // var mensaje = nombre_mayus +  cantidad + ' caracteres.';

    document.getElementById('area').value = 'La palabra/oración ' + nombre + ' contiene ' + nombre.length + ' caracteres.';
}