function numDivs(){
    var numero1= document.getElementById('numero1').value;
    var numero2= document.getElementById('numero2').value;
    var contador=0;

    if(numero1%1!=0){
        respuesta.innerHTML= "El numero "+ numero1 + " debe ser entero";
        contador = 1;
    } 
    if(numero2%1!=0){
        respuesta2.innerHTML= "El numero "+ numero2 + " debe ser entero";
        contador = 1;
    }
    if (numero1<0){
        respuesta.innerHTML= "El numero "+numero1+" debe ser positivo";
        contador = 1;
    }
    if (numero2<0){
        respuesta2.innerHTML= "El numero "+numero2+" debe ser positivo";
        contador = 1;
    }
    if (numero1<0 && numero1%1!=0){
        respuesta.innerHTML= "El numero "+numero1+" debe ser entero positivo";
        contador = 1;
    }
    if(numero2<0 && numero2%1!=0){
        respuesta2.innerHTML= "El numero "+numero2+" debe ser entero positivo";
        contador = 1;
    }
    if (contador!=1){
        if (numero1%numero2==0){
            respuesta.innerHTML = "El numero " +numero1+ " es divisible entre el numero "+numero2;
            respuesta2.innerHTML ="";
        }else{
            respuesta.innerHTML = "El numero " +numero1+ " no es divisible entre el numero "+numero2;
            respuesta2.innerHTML = "";
        }
    }
}