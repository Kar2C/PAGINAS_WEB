function validar(){
    var nombre=document.getElementById('nombre').value;

    if(nombre==""){
        document.getElementById('area').value="Campo en blanco";
        document.getElementById('nombre');
    }else if(!isNaN(nombre)){
        document.getElementById('area').value="No se pueden ingresar números";
        document.getElementById('nombre');
        document.getElementById('nombre');
    }else{
        procesar(nombre);
    }
}

function procesar(nombre){
    document.getElementById('area').value = 'La palabra/oración ' + nombre + ' contiene ' + nombre.length + ' caracteres.';
}